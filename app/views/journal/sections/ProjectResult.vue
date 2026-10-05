<script setup lang="ts">
import type { JournalEntry } from '@/data/journal'

defineProps<{
  entry: JournalEntry
}>()
</script>

<template>
  <section
    v-if="entry.metric"
    class="px-5 pb-20
           sm:px-6
           lg:px-8"
    aria-label="Project result"
  >
    <div
      class="mx-auto grid max-w-5xl
             overflow-hidden rounded-3xl
             border border-primary/15
             bg-primary/[0.035]
             md:grid-cols-[.7fr_1.3fr]"
    >
      <div
        class="flex flex-col justify-center
               border-b border-primary/10
               p-8
               md:border-b-0 md:border-r
               md:p-10"
      >
        <span
          class="text-[clamp(3.5rem,8vw,6rem)]
                 font-semibold leading-none
                 tracking-[-0.07em]
                 text-text"
        >
          {{ entry.metric.value }}
        </span>

        <span
          class="mt-3 text-[10px]
                 font-semibold uppercase
                 tracking-[0.18em]
                 text-primary"
        >
          {{ entry.metric.label }}
        </span>
      </div>

      <div class="p-8 md:p-10">
        <p
          class="text-[9px] font-semibold
                 uppercase tracking-[0.18em]
                 text-muted"
        >
          Measured outcome
        </p>

        <h2
          class="mt-4 text-2xl font-semibold
                 tracking-[-0.035em]
                 text-text"
        >
          Results over assumptions.
        </h2>

        <p
          class="mt-4 max-w-xl
                 text-sm leading-7 text-muted"
        >
          The result shown here comes from the technical
          experiment described in this project and reflects
          the measured test scenario rather than a general
          performance guarantee.
        </p>
      </div>
    </div>
  </section>
</template>