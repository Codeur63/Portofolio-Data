<script setup lang="ts">
import type { JournalEntry } from '@/data/journal'

defineProps<{
  entry: JournalEntry
}>()
</script>

<template>
  <section
    class="px-5 pb-16
           sm:px-6 sm:pb-20
           lg:px-8 lg:pb-24"
    aria-labelledby="featured-title"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Label -->
      <div class="mb-5 flex items-center gap-3">
        <span
          class="h-1.5 w-1.5 rounded-full bg-primary"
          aria-hidden="true"
        />

        <p
          class="text-[10px] font-semibold uppercase
                 tracking-[0.2em] text-muted"
        >
          Featured project
        </p>
      </div>

      <NuxtLink
        :to="`/journal/${entry.slug}`"
        class="featured-card group
               grid overflow-hidden rounded-3xl
               border border-text/10
               bg-text/[0.02]
               focus-visible:outline-2
               focus-visible:outline-offset-4
               focus-visible:outline-primary
               lg:grid-cols-[1.05fr_.95fr]"
      >
        <!-- Content -->
        <div
          class="flex flex-col justify-between
                 p-7 sm:p-9 lg:p-12"
        >
          <div>
            <div
              class="flex flex-wrap items-center gap-2
                     text-[10px]"
            >
              <span
                class="font-semibold uppercase
                       tracking-[0.15em] text-primary"
              >
                {{ entry.category }}
              </span>

              <span
                class="text-muted"
                aria-hidden="true"
              >
                ·
              </span>

              <span class="text-muted">
                Project
              </span>
            </div>

            <h2
              id="featured-title"
              class="mt-6 max-w-2xl
                     text-[clamp(2rem,4vw,3.5rem)]
                     font-semibold leading-[1.02]
                     tracking-[-0.045em]
                     text-text"
            >
              {{ entry.title }}
            </h2>

            <p
              class="mt-5 max-w-xl
                     text-sm leading-7 text-muted
                     sm:text-base"
            >
              {{ entry.excerpt }}
            </p>
          </div>

          <div class="mt-10">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in entry.tags"
                :key="tag"
                class="rounded-full
                       border border-text/10
                       px-3 py-1.5
                       text-[10px] text-muted"
              >
                {{ tag }}
              </span>
            </div>

            <div
              class="mt-8 inline-flex items-center gap-2
                     text-sm font-semibold text-text
                     transition-colors
                     group-hover:text-primary"
            >
              Explore the project

              <span
                aria-hidden="true"
                class="transition-transform duration-300
                       group-hover:translate-x-1
                       motion-reduce:transform-none"
              >
                →
              </span>
            </div>
          </div>
        </div>

        <!-- Technical visual -->
        <div
          class="relative min-h-[360px]
                 border-t border-text/10
                 p-7
                 sm:p-9
                 lg:min-h-[500px]
                 lg:border-l lg:border-t-0
                 lg:p-12"
        >
          <div
            class="pointer-events-none absolute
                   left-1/2 top-1/2
                   h-[300px] w-[300px]
                   -translate-x-1/2 -translate-y-1/2
                   rounded-full
                   bg-primary/[0.08]
                   blur-[100px]"
            aria-hidden="true"
          />

          <div
            class="relative flex h-full
                   flex-col justify-between"
          >
            <!-- Architecture -->
            <div>
              <p
                class="font-mono text-[9px]
                       uppercase tracking-[0.18em]
                       text-muted"
              >
                Architecture
              </p>

              <div
                class="mt-8 flex flex-col
                       items-center gap-3"
                aria-hidden="true"
              >
                <div class="architecture-node">
                  Application
                </div>

                <span class="architecture-line" />

                <div
                  class="architecture-node
                         architecture-node--primary"
                >
                  Redis Cache
                </div>

                <div
                  class="flex items-center gap-4"
                >
                  <span class="architecture-label">
                    MISS
                  </span>

                  <span class="architecture-line" />

                  <div class="architecture-node">
                    MongoDB
                  </div>
                </div>
              </div>
            </div>

            <!-- Result -->
            <div
              v-if="entry.metric"
              class="mt-12 border-t
                     border-text/10 pt-7"
            >
              <p
                class="font-mono text-[9px]
                       uppercase tracking-[0.18em]
                       text-muted"
              >
                Measured result
              </p>

              <div class="mt-3 flex items-end gap-3">
                <strong
                  class="text-5xl font-semibold
                         tracking-[-0.06em]
                         text-text
                         sm:text-6xl"
                >
                  {{ entry.metric.value }}
                </strong>

                <span
                  class="pb-1 text-xs
                         font-medium text-primary"
                >
                  {{ entry.metric.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.featured-card {
  transition:
    border-color 300ms ease,
    transform 300ms ease;
}

.featured-card:hover {
  border-color: color-mix(
    in srgb,
    var(--color-primary) 25%,
    transparent
  );
}

.architecture-node {
  min-width: 130px;
  padding: 11px 16px;
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-text) 12%,
      transparent
    );
  border-radius: 10px;
  text-align: center;
  font-family: monospace;
  font-size: 10px;
  color: var(--color-text);
}

.architecture-node--primary {
  border-color:
    color-mix(
      in srgb,
      var(--color-primary) 35%,
      transparent
    );

  background:
    color-mix(
      in srgb,
      var(--color-primary) 7%,
      transparent
    );

  color: var(--color-primary);
}

.architecture-line {
  width: 1px;
  height: 25px;
  background:
    color-mix(
      in srgb,
      var(--color-text) 15%,
      transparent
    );
}

.architecture-label {
  font-family: monospace;
  font-size: 8px;
  letter-spacing: 0.12em;
  color: var(--color-muted);
}

@media (prefers-reduced-motion: reduce) {
  .featured-card {
    transition: none;
  }
}
</style>