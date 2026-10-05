<script setup lang="ts">
const proofs = [
  {
    value: '×3.2',
    label: 'Performance',
    context: 'Redis cache',
    description:
      'Performance improvement measured on a cache-aside benchmark.',
  },
  {
    value: '9.7K',
    suffix: '+',
    label: 'Documents',
    context: 'RAG System',
    description:
      'Documents incorporated into a RAG knowledge base.',
  },
  {
    value: '50K',
    suffix: '+',
    label: 'Observations',
    context: 'Machine Learning',
    description:
      'Data used to train and evaluate models.',
  },
  {
    value: '300',
    suffix: '+',
    label: 'Sites',
    context: 'Data Operations',
    description:
      'Operational scale of a network processing project.',
  },
]
</script>

<template>
  <section
    class="relative isolate overflow-hidden
           border-y border-text/10
           px-5 py-16
           sm:px-6 sm:py-20
           lg:px-8 lg:py-24"
    aria-labelledby="proof-title"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0 -z-20
             bg-gradient-to-r
             from-primary/[0.025]
             via-transparent
             to-primary/[0.025]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl">
      <!-- Header -->
      <div
        class="mb-12 flex flex-col gap-5
               sm:flex-row sm:items-end sm:justify-between
               lg:mb-14"
      >
        <div>
          <div class="flex items-center gap-3">
            <span
              class="relative flex h-2 w-2"
              aria-hidden="true"
            >
              <span
                class="absolute inline-flex h-full w-full
                       animate-ping rounded-full
                       bg-green-500 opacity-30
                       motion-reduce:animate-none"
              />

              <span
                class="relative inline-flex h-2 w-2
                       rounded-full bg-green-500"
              />
            </span>

            <span
              class="text-[10px] font-semibold uppercase
                     tracking-[0.2em] text-muted"
            >
              Built · Tested · Measured
            </span>
          </div>

          <h2
            id="proof-title"
            class="mt-4 max-w-xl text-2xl
                   font-semibold tracking-[-0.035em]
                   text-text sm:text-3xl"
          >
            Engineering is measured
            <span class="text-primary">
              by its results.
            </span>
          </h2>
        </div>

        <p
          class="max-w-sm text-xs leading-5 text-muted
                 sm:text-right"
        >
          Selected metrics from projects and technical
          experiments.
        </p>
      </div>

      <!-- Metrics -->
      <div
        class="grid grid-cols-2
               border-l border-t border-text/10
               lg:grid-cols-4"
      >
        <article
          v-for="(proof, index) in proofs"
          :key="proof.context"
          class="proof-item group relative
                 min-h-[230px]
                 border-b border-r border-text/10
                 p-5
                 sm:min-h-[250px] sm:p-6
                 lg:min-h-[270px] lg:p-7"
        >
          <!-- Number -->
          <span
            class="font-mono text-[9px] text-muted/50"
            aria-hidden="true"
          >
            0{{ index + 1 }}
          </span>

          <!-- Value -->
          <div class="mt-8 sm:mt-10">
            <div class="flex items-start tracking-[-0.06em]">
              <span
                class="text-[clamp(2.6rem,5vw,4.5rem)]
                       font-semibold leading-none text-text"
              >
                {{ proof.value }}
              </span>

              <span
                v-if="proof.suffix"
                class="ml-1 mt-1 text-lg
                       font-medium text-primary
                       sm:text-xl"
              >
                {{ proof.suffix }}
              </span>
            </div>

            <p
              class="mt-3 text-[9px] font-semibold uppercase
                     tracking-[0.17em] text-primary"
            >
              {{ proof.label }}
            </p>
          </div>

          <!-- Context -->
          <div
            class="absolute inset-x-5 bottom-5
                   sm:inset-x-6 sm:bottom-6
                   lg:inset-x-7"
          >
            <p class="text-[10px] font-semibold text-text/70">
              {{ proof.context }}
            </p>

            <p
              class="mt-1 hidden max-w-[220px]
                     text-[10px] leading-4 text-muted/70
                     sm:block"
            >
              {{ proof.description }}
            </p>
          </div>

          <!-- Hover -->
          <div
            class="pointer-events-none absolute inset-0 -z-10
                   bg-gradient-to-br
                   from-primary/[0.045] to-transparent
                   opacity-0 transition-opacity duration-500
                   group-hover:opacity-100"
            aria-hidden="true"
          />

          <div
            class="pointer-events-none absolute
                   left-0 top-[-1px] h-px w-full
                   origin-left scale-x-0
                   bg-gradient-to-r
                   from-primary to-transparent
                   transition-transform duration-500
                   group-hover:scale-x-100"
            aria-hidden="true"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proof-item {
  isolation: isolate;
}

.proof-item::before {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 4px;
  height: 4px;
  content: '';
  border-radius: 50%;
  background: var(--color-text);
  opacity: 0.15;
  transition:
    background-color 300ms ease,
    transform 300ms ease,
    opacity 300ms ease;
}

.proof-item:hover::before {
  background: var(--color-primary);
  opacity: 1;
  transform: scale(1.5);
}

@media (prefers-reduced-motion: reduce) {
  .proof-item::before,
  .proof-item > * {
    transition: none !important;
  }
}
</style>