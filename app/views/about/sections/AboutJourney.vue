<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

// Chaque étape peut être enrichie ou ajustée sans modifier la mise en page.
const milestones = [
  {
    number: '01',
    category: 'FORMATION',
    title: 'Building a foundation in engineering',
    description: 'My CTI qualification has given me a cross-disciplinary approach: understanding a problem, identifying its constraints and designing a structured solution.',
    detail: 'UPAC',
  },
  {
    number: '02',
    category: 'OPENING',
    title: 'Learning in a different environment',
    description: 'My time at DHI has strengthened my ability to adapt and my skills in data and AI, and has exposed me to different ways of working and learning.',
    detail: 'DHI',
  },
  {
    number: '03',
    category: 'EXPLORATION TECHNIQUE',
    title: 'Connecting Software, Data and AI',
    description: 'Through my projects, I have explored software architecture, data pipelines, machine learning and systems based on large language models (LLMs). The common thread: making technologies work together.',
    detail: 'Architecture · Données · Systèmes intelligents',
  },
  {
    number: '04',
    category: 'FIELD EXPERIENCE',
    title: 'Testing ideas against real-world constraints',
    description: 'My roles in Data Science and BI at SFR have involved working on monitoring, observability and the utilisation of operational data on a large scale.',
    detail: 'Data Science & BI',
  },
]
</script>

<template>
  <section
    id="parcours"
    aria-labelledby="journey-title"
    class="relative isolate overflow-hidden px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
  >
    <div class="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/[0.045] blur-[110px]" aria-hidden="true" />

    <div class="mx-auto max-w-6xl">
      <ScrollReveal>
        <header class="max-w-3xl">
          <h2 id="journey-title" class="text-[clamp(2.5rem,5.5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-foreground">
            A journey.<br />
            <span class="text-muted-foreground">A way of thinking. </span>
          </h2>
          <p class="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            From the fundamentals of engineering to intelligent systems, every experience has shaped the way I approach technical problems..
          </p>
        </header>
      </ScrollReveal>

      <div class="relative mt-16 lg:mt-24">
        <!-- Repère continu : une seule colonne de lecture, sans alternance fatigante. -->
        <div class="absolute bottom-8 left-[19px] top-3 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-border sm:left-[27px]" aria-hidden="true" />

        <ol class="space-y-9 sm:space-y-12">
          <li v-for="milestone in milestones" :key="milestone.number" class="relative pl-14 sm:pl-20">
            <span class="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-background text-xs font-semibold text-primary shadow-sm sm:h-14 sm:w-14" aria-hidden="true">
              {{ milestone.number }}
            </span>

            <ScrollReveal>
              <article class="group rounded-[1.6rem] border border-border/70 bg-background/70 p-6 transition-colors duration-300 hover:border-primary/35 sm:p-9">
                <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                  <div class="max-w-2xl">
                    <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{{ milestone.category }}</p>
                    <h3 class="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">{{ milestone.title }}</h3>
                    <p class="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{{ milestone.description }}</p>
                  </div>
                  <p class="shrink-0 self-start rounded-full border border-border/70 px-3 py-2 text-xs text-muted-foreground lg:mt-1">{{ milestone.detail }}</p>
                </div>
              </article>
            </ScrollReveal>
          </li>
        </ol>
      </div>

      <ScrollReveal>
        <p class="ml-14 mt-12 max-w-2xl border-l-2 border-primary/40 pl-5 text-base leading-8 text-foreground sm:ml-20 sm:text-lg">
          This journey has taught me not to view software, data and AI as three separate disciplines, but as complementary tools serving the same system.
        </p>
      </ScrollReveal>
    </div>
  </section>
</template>
