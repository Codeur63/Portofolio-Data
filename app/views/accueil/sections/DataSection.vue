<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ScrollReveal from '@/components/ScrollReveal.vue'

const capabilities = [
  {
    title: 'Data Pipelines',
    description: 'Ingestion & transformation',
  },
  {
    title: 'Data Architecture',
    description: 'Storage & modeling',
  },
  {
    title: 'Performance',
    description: 'Caching & optimization',
  },
  {
    title: 'Observability',
    description: 'Monitoring & analytics',
  },
]

const visuals = [
  {
    src: '/images/skills/skill-data.png',
    alt: 'Data analytics dashboard from a Xiani project',
    label: 'Data Analytics',
    type: 'Dashboard',
  },
  {
    src: '/images/skills/skill-data-mlflow.png',
    alt: 'MLflow experiment tracking interface',
    label: 'Experiment Tracking',
    type: 'MLflow',
  },
  {
    src: '/images/skills/skill-data-grafana.png',
    alt: 'Grafana monitoring dashboard',
    label: 'Observability',
    type: 'Grafana',
  },
]

const activeIndex = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

const goToSlide = (index: number) => {
  activeIndex.value = index
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  interval = setInterval(() => {
    activeIndex.value =
      (activeIndex.value + 1) % visuals.length
  }, 4500)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section
    class="relative isolate overflow-hidden px-5 py-24
           sm:px-6 sm:py-28 lg:px-8 xl:py-32"
    aria-labelledby="data-engineering-title"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute right-[-10%] top-1/2 -z-10
             h-[650px] w-[650px] -translate-y-1/2
             rounded-full bg-primary/[0.07] blur-[150px]"
      aria-hidden="true"
    />

    <div
      class="relative z-10 mx-auto grid w-full max-w-7xl
             grid-cols-1 items-center gap-16
             xl:grid-cols-[.82fr_1.18fr]"
    >
      <!-- Content -->
      <div class="max-w-xl">
        <ScrollReveal>
          <h2
            id="data-engineering-title"
            class="text-[clamp(2.8rem,5.5vw,5rem)]
                   font-semibold leading-[0.97]
                   tracking-[-0.055em] text-text"
          >
            From raw

            <span
              class="block bg-gradient-to-r from-primary
                     via-violet-500 to-accent
                     bg-clip-text text-transparent"
            >
              data to value.
            </span>
          </h2>

          <p
            class="mt-7 max-w-lg text-base leading-7 text-muted
                   sm:text-lg sm:leading-8"
          >
            I design data architectures and pipelines capable
            of collecting, structuring and making complex data
            usable, with a particular focus on performance,
            observability and reliability.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            class="mt-10 grid overflow-hidden rounded-2xl
                   border border-text/10 sm:grid-cols-2"
          >
            <article
              v-for="capability in capabilities"
              :key="capability.title"
              class="p-5"
            >
              <h3 class="text-sm font-semibold text-text">
                {{ capability.title }}
              </h3>

              <p class="mt-1 text-xs leading-5 text-muted">
                {{ capability.description }}
              </p>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p
            class="mt-7 max-w-md border-l border-primary/40
                   pl-4 text-xs leading-5 text-muted"
          >
            A good data architecture does more than simply
            store information: it must make it
            <strong class="font-medium text-text">
              reliable, accessible and actionable.
            </strong>
          </p>
        </ScrollReveal>
      </div>

      <!-- Project visual -->
      <ScrollReveal>
        <div class="mx-auto w-full max-w-3xl">
          <div
            class="overflow-hidden rounded-[1.5rem]
                   border border-text/10 bg-background
                   shadow-[0_30px_100px_rgba(15,23,42,0.13)]"
          >
            <!-- Browser header -->
            <div
              class="flex h-12 items-center justify-between
                     border-b border-text/10 px-4"
            >
              <div class="flex gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span class="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>

              <span class="text-xs text-muted">
                Data Platform · {{ visuals[activeIndex]?.type }}
              </span>

              <span class="font-mono text-[9px] text-muted">
                SOLARMBOA
              </span>
            </div>

            <!-- Current image only -->
            <div class="relative aspect-[16/10] overflow-hidden">
              <NuxtImg
                :src="visuals[activeIndex]!.src"
                :alt="visuals[activeIndex]!.alt"
                width="1200"
                height="750"
                sizes="(max-width: 1280px) 100vw, 768px"
                format="webp"
                quality="72"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover object-top"
              />

              <div
                class="pointer-events-none absolute inset-x-0
                       bottom-0 h-24
                       bg-gradient-to-t from-black/40 to-transparent"
                aria-hidden="true"
              />

              <p
                class="absolute bottom-5 left-5
                       text-sm font-semibold text-white"
              >
                {{ visuals[activeIndex]?.label }}
              </p>
            </div>

            <!-- Controls -->
            <div
              class="flex min-h-14 items-center justify-between
                     border-t border-text/10 px-4"
            >
              <div
                class="flex items-center gap-2"
                aria-label="Project screenshots"
              >
                <button
                  v-for="(visual, index) in visuals"
                  :key="visual.src"
                  type="button"
                  class="flex h-8 w-8 items-center justify-center
                         rounded-full
                         focus-visible:outline-2
                         focus-visible:outline-primary"
                  :aria-label="`Show ${visual.label}`"
                  :aria-current="activeIndex === index ? 'true' : undefined"
                  @click="goToSlide(index)"
                >
                  <span
                    class="h-1.5 rounded-full transition-all"
                    :class="
                      activeIndex === index
                        ? 'w-6 bg-primary'
                        : 'w-1.5 bg-muted/40'
                    "
                  />
                </button>
              </div>

              <p class="text-[10px] text-muted">
                Dashboard · Tracking · Monitoring
              </p>
            </div>
          </div>

          <p class="mt-4 text-xs text-muted">
            Data ecosystem · Pipelines · Databases · Monitoring
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>