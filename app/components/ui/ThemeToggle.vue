<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const themeLabel = computed(() =>
  isDark.value
    ? 'Switch to light mode'
    : 'Switch to dark mode',
)
</script>

<template>
  <ClientOnly>
    <button
      type="button"
      class="
        flex h-10 w-10
        shrink-0
        items-center justify-center
        rounded-xl
        border border-border/20 dark:border-text/20
        text-text
        transition-[background-color,color,transform]
        duration-200
        ease-out

        hover:bg-black/[0.045]
        hover:text-primary

        active:scale-95

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white
        cursor-pointer
        motion-reduce:transition-none

        dark:hover:bg-white/[0.07]
        dark:focus-visible:ring-offset-background
      "
      :aria-label="themeLabel"
      @click="toggleTheme"
    >
      <Transition
        mode="out-in"
        enter-active-class="
          transition-[transform,opacity]
          duration-200
          ease-out
          motion-reduce:transition-none
        "
        enter-from-class="scale-75 rotate-45 opacity-0"
        enter-to-class="scale-100 rotate-0 opacity-100"
        leave-active-class="
          transition-[transform,opacity]
          duration-150
          ease-in
          motion-reduce:transition-none
        "
        leave-from-class="scale-100 rotate-0 opacity-100"
        leave-to-class="scale-75 -rotate-45 opacity-0"
      >
        <!-- Sun -->
        <svg
          v-if="isDark"
          key="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="3.5"
          />

          <path d="M12 2.5v2" />
          <path d="M12 19.5v2" />
          <path d="m5.28 5.28 1.42 1.42" />
          <path d="m17.3 17.3 1.42 1.42" />
          <path d="M2.5 12h2" />
          <path d="M19.5 12h2" />
          <path d="m6.7 17.3-1.42 1.42" />
          <path d="m18.72 5.28-1.42 1.42" />
        </svg>

        <!-- Moon -->
        <svg
          v-else
          key="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="
              M20.5 14.2
              A8.5 8.5 0 0 1
              9.8 3.5
              A8.5 8.5 0 1 0
              20.5 14.2Z
            "
          />
        </svg>
      </Transition>
    </button>

    <template #fallback>
      <span
        class="
          block h-10 w-10
          shrink-0
          rounded-2xl
        "
        aria-hidden="true"
      />
    </template>
  </ClientOnly>
</template>