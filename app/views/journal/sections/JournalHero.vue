<!-- <script setup lang="ts">

</script>

<template>
  <section aria-labelledby="journal-heading" class="relative isolate mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
    <div class="pointer-events-none absolute -right-12 top-16 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
    <div class="grid items-end gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:gap-20">
      <div>
        <p class="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span class="h-px w-9 bg-primary" aria-hidden="true" /> Journal / Études de cas
        </p>
        <h1 id="journal-heading" class="max-w-4xl text-[clamp(3.1rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-foreground">
          Des idées aux systèmes.<span class="mt-2 block text-primary">Des systèmes aux résultats.</span>
        </h1>
      </div>
      <div class="border-l border-primary/40 pl-6 lg:mb-2">
        <p class="max-w-sm text-base leading-8 text-muted-foreground">
          Études de cas, expérimentations et retours d'expérience en ingénierie logicielle, Data et intelligence artificielle.
        </p>
        <a href="#realisations" class="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          Explorer les réalisations <span class="transition-transform motion-safe:group-hover:translate-y-1" aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
    <div class="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/70 pt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:mt-24">
      <span>Software Engineering</span><span class="text-primary" aria-hidden="true">/</span>
      <span>Data Engineering</span><span class="text-primary" aria-hidden="true">/</span>
      <span>Artificial Intelligence</span>
    </div>
  </section>
</template> -->

<template>
  <section
    class="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28"
    aria-labelledby="journal-title"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute
             left-1/2 top-0 -z-10
             h-[500px] w-[700px]
             -translate-x-1/2 -translate-y-1/2
             rounded-full
             bg-primary/[0.07]
             blur-[150px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl flex flex-col items-center justify-center">
      <div class="max-w-3xl text-center">
        <!-- Title -->
        <h1
          id="journal-title"
          class="text-[clamp(2.8rem,6.2vw,6.2rem)]
                 font-semibold leading-[0.98]
                 tracking-[-0.055em]
                 text-text"
        >
          Building.

          <span
            class="block bg-gradient-to-r
                   from-primary via-violet-500 to-accent
                   bg-clip-text text-transparent"
          >
            Learning. Sharing.
          </span>
        </h1>

        <!-- Introduction -->
      </div>
        <div>            
            <p
            class="mt-7 max-w-xl text-center
                    text-base leading-7 text-muted
                    sm:text-lg sm:leading-8"
            >
            A collection of projects, technical experiments
            and engineering notes exploring software,
            data and artificial intelligence.
            </p>
        </div>
    </div>
  </section>
</template>