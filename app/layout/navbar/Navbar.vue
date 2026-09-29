<script setup lang="ts">
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
   <header
    class="sticky my-10 top-4 z-50 bg-surface/90 border border-border rounded-3xl backdrop-blur-xl bg-white/30 ml-3 mr-3 md:max-w-3xl md:mx-auto dark:bg-[#100A18]/30 dark:backdrop-blur-xl dark:to-transparent"
  > 
    <nav
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      aria-label="Navigation principale"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="group inline-flex items-center gap-2"
      >
        <span
          class="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary"
        >
          Portfolio
        </span>

        <span
          class="h-2 w-2 rounded-full bg-accent"
          aria-hidden="true"
        />
      </NuxtLink>

      <!-- Navigation desktop -->
      <div class="hidden items-center gap-7 md:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="relative py-2 text-sm font-medium text-muted transition-colors dark:text-white after:absolute before:absolute before:bg-primary before:duration-1000 before:ease-out before:transition-transform before:scale-x-0 before:top-0 before:right-0 before:h-[2px] before:w-full break-before-all hover:before:scale-x-90
         after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-800 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100"
          active-class="text-primary after:scale-x-100"
        >
          {{ item.label }}
        </NuxtLink>

      </div>
        <!-- Theme -->
         <ThemeToggle/> 

      <!-- Bouton mobile -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          :aria-expanded="isMenuOpen"
          aria-label="Ouvrir le menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-5 w-5"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6l-12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <div
      v-if="isMenuOpen"
      class="border-t border-border bg-surface md:hidden"
    >
      <div class="mx-auto max-w-7xl px-6 py-4">
        <div class="flex flex-col gap-1">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface-secondary hover:text-primary"
            active-class="bg-primary/10 text-primary"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>