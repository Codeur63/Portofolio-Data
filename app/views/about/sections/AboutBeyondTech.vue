  <!-- <script setup lang="ts">
const perspectives = [
  {
    id: 'applied-curiosity',
    title: 'Applied curiosity',
    description:
      'Exploring a technology only matters when it helps solve a real problem. Xiani approaches new tools by understanding where they fit, what they improve and how they connect with the rest of the system.',
    detail: 'LEARN · EXPERIMENT',
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    description:
      'Different environments create different constraints. The objective is not to reproduce the same architecture everywhere, but to adapt the solution to its technical, operational and business context.',
    detail: 'UNDERSTAND · ADAPT',
  },
] as const
</script>

<template>
  <section
    id="au-dela"
    aria-labelledby="beyond-title"
    class="
      relative isolate overflow-hidden
      border-t border-border/60
      py-24
      sm:py-28
      lg:py-36
    "
  >
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute -left-32 top-12 -z-10
        h-80 w-80
        rounded-full
        bg-primary/[0.06]
        blur-[100px]
      "
    />

    <div
      class="
        mx-auto grid max-w-7xl
        gap-14 px-5
        sm:px-6
        lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
        lg:gap-20 lg:px-8
      "
    > 
        
      <div class="lg:sticky lg:top-28 lg:self-start">
        <h2
          id="beyond-title"
          class="
            max-w-xl
            text-[clamp(2.6rem,5vw,4.6rem)]
            font-semibold
            leading-[1.05]
            tracking-[-0.055em]
            text-foreground
          "
        >
          Technology evolves.

          <span
            class="
              block
              text-muted-foreground
            "
          >
            Curiosity remains.
          </span>
        </h2>

        <blockquote
          class="
            mt-10 max-w-md
            border-l-2 border-primary/60
            pl-6
            text-lg leading-relaxed
            text-foreground/85
            sm:text-xl
          "
        >
          “Understanding a new context is often the first
          step towards designing the right solution.”
        </blockquote>

        <p
          class="
            mt-6 max-w-md
            text-sm leading-7
            text-muted-foreground
          "
        >
          Xiani does not approach technology as a collection
          of tools to accumulate. The objective is to
          understand what is useful, experiment where
          necessary and select what genuinely serves the
          system being built.
        </p>
      </div>

      
      <div
        class="
          divide-y divide-border/70
          border-y border-border/70
        "
      >
        <article
          v-for="item in perspectives"
          :key="item.id"
          class="
            group grid
            gap-5 py-8
            sm:gap-7 sm:py-12
          "
        >
          <p
            class="
              text-[10px] font-semibold
              uppercase
              tracking-[0.22em]
              text-muted-foreground
            "
          >
            {{ item.detail }}
          </p>

          <h3
            class="
              text-2xl font-semibold
              tracking-tight
              text-foreground
              transition-colors duration-300
              group-hover:text-primary
              motion-reduce:transition-none
              sm:text-3xl
            "
          >
            {{ item.title }}
          </h3>

          <p
            class="
              max-w-lg
              text-sm leading-7
              text-muted-foreground
              sm:text-base sm:leading-8
            "
          >
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>   -->

<script setup lang="ts">
const perspectives = [
  {
    id: 'applied-curiosity',
    title: 'Applied curiosity',
    description:
      'Exploring a technology only matters when it helps solve a real problem. Xiani approaches new tools by understanding where they fit, what they improve and how they connect with the rest of the system.',
    detail: 'LEARN · EXPERIMENT',
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    description:
      'Different environments create different constraints. The objective is not to reproduce the same architecture everywhere, but to adapt the solution to its technical, operational and business context.',
    detail: 'UNDERSTAND · ADAPT',
  },
] as const
</script>

<template>
  <section
    id="beyond-technology"
    aria-labelledby="beyond-title"
    class="
      relative isolate overflow-hidden
      border-t border-black/[0.08]
      py-24

      sm:py-28

      lg:py-36

      dark:border-white/[0.10]
    "
  >
    <!-- Decorative glow -->
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute -left-32 top-12 -z-10
        h-80 w-80
        rounded-full
        bg-primary/[0.06]
        blur-[100px]

        dark:bg-primary/[0.08]
      "
    />

    <div
      class="
        mx-auto grid max-w-7xl
        gap-14 px-5

        sm:px-6

        lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
        lg:gap-20 lg:px-8
      "
    >
      <!-- Editorial statement -->
      <div class="lg:sticky lg:top-28 lg:self-start">
        <h2
          id="beyond-title"
          class="
            max-w-xl
            text-[clamp(2.6rem,5vw,4.6rem)]
            font-semibold
            leading-[1.05]
            tracking-[-0.055em]
            text-text
          "
        >
          Technology evolves.

          <span class="block text-muted">
            Curiosity remains.
          </span>
        </h2>

        <p
          class="
            mt-10 max-w-md
            border-l-2 border-primary/60
            pl-6
            text-lg leading-relaxed
            text-text/85

            sm:text-xl
          "
        >
          Understanding a new context is often the first
          step towards designing the right solution.
        </p>

        <p
          class="
            mt-6 max-w-md
            text-sm leading-7
            text-muted
          "
        >
          Xiani does not approach technology as a collection
          of tools to accumulate. The objective is to
          understand what is useful, experiment where
          necessary and select what genuinely serves the
          system being built.
        </p>
      </div>

      <!-- Perspectives -->
      <div
        class="
          divide-y divide-black/[0.08]
          border-y border-black/[0.08]

          dark:divide-white/[0.10]
          dark:border-white/[0.10]
        "
      >
        <article
          v-for="item in perspectives"
          :key="item.id"
          class="
            grid gap-5 py-8

            sm:gap-7 sm:py-12
          "
        >
          <p
            class="
              text-[11px] font-semibold
              uppercase
              tracking-[0.2em]
              text-muted
            "
          >
            {{ item.detail }}
          </p>

          <h3
            class="
              text-2xl font-semibold
              tracking-tight
              text-text

              sm:text-3xl
            "
          >
            {{ item.title }}
          </h3>

          <p
            class="
              max-w-lg
              text-sm leading-7
              text-muted

              sm:text-base sm:leading-8
            "
          >
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>