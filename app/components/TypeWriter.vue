<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const words = [
  'DATA',
  'Artificial Intelligence',
  'Web Development',
  'Software Architecture',
  'IT Consulting',
  'Deployment',
] as const

const currentText = ref(words[0])

let wordIndex = 0
let charIndex = words[0].length
let isDeleting = true

let timeoutId: ReturnType<typeof setTimeout> | null = null
let prefersReducedMotion = false

const clearTimer = () => {
  if (timeoutId === null) return

  clearTimeout(timeoutId)
  timeoutId = null
}

const scheduleNextStep = (delay: number) => {
  clearTimer()
  timeoutId = setTimeout(typeEffect, delay)
}

const typeEffect = () => {
  const currentWord = words[wordIndex]

  if (isDeleting) {
    charIndex = Math.max(0, charIndex - 1)
  } else {
    charIndex = Math.min(
      currentWord.length,
      charIndex + 1,
    )
  }

  currentText.value = currentWord.slice(0, charIndex)

  let delay = isDeleting ? 50 : 70

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true
    delay = 2000
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length
    delay = 350
  }

  scheduleNextStep(delay)
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    clearTimer()
    return
  }

  if (!prefersReducedMotion && timeoutId === null) {
    scheduleNextStep(300)
  }
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (prefersReducedMotion) {
    currentText.value = words[0]
    return
  }

  /*
   * DATA est déjà présent dans le HTML initial.
   * On le laisse visible avant de lancer la boucle.
   */
  scheduleNextStep(2000)

  document.addEventListener(
    'visibilitychange',
    handleVisibilityChange,
  )
})

onBeforeUnmount(() => {
  clearTimer()

  document.removeEventListener(
    'visibilitychange',
    handleVisibilityChange,
  )
})
</script>

<template>
  <span class="typewriter font-bold">
    <span aria-hidden="true">
      {{ currentText }}

      <span
        class="typewriter-cursor ml-0.5 border-r-2 border-primary"
      >
        &nbsp;
      </span>
    </span>

    <span class="sr-only">
      Data, Artificial Intelligence, Web Development,
      Software Architecture, IT Consulting and Deployment
    </span>
  </span>
</template>

<style scoped>
.typewriter-cursor {
  animation: typewriter-blink 0.7s step-end infinite;
}

@keyframes typewriter-blink {
  50% {
    border-color: transparent;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-cursor {
    animation: none;
  }
}
</style>