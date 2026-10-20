<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'
const colorMode = useColorMode()

const heroImage = computed(() =>
  colorMode.value === 'dark'
    ? '/images/avatar/avatar-2-dark.webp'
    : '/images/avatar/avatar-2-light.webp'
)

const principles = [
  {
    number: '01',
    title: 'Understand Before You Build',
    text: 'Start with the requirement, understand the constraints, and choose the technical solution accordingly.',
  },
  {
    number: '02',
    title: 'Design for Durability',
    text: 'Prioritize architectures that are readable, maintainable, and capable of evolving with the product.',
  },
  {
    number: '03',
    title: 'Measure Rather Than Assume',
    text: 'Observe, test, and compare results before drawing technical conclusions.',
  },
]
</script>

<template>
  <section
    class="relative isolate overflow-hidden px-5 py-24
           sm:px-6 sm:py-28 lg:px-8 xl:py-32"
    aria-labelledby="about-title"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0 -z-20 opacity-[0.08]
             [background-image:radial-gradient(var(--color-text)_1px,transparent_1px)]
             [background-size:28px_28px]"
      aria-hidden="true"
    />

    <div
      class="pointer-events-none absolute right-[-8%] top-1/2 -z-10
             h-[620px] w-[620px] -translate-y-1/2
             rounded-full bg-primary/[0.08] blur-[150px]"
      aria-hidden="true"
    />

    <div
      class="relative z-10 mx-auto grid w-full max-w-7xl
             grid-cols-1 items-center gap-16
             xl:grid-cols-[1.05fr_.95fr] xl:gap-20"
    >
      <!-- Content -->
      <div class="max-w-2xl">
        <ScrollReveal>

          <h2
            id="about-title"
            class="mt-7 max-w-3xl
                   text-[clamp(2.8rem,5.5vw,5rem)]
                   font-semibold leading-[0.97]
                   tracking-[-0.055em] text-text"
          >
            Behind the systems

            <span
              class="block bg-gradient-to-r from-primary
                     via-violet-500 to-accent
                     bg-clip-text text-transparent"
            >
              lies a way of thinking.
            </span>
          </h2>

          <div
            class="mt-8 max-w-xl space-y-5
                   text-base leading-7 text-muted
                   sm:text-lg sm:leading-8"
          >
            <p>
              Xiani brings together 
              <strong class="font-medium text-text">
                data engineering and artificial intelligence, 
              </strong>
              to build tools around real workflows and practical constraints.
            </p>

            <p>
              Each engagement starts with a defined scope and a shared understanding of what the system should do. Technical choices follow those requirements.

            </p>
          </div>
        </ScrollReveal>

        <!-- Principles -->
        <ScrollReveal>
          <div class="mt-12 border-t border-text/10">
            <article
              v-for="principle in principles"
              :key="principle.number"
              class="principle group grid grid-cols-[40px_1fr]
                     gap-x-4 gap-y-2 border-b border-text/10 py-5
                     sm:grid-cols-[45px_190px_1fr] sm:gap-5"
            >
              <span
                class="pt-0.5 font-mono text-[10px] text-muted/50
                       transition-colors group-hover:text-primary"
                aria-hidden="true"
              >
                {{ principle.number }}
              </span>

              <h3 class="text-sm font-semibold leading-6 text-text">
                {{ principle.title }}
              </h3>

              <p
                class="col-start-2 text-xs leading-5 text-muted
                       sm:col-start-3"
              >
                {{ principle.text }}
              </p>
            </article>
          </div>
        </ScrollReveal>

        <!-- CTA -->
        <ScrollReveal>
          <NuxtLink
            to="/about"
            class="group mt-8 inline-flex items-center gap-2
                   text-sm font-semibold text-text
                   transition-colors hover:text-primary
                   focus-visible:rounded-sm
                   focus-visible:outline-2
                   focus-visible:outline-offset-4
                   focus-visible:outline-primary"
          >
            More about <span class="uppercase font-bold text-text" > XIANI </span>

            <span
              aria-hidden="true"
              class="transition-transform duration-300
                     group-hover:translate-x-1
                     motion-reduce:transform-none"
            >
              →
            </span>
          </NuxtLink>
        </ScrollReveal>
      </div>

      <!-- Visual -->
      <ScrollReveal class="hidden lg:block">
        <div
          class="relative mx-auto hidden h-[680px] 
                 w-full max-w-[520px]
                 items-end justify-center md:flex"
        >
          <span
            class="pointer-events-none absolute left-1/2 top-[10%]
                   -z-10 -translate-x-1/2 -translate-y-1/2
                   select-none whitespace-nowrap text-[8rem]
                   font-bold tracking-[-0.08em]
                   text-text/[0.225] xl:text-[9rem]"
            aria-hidden="true"
          >
            MINDSET
          </span>

          <div
            class="pointer-events-none absolute left-1/2 top-[48%]
                   -z-10 h-[440px] w-[440px]
                   -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-primary/[0.10] blur-[110px]"
            aria-hidden="true"
          />

          <div class="samurai relative flex h-full w-full items-end justify-center">
            <img
              :src="heroImage"
              alt=""
              width="520"
              height="800"
              loading="lazy"
              decoding="async"
              class="relative z-10 max-h-[650px] w-auto
                     object-contain object-bottom
                     drop-shadow-[0_35px_45px_rgba(0,0,0,0.15)]
                     dark:drop-shadow-[0_35px_50px_rgba(0,0,0,0.45)]
                     transition-transform duration-700"
            />
          </div>

          <div
            class="pointer-events-none absolute bottom-2 left-1/2
                   h-5 w-[70%] -translate-x-1/2
                   rounded-[100%] bg-black/10 blur-xl
                   dark:bg-black/40"
            aria-hidden="true"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.principle {
  position: relative;
}

.principle::after {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  content: '';
  background: var(--color-primary);
  transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.principle:hover::after {
  width: 100%;
}
</style>