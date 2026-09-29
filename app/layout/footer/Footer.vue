<script setup lang="ts">
const navigation = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
]
</script>

<template>
  <footer class="bg-surface">
     <!-- Séparateur -->
     <div class="h-px bg-border" />
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <!-- Partie principale -->
      <div class="grid gap-10 md:grid-cols-12">

        <!-- Identité -->
        <div class="md:col-span-5">
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

          <p class="mt-4 max-w-md text-sm leading-6 text-muted">
            Développeur orienté Web, Data Science et Intelligence Artificielle.
            Je conçois des expériences numériques modernes et des solutions
            techniques orientées vers des problématiques concrètes.
          </p>

          <!-- CTA -->
          <NuxtLink
            to="/contact"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
          >
            Me contacter

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-3">
          <h2 class="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigation
          </h2>

          <nav class="mt-4 flex flex-col gap-3">
            <NuxtLink
              v-for="link in navigation"
              :key="link.to"
              :to="link.to"
              class="w-fit text-sm text-muted transition-colors hover:text-primary"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Réseaux -->
        <div class="md:col-span-4">
          <h2 class="text-sm font-semibold uppercase tracking-wider text-foreground">
            Me retrouver
          </h2>

          <p class="mt-4 max-w-sm text-sm leading-6 text-muted">
            Retrouvez mes projets, mon parcours et mes expérimentations
            techniques sur mes différents profils.
          </p>

          <div class="mt-5 flex flex-wrap gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-primary hover:text-primary"
            >
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="my-10 h-px bg-border" />

      <!-- Bas du footer -->
      <div
        class="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          © {{ new Date().getFullYear() }} Portfolio. Tous droits réservés.
        </p>

        <div class="flex items-center gap-5">

          <NuxtLink
            to="/contact"
            class="transition-colors hover:text-primary"
          >
            Contact
          </NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>