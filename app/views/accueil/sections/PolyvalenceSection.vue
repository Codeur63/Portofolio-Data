<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

const capabilities = [
  {
    number: '01',
    title: 'Data Engineering',
    description:
      'Architectures, pipelines, databases and systems capable of transforming raw data into actionable information.',
  },
  {
    number: '02',
    title: 'Artificial Intelligence',
    description:
      'Machine learning, RAG and intelligent systems designed to address real-world problems.',
  },
  {
    number: '03',
    title: 'Product Engineering',
    description:
      'Applications and interfaces that make data and AI truly accessible to users.',
  },
]

const colorMode = useColorMode()

const imageSolution = computed(() =>
  colorMode.value === 'dark'
    ? '/images/avatar/avatar-1-dark.png'
    : '/images/avatar/avatar-1-light.png'
)

</script>

<template>
  <section
    class="relative isolate mx-auto flex min-h-[90vh] w-full max-w-7xl
           items-center overflow-hidden px-5 py-24
           sm:px-6 sm:py-28 lg:px-8 xl:min-h-screen xl:py-32"
    aria-labelledby="expertise-title"
  >
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute right-[-15%] top-1/2 -z-10
             h-[600px] w-[600px] -translate-y-1/2 rounded-full
             bg-primary/[0.06] blur-[150px]
             dark:bg-primary/[0.10]"
      aria-hidden="true"
    />

    <div
      class="grid w-full grid-cols-1 items-center gap-16
             xl:grid-cols-[1.08fr_.92fr] xl:gap-20"
    >
      <!-- Content -->
      <div class="max-w-2xl">
        <ScrollReveal>
          <h2
            id="expertise-title"
            class="max-w-2xl text-[clamp(2.8rem,6vw,5rem)]
                   font-semibold leading-[0.98] tracking-[-0.055em]
                   text-text"
          >
            Expertise.

            <span class="mt-1 block text-muted/50">
              Multiple dimensions.
            </span>
          </h2>

          <p
            class="mt-8 max-w-xl text-base leading-7 text-muted
                   sm:text-lg sm:leading-8"
          >
            We build end-to-end solutions, from data architecture
            to artificial intelligence models, right through to
            the interfaces that make them truly usable.
          </p>
        </ScrollReveal>

        <!-- Capabilities -->
        <ScrollReveal>
          <div class="mt-12 border-t border-text/10">
            <article
              v-for="capability in capabilities"
              :key="capability.number"
              class="capability group grid grid-cols-[38px_1fr]
                     gap-4 border-b border-text/10 py-6
                     sm:grid-cols-[48px_180px_1fr] sm:gap-5"
            >
              <span
                class="pt-0.5 font-mono text-[11px] text-muted/50
                       transition-colors duration-300
                       group-hover:text-primary"
                aria-hidden="true"
              >
                {{ capability.number }}
              </span>

              <h3
                class="text-sm font-semibold tracking-tight text-text
                       sm:text-base"
              >
                {{ capability.title }}
              </h3>

              <p
                class="col-start-2 text-sm leading-6 text-muted
                       sm:col-start-3"
              >
                {{ capability.description }}
              </p>
            </article>
          </div>
        </ScrollReveal>
      </div>

      <!-- Visual -->
      <ScrollReveal>
        <div
          class="relative mx-auto hidden h-[680px] w-full max-w-[500px]
                 items-end justify-center xl:flex"
        >
          <span
            class="pointer-events-none absolute left-1/2 top-[20%] -z-10
                   -translate-x-1/2 -translate-y-1/2 select-none
                   whitespace-nowrap text-[8rem] font-bold
                   tracking-[-0.08em] text-text/[0.025]"
            aria-hidden="true"
          >
            BUILD
          </span>

          <div
            class="pointer-events-none absolute left-1/2 top-[45%] -z-10
                   h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-primary/[0.12] blur-[110px]
                   dark:bg-primary/[0.16]"
            aria-hidden="true"
          />

          <div
            class="pointer-events-none absolute bottom-[10%] right-[2%] -z-10
                   h-[230px] w-[230px] rounded-full
                   bg-violet-500/[0.10] blur-[80px]"
            aria-hidden="true"
          />

          <div
            class="absolute right-3 top-[14%] flex items-center gap-3"
            aria-hidden="true"
          >
            <span
              class="text-[9px] font-medium uppercase tracking-[0.28em]
                     text-muted/40 [writing-mode:vertical-rl]"
            >
              Adapt · Build · Evolve
            </span>

            <span
              class="h-32 w-px bg-gradient-to-b
                     from-primary/50 to-transparent"
            />
          </div>

          <div
            class="samurai relative flex h-full w-full
                   items-end justify-center"
          >
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                :srcset="imageSolution"
              />

              <img
                :src="imageSolution"
                alt=""
                width="500"
                height="680"
                loading="lazy"
                decoding="async"
                class="relative z-10 max-h-[650px] w-auto
                       object-contain object-bottom
                       drop-shadow-[0_35px_45px_rgba(0,0,0,0.16)]
                       transition-transform duration-700 ease-out
                       dark:drop-shadow-[0_35px_50px_rgba(0,0,0,0.45)]"
              />
            </picture>
          </div>

          <div
            class="pointer-events-none absolute bottom-2 left-1/2
                   h-5 w-[68%] -translate-x-1/2 rounded-[100%]
                   bg-black/10 blur-xl dark:bg-black/40"
            aria-hidden="true"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.capability {
  position: relative;
}

.capability::before {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  content: '';
  background: var(--color-primary);
  transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.capability:hover::before {
  width: 100%;
}

.samurai img {
  transform: perspective(1000px) rotateY(-2deg);
}

.samurai:hover img {
  transform:
    perspective(1000px)
    rotateY(1deg)
    translateY(-8px)
    scale(1.015);
}

@media (prefers-reduced-motion: reduce) {
  .samurai img,
  .capability::before {
    transition: none;
  }

  .samurai img,
  .samurai:hover img {
    transform: none;
  }
}
</style>