<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrement du plugin ScrollTrigger auprès de GSAP
gsap.registerPlugin(ScrollTrigger)

const elementRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (!elementRef.value) return

  ctx = gsap.context(() => {
    // Vérification des préférences utilisateur (accessibilité)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Animation au défilement
    gsap.fromTo(elementRef.value, 
      {
        x: -100,      // Position de départ : 100px vers la gauche
        opacity: 0,   // Invisible au départ
      },
      {
        x: 0,         // Rejoint sa position d'origine
        opacity: 1,   // Devient totalement visible
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.value, // L'animation se déclenche sur cet élément
          start: 'top 50%',          // Démarre quand le haut de l'élément atteint 85% de la hauteur de l'écran
          toggleActions: 'play none none none', // Joue l'animation une seule fois au scroll
        }
      }
    )
  })
})

onBeforeUnmount(() => {
  ctx?.revert() // Nettoyage propre pour éviter les fuites de mémoire Nuxt
})
</script>

<template>
  <!-- Le conteneur enveloppe le contenu via un <slot /> -->
  <div ref="elementRef" class="w-full">
    <slot />
  </div>
</template>
