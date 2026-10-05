<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

const capabilities = [
  {
    number: '01',
    title: 'Architecture',
    detail: 'Software design',
  },
  {
    number: '02',
    title: 'Interface',
    detail: 'User experience',
  },
  {
    number: '03',
    title: 'Development',
    detail: 'Frontend · Backend · API',
  },
  {
    number: '04',
    title: 'Software delivery',
    detail: 'Deployment · Reliability',
  },
]
</script>

<template>
  <section
    id="software"
    aria-labelledby="software-title"
    class="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0 -z-10
             bg-gradient-to-b from-transparent
             via-primary/[0.025] to-transparent"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <!-- Heading -->
      <ScrollReveal>
        <div
          class="grid items-end gap-8 border-t border-text/10 pt-7
                 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)]
                 lg:gap-16"
        >
          <h2
            id="software-title"
            class="max-w-3xl text-[clamp(2.6rem,5.7vw,5rem)]
                   font-semibold leading-[1.02]
                   tracking-[-0.055em] text-text"
          >
            On product

            <span class="block text-primary">
              architecture.
            </span>
          </h2>

          <div class="lg:pb-1">
            <p
              class="max-w-lg text-base leading-8 text-muted
                     sm:text-lg"
            >
              We design applications and software systems by
              integrating architecture, development and user
              experience, with a particular focus on
              maintainability and long-term evolution.
            </p>

            <NuxtLink
              to="/journal"
              class="group mt-6 inline-flex items-center gap-2
                     text-sm font-semibold text-text underline
                     decoration-primary/40 underline-offset-8
                     transition-colors hover:text-primary
                     focus-visible:rounded-sm
                     focus-visible:outline
                     focus-visible:outline-2
                     focus-visible:outline-offset-4
                     focus-visible:outline-primary"
            >
              Explore our projects

              <span
                aria-hidden="true"
                class="transition-transform duration-300
                       group-hover:translate-x-1
                       motion-reduce:transform-none"
              >
                ↗
              </span>
            </NuxtLink>
          </div>
        </div>
      </ScrollReveal>

      <!-- Project preview -->
      <ScrollReveal>
        <figure
          class="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl
                 border border-text/10 bg-background
                 shadow-[0_16px_50px_rgba(15,23,42,0.08)]
                 dark:shadow-[0_16px_50px_rgba(0,0,0,0.24)]
                 sm:mt-12"
        >
          <div
            class="flex h-9 items-center justify-between
                   border-b border-text/10 bg-background/85
                   px-4 sm:px-6"
          >
            <div class="flex gap-1.5" aria-hidden="true">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <span class="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>

            <span
              class="text-[10px] font-medium uppercase
                     tracking-[0.18em] text-muted sm:text-xs"
            >
              Project preview
            </span>

            <span class="w-[39px]" aria-hidden="true" />
          </div>

          <NuxtImg
            src="/images/skills/skill-web.png"
            alt="Preview of a web application designed and developed by Xiani"
            width="900"
            height="402"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
            format="webp"
            quality="72"
            loading="lazy"
            decoding="async"
            class="block h-auto w-full object-cover object-center"
          />

          <figcaption
            class="border-t border-text/10 bg-background/85
                   px-5 py-2.5 text-xs text-muted sm:px-7"
          >
            Design · Architecture · Development
          </figcaption>
        </figure>
      </ScrollReveal>

      <!-- Capabilities -->
      <ScrollReveal direction="right">
        <div
          class="mt-12 grid border-y border-text/10
                 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
        >
          <div
            v-for="(item, index) in capabilities"
            :key="item.number"
            class="py-6 sm:px-5 lg:py-8"
            :class="[
              index % 2 === 1 ? 'sm:border-l sm:border-text/10' : '',
              index >= 2 ? 'border-t border-text/10 lg:border-t-0' : '',
              index > 0 ? 'lg:border-l lg:border-text/10' : '',
            ]"
          >
            <span
              class="text-xs font-semibold tracking-[0.2em] text-primary"
              aria-hidden="true"
            >
              {{ item.number }}
            </span>

            <h3
              class="mt-4 text-lg font-semibold tracking-tight text-text"
            >
              {{ item.title }}
            </h3>

            <p class="mt-1 text-sm leading-6 text-muted">
              {{ item.detail }}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>