<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    direction?: 'left' | 'right'
    distance?: number
    duration?: number
  }>(),
  {
    direction: 'left',
    distance: 60,
    duration: 700,
  }
)

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  const element = elementRef.value

  if (!element) return

  /*
   * Accessibilité :
   * aucune animation si l'utilisateur demande
   * une réduction des mouvements.
   */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion) {
    isVisible.value = true
    return
  }

  /*
   * IntersectionObserver est suffisant ici.
   * Aucun GSAP / ScrollTrigger nécessaire.
   */
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return

      isVisible.value = true

      /*
       * Animation exécutée une seule fois.
       * Une fois visible, plus besoin d'observer.
       */
      observer?.disconnect()
      observer = null
    },
    {
      /*
       * Déclenche légèrement avant que l'élément
       * n'entre profondément dans le viewport.
       */
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05,
    }
  )

  observer.observe(element)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <div
    ref="elementRef"
    class="scroll-reveal w-full"
    :class="{ 'scroll-reveal--visible': isVisible }"
    :style="{
      '--reveal-distance':
        `${props.direction === 'left' ? -props.distance : props.distance}px`,
      '--reveal-duration': `${props.duration}ms`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.scroll-reveal {
  opacity: 0;

  transform: translate3d(
    var(--reveal-distance),
    0,
    0
  );

  transition:
    opacity var(--reveal-duration) ease,
    transform var(--reveal-duration)
      cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-reveal--visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>