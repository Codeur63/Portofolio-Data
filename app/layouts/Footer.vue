<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
] as const

const socialLinks = [
  {
    label: 'GitHub',
    href: 'TON_URL_GITHUB',
  },
  {
    label: 'LinkedIn',
    href: 'TON_URL_LINKEDIN',
  },
] as const
</script>

<template>
  <footer
    class="
      relative isolate
      overflow-hidden
      border-t border-black/[0.06]
      bg-background

      dark:border-white/[0.08]
    "
  >
    <div
      class="
        mx-auto max-w-7xl
        px-5
        pt-20

        sm:px-6 sm:pt-24
        lg:px-8
      "
    >
      <!-- Main footer -->
      <div
        class="
          grid gap-12
          md:grid-cols-12 md:gap-8
        "
      >
        <!-- Identity -->
        <div
          class="
            md:col-span-6
            lg:col-span-7
          "
        >
          <NuxtLink
            to="/"
            class="
              group
              inline-flex items-center gap-2.5
              rounded-lg

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-background
            "
            aria-label="Xiani — Home"
          >
            <NuxtImg
              src="/images/logo.png"
              alt=""
              aria-hidden="true"
              width="32"
              height="32"
              format="webp"
              quality="80"
              loading="lazy"
              decoding="async"
              class="
                h-8 w-8 object-contain
                transition-transform duration-300
                group-hover:scale-[1.04]
                motion-reduce:transition-none
              "
            />

            <span
              class="
                text-[15px] font-bold
                tracking-[-0.02em]
                text-text

                transition-colors duration-200
                group-hover:text-primary
                motion-reduce:transition-none
              "
            >
              Xiani
            </span>
          </NuxtLink>

          <p
            class="
              mt-5 max-w-md
              text-sm leading-6
              text-muted
            "
          >
            I design systems at the intersection of
            software engineering, data and
            artificial intelligence.
          </p>

          <!-- Expertise -->
          <div
            class="
              mt-7
              flex flex-wrap
              gap-x-4 gap-y-2

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-muted/70
            "
          >
            <span>Software Engineering</span>

            <span
              class="hidden text-primary/60 sm:inline"
              aria-hidden="true"
            >
              /
            </span>

            <span>Data Engineering</span>

            <span
              class="hidden text-primary/60 sm:inline"
              aria-hidden="true"
            >
              /
            </span>

            <span>Artificial Intelligence</span>
          </div>
        </div>

        <!-- Navigation -->
        <div
          class="
            md:col-span-3
            lg:col-span-2
          "
        >
          <h2
            class="
              text-[10px]
              font-semibold uppercase
              tracking-[0.18em]
              text-muted/70
            "
          >
            Navigation
          </h2>

          <nav
            class="
              mt-5
              flex flex-col
              items-start gap-3
            "
            aria-label="Footer navigation"
          >
            <NuxtLink
              v-for="link in navigation"
              :key="link.to"
              :to="link.to"
              class="
                group
                inline-flex min-h-8
                items-center gap-2

                text-sm font-medium
                text-muted

                transition-colors duration-200
                hover:text-text
                motion-reduce:transition-none

                focus-visible:rounded
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              "
            >
              <span
                class="
                  h-px w-0
                  bg-primary

                  transition-[width] duration-200
                  group-hover:w-3
                  group-focus-visible:w-3

                  motion-reduce:transition-none
                "
                aria-hidden="true"
              />

              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Social -->
        <div
          class="
            md:col-span-3
            lg:col-span-3
          "
        >
          <h2
            class="
              text-[10px]
              font-semibold uppercase
              tracking-[0.18em]
              text-muted/70
            "
          >
            Connect
          </h2>

          <div
            class="
              mt-5
              flex flex-col
              items-start gap-3
            "
          >
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="
                group
                inline-flex min-h-8
                items-center gap-2

                text-sm font-medium
                text-muted

                transition-colors duration-200
                hover:text-text
                motion-reduce:transition-none

                focus-visible:rounded
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              "
              :aria-label="`${social.label} — opens in a new tab`"
            >
              {{ social.label }}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="
                  h-3.5 w-3.5
                  text-muted/70

                  transition-transform duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5

                  motion-reduce:transition-none
                "
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Large signature -->
      <div
        class="
          relative
          mt-16 overflow-hidden
          border-t border-border/20 dark:border-text/20
          pt-10

          sm:mt-20 sm:pt-12
        "
      >
        <p
          class="
            select-none
            whitespace-nowrap
            text-center

            text-[clamp(3.1rem,10.4vw,9.2rem)]
            font-semibold
            leading-[0.8]
            tracking-[-0.075em]

            text-muted

          "
          aria-hidden="true"
        >
          <span class="tracking-widest">
            XIANI
          </span>
        </p>
      </div>

      <!-- Bottom -->
      <div
        class="
          mt-10
          flex flex-col gap-3          
          py-6

          text-xs
          text-muted/70


          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p>
          © {{ currentYear }} Xiani. All rights reserved.
        </p>

        <p>
          Software · Data · AI
        </p>
      </div>
    </div>
  </footer>
</template>