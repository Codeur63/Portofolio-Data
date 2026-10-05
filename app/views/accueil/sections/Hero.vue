<script setup lang="ts">
import TypeWriter from '@/components/TypeWriter.vue'

const colorMode = useColorMode()

const metrics = [
  { value: '×3.2', label: 'Cache performance' },
  { value: '9.7K+', label: 'RAG documents' },
  { value: '50K+', label: 'ML observations' },
]

const heroImage = computed(() =>
  colorMode.value === 'dark'
    ? '/images/hero/avatar-dark.png'
    : '/images/hero/avatar-light.png'
)
</script>

<template>
  <section
    class="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-32"
    aria-labelledby="hero-title"
  >
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute inset-0 -z-20
             bg-[radial-gradient(circle_at_75%_35%,rgba(139,92,246,0.10),transparent_35%)]
             dark:bg-[radial-gradient(circle_at_75%_35%,rgba(139,92,246,0.16),transparent_38%)]"
      aria-hidden="true"
    />

    <div
      class="pointer-events-none absolute inset-0 -z-20
             opacity-[0.035] dark:opacity-[0.06]
             [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
             [background-size:64px_64px]"
      aria-hidden="true"
    />

    <div
      class="pointer-events-none absolute left-1/2 top-1/3 -z-10
             h-[500px] w-[500px] -translate-x-1/2 rounded-full
             bg-primary/10 blur-[140px] dark:bg-primary/15"
      aria-hidden="true"
    />

    <div
      class="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14
             px-5 pb-16 sm:px-6
             lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:px-8 lg:pb-20"
    >
      <div class="relative z-10 max-w-3xl">
        <h1
          id="hero-title"
          class="max-w-3xl
                 text-[clamp(2.8rem,6.2vw,6.2rem)]
                 font-semibold
                 leading-[0.98]
                 tracking-[-0.055em]
                 text-text"
        >
          Building data systems

          <span
            class="mt-1 block bg-gradient-to-r from-primary
                   via-violet-500 to-accent
                   bg-clip-text text-transparent"
          >
            that think.
          </span>
        </h1>

        <div class="mt-7 max-w-xl">
          <div
            class="hero-secondary hero-delay-1 mb-3 flex min-h-7
                   items-center text-base font-semibold text-text
                   sm:text-lg"
          >
            <TypeWriter />
          </div>

          <p
            class="max-w-xl text-base leading-7 text-muted
                   sm:text-lg sm:leading-8"
          >
            I design data architectures and artificial intelligence
            systems that transform complex data into reliable,
            high-performance, and actionable products.
          </p>
        </div>

        <div
          class="hero-secondary hero-delay-2 mt-12 flex flex-wrap
                 gap-x-8 gap-y-5 border-t border-text/10 pt-6"
          aria-label="Project metrics"
        >
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="max-w-[110px]"
          >
            <p class="text-xl font-semibold tracking-tight text-text">
              {{ metric.value }}
            </p>

            <p class="mt-0.5 text-xs text-muted">
              {{ metric.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="hidden flex-col lg:flex">
        <div
          class="relative isolate mx-auto w-full max-w-2xl overflow-hidden"
        >
          <NuxtImg
            :src="heroImage"
            alt=""
            width="00"
            height="1000"
            sizes="800px"            
            format="webp"
            quality="70"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="z-10 block h-full max-w-none object-cover object-top"
          />
        </div>

        <div
          class="mt-6 flex flex-row justify-around"
          aria-label="Core technologies"
        >
          <UIcon
            name="skill-icons:aws-light"
            class="size-10 dark:hidden xl:size-15"
            aria-hidden="true"
          />

          <Icon
            name="skill-icons:aws-dark"
            class="hidden size-10 dark:block xl:size-15"
            aria-hidden="true"
          />

          <Icon
            name="logos:python"
            class="size-10 xl:size-15"
            aria-hidden="true"
          />

          <Icon
            name="grommet-icons:genai"
            class="size-10 xl:size-15"
            aria-hidden="true"
          />

          <Icon
            name="bxs:data"
            class="size-10 xl:size-15"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-secondary {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
  animation:
    heroSecondaryReveal
    500ms
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.hero-delay-1 {
  animation-delay: 80ms;
}

.hero-delay-2 {
  animation-delay: 140ms;
}

@keyframes heroSecondaryReveal {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-secondary {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>