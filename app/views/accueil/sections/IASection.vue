<script setup lang="ts">
const aiProjects = [
  {
    title: 'Computer Vision',
    subtitle: 'YOLOv8 · Object Detection',
    meta: 'BDD100K',
    image: '/images/skills/skill-yolo.png',
    mobileImage: '/images/skills/skill-yolo-2.png',
    alt: 'YOLOv8 object detection results on the BDD100K dataset',
    number: '01',
  },
  {
    title: 'Machine Learning',
    subtitle: 'Training · Experimentation',
    meta: 'Model development',
    image: '/images/skills/skill-fine-tuning.png',
    alt: 'Machine learning model experimentation interface',
    number: '02',
  },
  {
    title: 'RAG System',
    subtitle: 'Retrieval · Context · Generation',
    meta: '9.7K documents',
    image: '/images/skills/skill-rag-2.png',
    mobileImage: '/images/skills/skill-rag.png',
    alt: 'Architecture and interface of a retrieval-augmented generation system',
    number: '03',
  },
  {
    title: 'AI Agent',
    subtitle: 'LLM · Tools · Memory · RAG',
    meta: 'Agentic workflow',
    image: '/images/skills/skill-agent.png',
    alt: 'Architecture of an AI agent using tools, memory and RAG',
    number: '04',
  },
]
</script>

<template>
  <section
    class="relative isolate overflow-hidden px-4 py-24
           sm:px-6 sm:py-28 lg:px-8 xl:py-32"
    aria-labelledby="ai-title"
  >
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute inset-0 -z-20 opacity-[0.025]
             [background-image:linear-gradient(var(--color-text)_1px,transparent_1px),linear-gradient(90deg,var(--color-text)_1px,transparent_1px)]
             [background-size:56px_56px]
             dark:opacity-[0.04]"
      aria-hidden="true"
    />

    <div
      class="pointer-events-none absolute right-[-10%] top-0 -z-10
             h-[500px] w-[500px] rounded-full
             bg-primary/[0.08] blur-[140px]"
      aria-hidden="true"
    />

    <div
      class="pointer-events-none absolute -left-40 bottom-20 -z-10
             h-[400px] w-[400px] rounded-full
             bg-primary/[0.05] blur-[130px]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- Header -->
      <div class="max-w-3xl">
        <h2
          id="ai-title"
          class="max-w-3xl text-[clamp(2.8rem,6vw,5.2rem)]
                 font-semibold leading-[0.97]
                 tracking-[-0.055em] text-text"
        >
          I build systems

          <span
            class="block bg-gradient-to-r from-secondary
                   via-primary to-accent
                   bg-clip-text text-transparent"
          >
            that understand and take action.
          </span>
        </h2>

        <p
          class="mt-7 max-w-2xl text-base leading-7 text-muted
                 sm:text-lg sm:leading-8"
        >
          Computer Vision, Machine Learning, RAG and AI agents:
          I design systems capable of extracting information,
          using context and interacting with tools to address
          real-world problems.
        </p>
      </div>

      <!-- Projects -->
      <div
        class="mt-14 grid grid-cols-1 gap-3
               sm:grid-cols-2
               lg:flex lg:h-[570px] lg:overflow-hidden
               lg:rounded-[1.75rem]"
      >
        <article
          v-for="project in aiProjects"
          :key="project.number"
          class="ai-panel group relative min-h-[320px]
                 overflow-hidden rounded-2xl
                 border border-text/10 bg-background
                 sm:min-h-[380px]
                 lg:min-h-0 lg:flex-1 lg:rounded-none lg:border-0"
        >
          <picture>
            <source
              v-if="project.mobileImage"
              media="(max-width: 1279px)"
              :srcset="project.mobileImage"
            />

            <img
              :src="project.image"
              :alt="project.alt"
              width="900"
              height="1200"
              loading="lazy"
              decoding="async"
              class="absolute inset-0 h-full w-full object-cover
                     transition-transform duration-700
                     ease-[cubic-bezier(0.22,1,0.36,1)]
                     group-hover:scale-[1.025]"
            />
          </picture>

          <div
            class="pointer-events-none absolute inset-0
                   bg-gradient-to-t from-black/90
                   via-black/15 to-black/5"
            aria-hidden="true"
          />

          <span
            class="absolute left-5 top-5 z-10
                   font-mono text-[10px] text-white/60"
            aria-hidden="true"
          >
            AI / {{ project.number }}
          </span>

          <div class="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
            <div
              class="mb-3 h-px w-8 bg-white/40
                     transition-all duration-500
                     group-hover:w-14 group-hover:bg-secondary"
              aria-hidden="true"
            />

            <p
              class="text-[9px] font-medium uppercase
                     tracking-[0.18em] text-white/60"
            >
              {{ project.meta }}
            </p>

            <h3
              class="mt-2 text-xl font-semibold
                     tracking-[-0.025em] text-white
                     lg:text-lg xl:text-xl"
            >
              {{ project.title }}
            </h3>

            <p class="mt-1 text-xs leading-5 text-white/70">
              {{ project.subtitle }}
            </p>

            <div
              class="grid grid-rows-[0fr] opacity-0
                     transition-all duration-500
                     group-hover:grid-rows-[1fr]
                     group-hover:opacity-100"
            >
              <div class="overflow-hidden">
                <p class="max-w-xs pt-4 text-xs leading-5 text-white/75">
                  View the project, its architecture and the
                  associated technical choices.
                </p>
              </div>
            </div>
          </div>

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0
                   z-30 h-[2px] origin-left scale-x-0
                   bg-secondary transition-transform duration-500
                   group-hover:scale-x-100"
            aria-hidden="true"
          />
        </article>
      </div>

      <!-- Link -->
      <div class="mt-5">
        <NuxtLink
          to="/projects"
          class="group inline-flex items-center gap-2
                 text-xs font-semibold text-text
                 transition-colors hover:text-primary
                 focus-visible:rounded-sm
                 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-primary"
        >
          Explore AI projects

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
@media (min-width: 1024px) {
  .ai-panel {
    transition:
      flex-grow 650ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 500ms ease;
  }

  .ai-panel:hover {
    flex-grow: 3.2;
  }

  .ai-panel:not(:hover) {
    filter: saturate(0.85);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ai-panel,
  .ai-panel * {
    transition: none !important;
    transform: none !important;
  }
}
</style>