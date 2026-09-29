<template>
  <span class="font-bold">
    {{ currentText }}
    <!-- Le curseur clignotant -->
    <span class="animate-blink border-r-2 border-primary ml-0.5">&nbsp;</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Liste des mots à faire défiler (ajustez selon votre portfolio)
// const words = ["J'aide les entreprises à transformer leurs idées en produits numériques performants.", "J'aide les entreprises à transformer leurs données en décisions concrètes."]

const words = ["DATA", "Intelligence Artificielle", "Développement Web", "Architecture Logicielle", "Conseille informatique", "Mise en prodution"]

const currentText = ref('')
let wordIndex = 0
let charIndex = 0
let isDeleting = false
let timeoutId = null

const typeEffect = () => {
  const currentWord = words[wordIndex]

  if (isDeleting) {
    // Mode effacement : retire une lettre
    currentText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    // Mode écriture : ajoute une lettre
    currentText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  // Déterminer la vitesse de l'animation
  let typeSpeed = isDeleting ? 100 : 50 // L'effacement est 2x plus rapide

  // Logique de transition entre écrit / effacé
  if (!isDeleting && charIndex === currentWord.length) {
    // Le mot est entièrement écrit -> pause avant de commencer à l'effacer
    typeSpeed = 2000 
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    // Le mot est effacé -> passe au mot suivant
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length
    typeSpeed = 300 // Petite pause avant d'écrire le mot suivant
  }

  // Boucle récursive sécurisée
  timeoutId = setTimeout(typeEffect, typeSpeed)
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  // Nettoie le timeout pour éviter les fuites de mémoire
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<style scoped>
/* Animation du curseur clignotant */
@keyframes blink {
  50% { border-color: transparent }
}
.animate-blink {
  animation: blink 0.7s step-end infinite;
}
</style>
