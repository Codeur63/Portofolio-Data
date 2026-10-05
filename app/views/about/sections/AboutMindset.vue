<!-- <script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

const principles = [
  {
    number: '01',
    verb: 'UNDERSTAND',
    title: 'Before building.',
    description:
      'Clarify the requirements, use cases, available data, and constraints before choosing a technology. The architecture stems from the problem, not the tool.',
    detail: 'Needs · Constraints · Priorities',
  },
  {
    number: '02',
    verb: 'DESIGN',
    title: 'To last.',
    description:
      'Build architectures that are readable, maintainable, and scalable, while limiting complexity to areas where it provides real technical value.',
    detail: 'Architecture · Maintainability · Evolution',
  },
  {
    number: '03',
    verb: 'MEASURE',
    title: 'Rather than assume.',
    description:
      'Validate technical choices through observation, testing, and relevant metrics. An engineering decision must be able to stand up to the results.',
    detail: 'Observation · Experimentation · Results',
  },
] as const
</script>

<template>
  <section
    id="methode"
    aria-labelledby="mindset-title"
    class="relative isolate overflow-hidden border-y border-border/60 bg-surface/30 px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_10%,hsl(var(--primary)/0.045),transparent_35%)]"
    />

    <div class="mx-auto max-w-7xl">
      <ScrollReveal>
        <header
          class="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)] lg:items-end lg:gap-20"
        >
          <h2
            id="mindset-title"
            class="max-w-3xl text-[clamp(2.5rem,5.5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-foreground"
          >
            The method behind
            <span class="text-muted-foreground">the systems.</span>
          </h2>

          <p
            class="max-w-md text-base leading-8 text-muted-foreground sm:text-lg"
          >
            Three engineering principles guide Xiani from problem definition
            to architecture design and technical validation.
          </p>
        </header>
      </ScrollReveal>

      <ol class="mt-16 border-t border-border/80 lg:mt-24">
        <li
          v-for="principle in principles"
          :key="principle.number"
          class="border-b border-border/80"
        >
          <ScrollReveal>
            <article
              class="grid gap-5 py-10 sm:py-12 lg:grid-cols-2 lg:items-start lg:gap-10 lg:py-16"
            >
              <h3
                class="text-2xl font-semibold leading-[1.04] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl"
              >
                <span class="block">
                  {{ principle.verb }}
                </span>

                <span class="block text-muted-foreground">
                  {{ principle.title }}
                </span>
              </h3>

              <div class="lg:pt-2">
                <p
                  class="max-w-lg text-sm leading-8 text-muted-foreground sm:text-base"
                >
                  {{ principle.description }}
                </p>

                <p
                  class="mt-6 border-l-2 border-primary/50 pl-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70"
                >
                  {{ principle.detail }}
                </p>
              </div>
            </article>
          </ScrollReveal>
        </li>
      </ol>

      <ScrollReveal>
        <p class="mt-10 max-w-3xl text-sm leading-7 text-muted-foreground">
          A technology becomes relevant when it meets an identified need,
          fits into a coherent architecture, and produces verifiable results.
        </p>
      </ScrollReveal>
    </div>
  </section>
</template> -->

<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

const principles = [
  {
    number: '01',
    verb: 'UNDERSTAND',
    title: 'Before building.',
    description:
      'Clarify the requirements, use cases, available data and constraints before choosing a technology. The architecture stems from the problem, not the tool.',
    detail: 'Needs · Constraints · Priorities',
  },
  {
    number: '02',
    verb: 'DESIGN',
    title: 'To last.',
    description:
      'Build architectures that are readable, maintainable and scalable, while limiting complexity to areas where it provides real technical value.',
    detail: 'Architecture · Maintainability · Evolution',
  },
  {
    number: '03',
    verb: 'MEASURE',
    title: 'Rather than assume.',
    description:
      'Validate technical choices through observation, testing and relevant metrics. An engineering decision must be able to stand up to the results.',
    detail: 'Observation · Experimentation · Results',
  },
] as const
</script>

<template>
  <section
    id="method"
    aria-labelledby="mindset-title"
    class="
      relative isolate overflow-hidden
      border-y border-black/[0.08]
      bg-black/[0.015]
      px-5 py-24

      sm:px-6

      lg:px-8 lg:py-32

      dark:border-white/[0.10]
      dark:bg-white/[0.02]
    "
  >
    <!-- Decorative background -->
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute -right-32 top-0 -z-10
        h-96 w-96
        rounded-full
        bg-primary/[0.045]
        blur-[100px]

        dark:bg-primary/[0.07]
      "
    />

    <div class="mx-auto max-w-7xl">
      <ScrollReveal>
        <header
          class="
            grid gap-7

            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)]
            lg:items-end
            lg:gap-20
          "
        >
          <h2
            id="mindset-title"
            class="
              max-w-3xl
              text-[clamp(2.5rem,5.5vw,4.8rem)]
              font-semibold
              leading-[1.02]
              tracking-[-0.055em]
              text-text
            "
          >
            The method behind
            <span class="text-muted">
              the systems.
            </span>
          </h2>

          <p
            class="
              max-w-md
              text-base leading-8
              text-muted

              sm:text-lg
            "
          >
            Three engineering principles guide Xiani from problem definition
            to architecture design and technical validation.
          </p>
        </header>
      </ScrollReveal>

      <ol
        class="
          mt-16
          border-t border-black/[0.08]

          lg:mt-24

          dark:border-white/[0.10]
        "
      >
        <li
          v-for="principle in principles"
          :key="principle.number"
          class="
            border-b border-black/[0.08]
            dark:border-white/[0.10]
          "
        >
          <ScrollReveal>
            <article
              class="
                grid gap-6 py-10

                sm:py-12

                lg:grid-cols-2
                lg:items-start
                lg:gap-10
                lg:py-16
              "
            >
              <!-- Principle -->
              <h3
                class="
                  text-2xl font-semibold
                  leading-[1.04]
                  tracking-[-0.05em]
                  text-text

                  sm:text-4xl

                  lg:text-5xl
                "
              >
                <span class="block">
                  {{ principle.verb }}
                </span>

                <span class="block text-muted">
                  {{ principle.title }}
                </span>
              </h3>

              <!-- Explanation -->
              <div class="lg:pt-2">
                <p
                  class="
                    max-w-lg
                    text-sm leading-8
                    text-muted

                    sm:text-base
                  "
                >
                  {{ principle.description }}
                </p>

                <p
                  class="
                    mt-6
                    border-l-2 border-primary/50
                    pl-4
                    text-xs font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-text/70
                  "
                >
                  {{ principle.detail }}
                </p>
              </div>
            </article>
          </ScrollReveal>
        </li>
      </ol>

      <ScrollReveal>
        <p
          class="
            mt-10 max-w-3xl
            text-sm leading-7
            text-muted
          "
        >
          A technology becomes relevant when it meets an identified need,
          fits into a coherent architecture and produces verifiable results.
        </p>
      </ScrollReveal>
    </div>
  </section>
</template>