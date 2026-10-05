<script setup lang="ts">
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const route = useRoute()

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
] as const

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (to: string) => {
  if (to === '/') {
    return route.path === '/'
  }

  return route.path === to || route.path.startsWith(`${to}/`)
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)
</script>

<template>
  <header
    class="
      sticky top-3 z-50
      mx-3 mt-3
      sm:top-4 sm:mx-5 sm:mt-4
      lg:mx-auto lg:max-w-3xl
    "
  >
    <nav
      class="
        relative
        flex min-h-16 items-center justify-between
        rounded-2xl
        border border-black/[0.06]
        bg-white/80
        px-3.5
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        backdrop-blur-lg

        transition-[background-color,border-color,box-shadow]
        duration-300
        motion-reduce:transition-none

        dark:border-white/[0.08]
        dark:bg-background/85
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.22)]

        sm:px-4
      "
      aria-label="Main navigation"
    >
      <!-- Brand -->
      <NuxtLink
        to="/"
        class="
          group
          flex shrink-0 items-center gap-2.5
          rounded-xl
          p-1

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2
          dark:focus-visible:ring-offset-background
        "
        aria-label="Xiani — Home"
        @click="closeMenu"
      >
        <span
          class="
            flex h-9 w-9
            items-center justify-center
            overflow-hidden
            rounded-xl
          "
          aria-hidden="true"
        >
          <NuxtImg
            src="/images/logo.png"
            alt=""
            width="36"
            height="36"
            format="webp"
            quality="85"
            loading="eager"
            decoding="async"
            class="
              h-9 w-9 object-contain
              transition-transform duration-300
              group-hover:scale-[1.04]
              motion-reduce:transition-none
            "
          />
        </span>

        <span
          class="
            text-base font-bold
            tracking-[-0.025em]
            text-text
            transition-colors duration-200
            group-hover:text-primary
            motion-reduce:transition-none
          "
        >
          Xiani
        </span>
      </NuxtLink>

      <!-- Desktop navigation -->
      <div
        class="
          absolute left-1/2
          hidden -translate-x-1/2
          items-center gap-1
          md:flex
        "
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="
            relative
            flex min-h-10 items-center
            rounded-xl
            px-3.5
            text-sm font-medium

            transition-colors duration-200
            motion-reduce:transition-none

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
          "
          :class="
            isActive(item.to)
              ? ' text-text '
              : 'text-text/65 hover:bg-black/[0.035] hover:text-text  dark:hover:bg-white/[0.055]'
          "
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ item.label }}

          <span
            v-if="isActive(item.to)"
            class="
              absolute
              bottom-1 left-1/2
              h-0.5 w-4
              -translate-x-1/2
              rounded-2xl
              bg-primary
            "
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <!-- Actions -->
      <div class="flex shrink-0 items-center gap-1.5">
        <ThemeToggle />

        <!-- Mobile menu button -->
        <button
          type="button"
          class="
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-text

            transition-colors duration-200
            hover:bg-black/[0.045]
            motion-reduce:transition-none

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            md:hidden
          "
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile navigation -->
    <Transition
      enter-active-class="
        transition duration-200 ease-out
        motion-reduce:transition-none
      "
      enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="
        transition duration-150 ease-in
        motion-reduce:transition-none
      "
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-1 opacity-0"
    >
      <nav
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="
          mt-2
          rounded-2xl
          border border-black/[0.06]
          bg-white/95
          p-2
          shadow-[0_10px_30px_rgba(15,23,42,0.08)]
          backdrop-blur-lg

          dark:border-white/[0.08]
          dark:bg-background/95
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.24)]

          md:hidden
        "
        aria-label="Mobile navigation"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="
            relative
            flex min-h-12
            items-center
            rounded-xl
            px-4
            text-sm font-medium

            transition-colors duration-200
            motion-reduce:transition-none

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
          "
          :class="
            isActive(item.to)
              ? 'bg-black/[0.05] text-text dark:bg-white/[0.08] '
              : 'text-text/65 hover:bg-black/[0.035] hover:text-text  dark:hover:bg-white/[0.055] dark:hover:text-white'
          "
          :aria-current="isActive(item.to) ? 'page' : undefined"
          @click="closeMenu"
        >
          <span
            v-if="isActive(item.to)"
            class="
              mr-3 h-1.5 w-1.5
              shrink-0 rounded-full
              bg-primary
            "
            aria-hidden="true"
          />

          {{ item.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>