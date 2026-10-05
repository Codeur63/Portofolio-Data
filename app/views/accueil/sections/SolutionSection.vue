<script setup lang="ts">
const solutions = [
  {
    number: '01',
    eyebrow: 'Automation',
    title: 'Automate processes',
    description:
      'Reduce repetitive tasks and connect tools through workflows, APIs and intelligent agents.',
    technologies: ['AI Agents', 'API', 'Workflows'],
    className: 'lg:col-span-2',
  },
  {
    number: '02',
    eyebrow: 'Analytics',
    title: 'Manage operations',
    description:
      'Transform operational data into clear metrics to track performance and identify significant events.',
    technologies: ['KPI', 'Monitoring', 'Dashboards'],
    className: 'lg:col-span-1',
  },
  {
    number: '03',
    eyebrow: 'Data Engineering',
    title: 'Centralize data',
    description:
      'Consolidate scattered data into a coherent and usable architecture tailored to business needs.',
    technologies: ['Pipelines', 'Databases', 'ETL'],
    className: 'lg:col-span-1',
  },
  {
    number: '04',
    eyebrow: 'Machine Learning',
    title: 'Detect & anticipate',
    description:
      'Use data to identify trends, anomalies and events that require attention.',
    technologies: ['ML', 'Forecasting', 'Vision'],
    image: '/images/solutions/sigmoid.png',
    imageAlt: 'Machine learning prediction visualization',
    className: 'lg:col-span-1',
  },
  {
    number: '05',
    eyebrow: 'Generative AI',
    title: 'Harness knowledge',
    description:
      'Make internal documents and knowledge accessible through semantic search, RAG and AI assistants.',
    technologies: ['RAG', 'LLM', 'Vector Search'],
    image: '/images/solutions/genAI.png',
    imageAlt: 'Generative AI system visualization',
    className: 'lg:col-span-1',
  },
]
</script>

<template>
  <section
    class="relative isolate overflow-hidden px-5 py-24
           sm:px-6 sm:py-28 lg:px-8 xl:py-32"
    aria-labelledby="solutions-title"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute left-1/2 top-[35%] -z-10
             h-[700px] w-[700px] -translate-x-1/2
             rounded-full bg-primary/[0.055] blur-[160px]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- Header -->
      <div
        class="mb-14 grid gap-7
               lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-16"
      >
        <h2
          id="solutions-title"
          class="max-w-3xl text-[clamp(2.8rem,5.7vw,5.1rem)]
                 font-semibold leading-[0.97]
                 tracking-[-0.055em] text-text"
        >
          Business challenges.

          <span
            class="block bg-gradient-to-r from-primary
                   via-violet-500 to-accent
                   bg-clip-text text-transparent"
          >
            Practical solutions.
          </span>
        </h2>

        <p
          class="max-w-lg text-sm leading-7 text-muted
                 sm:text-base sm:leading-8"
        >
          I combine software development, data engineering
          and artificial intelligence to address real-world
          operational challenges.
        </p>
      </div>

      <!-- Solutions -->
      <div
        class="grid grid-cols-1 gap-3
               md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="solution in solutions"
          :key="solution.number"
          class="solution-card group relative min-h-[350px]
                 overflow-hidden rounded-3xl
                 border border-text/10 bg-background/80 p-6
                 sm:p-7"
          :class="solution.className"
        >
          <!-- Optional image -->
          <NuxtImg
            v-if="solution.image"
            :src="solution.image"
            :alt="solution.imageAlt"
            width="640"
            height="390"
            format="webp"
            quality="70"
            loading="lazy"
            decoding="async"
            sizes="sm:100vw md:50vw lg:33vw"
            class="absolute inset-0 h-full w-full
                   object-cover opacity-20"
          />

          <!-- Image readability -->
          <div
            v-if="solution.image"
            class="pointer-events-none absolute inset-0
                   bg-gradient-to-t from-background
                   via-background/80 to-background/20"
            aria-hidden="true"
          />

          <div class="relative z-10">
            <div class="flex items-start justify-between gap-4">
              <p
                class="text-[9px] font-semibold uppercase
                       tracking-[0.17em] text-primary"
              >
                {{ solution.eyebrow }}
              </p>

              <span
                class="font-mono text-[10px] text-muted/50"
                aria-hidden="true"
              >
                {{ solution.number }}
              </span>
            </div>
          </div>

          <div
            class="absolute inset-x-6 bottom-6 z-10
                   sm:inset-x-7 sm:bottom-7"
          >
            <h3
              class="max-w-sm text-xl font-semibold
                     leading-tight tracking-[-0.025em]
                     text-text sm:text-2xl"
            >
              {{ solution.title }}
            </h3>

            <p
              class="mt-3 max-w-lg text-xs leading-5
                     text-muted sm:text-sm sm:leading-6"
            >
              {{ solution.description }}
            </p>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span
                v-for="technology in solution.technologies"
                :key="technology"
                class="rounded-full border border-text/10
                       px-2.5 py-1 text-[9px]
                       font-medium text-muted"
              >
                {{ technology }}
              </span>
            </div>
          </div>

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0
                   h-px origin-left scale-x-0
                   bg-gradient-to-r from-primary
                   via-violet-500 to-transparent
                   transition-transform duration-500
                   group-hover:scale-x-100"
            aria-hidden="true"
          />
        </article>

        <!-- Product Engineering -->
        <article
          class="solution-card group relative min-h-[320px]
                 overflow-hidden rounded-3xl
                 border border-primary/15
                 bg-gradient-to-br from-primary/[0.065]
                 via-background to-violet-500/[0.05]
                 p-6 md:col-span-2 lg:col-span-3 sm:p-7"
        >
          <div class="relative z-10">
            <div class="flex items-start justify-between">
              <p
                class="text-[9px] font-semibold uppercase
                       tracking-[0.17em] text-primary"
              >
                Product Engineering
              </p>

              <span
                class="font-mono text-[10px] text-primary/60"
                aria-hidden="true"
              >
                06
              </span>
            </div>

            <div class="mt-16 max-w-xl lg:mt-14">
              <h3
                class="text-2xl font-semibold
                       tracking-[-0.035em] text-text
                       sm:text-3xl"
              >
                Developing smart products
              </h3>

              <p class="mt-4 text-sm leading-6 text-muted">
                Bringing together software, data and artificial
                intelligence in a single product, from technical
                architecture through to the user experience.
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="item in ['Software', 'Data', 'AI', 'Product']"
                  :key="item"
                  class="rounded-full border border-primary/15
                         px-3 py-1.5 text-xs text-muted"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="mt-8 border-t border-text/10 pt-6">
        <NuxtLink
          to="/journal"
          class="group inline-flex items-center gap-2
                 text-xs font-semibold text-text
                 transition-colors hover:text-primary
                 focus-visible:rounded-sm
                 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-primary"
        >
          See the solutions in action

          <span
            aria-hidden="true"
            class="transition-transform duration-300
                   group-hover:translate-x-1
                   motion-reduce:transform-none"
          >
            →
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-card {
  transition:
    transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 400ms ease,
    box-shadow 400ms ease;
}

.solution-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(
    in srgb,
    var(--color-primary) 22%,
    transparent
  );
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.07);
}

@media (prefers-reduced-motion: reduce) {
  .solution-card {
    transition: none;
  }

  .solution-card:hover {
    transform: none;
  }
}
</style>