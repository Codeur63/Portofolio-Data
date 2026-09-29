<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference =
    colorMode.preference === 'dark'
      ? 'light'
      : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button
      type="button"
      class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
      :aria-label="
        colorMode.preference === 'dark'
          ? 'Activer le mode clair'
          : 'Activer le mode sombre'
      "
      @click="toggleTheme"
    >
      <!-- Soleil -->
      <svg
        v-if="colorMode.preference === 'dark'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle
          cx="12"
          cy="12"
          r="4"
        />

        <path
          d="M12 2v2"
        />

        <path
          d="M12 20v2"
        />

        <path
          d="m4.93 4.93 1.41 1.41"
        />

        <path
          d="m17.66 17.66 1.41 1.41"
        />

        <path
          d="M2 12h2"
        />

        <path
          d="M20 12h2"
        />

        <path
          d="m6.34 17.66-1.41 1.41"
        />

        <path
          d="m19.07 4.93-1.41 1.41"
        />
      </svg>

      <!-- Lune -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3
             7 7 0 0 0 21 12.79z"
        />
      </svg>
    </button>

    <template #fallback>
      <div
        class="h-10 w-10 rounded-full border border-border bg-surface"
      />
    </template>
  </ClientOnly>
</template>