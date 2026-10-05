<script setup lang="ts">
import type { JournalEntry } from '@/data/journal'

defineProps<{
  entry: JournalEntry
}>()

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}
</script>

<template>
  <article class="group">
    <NuxtLink
      :to="`/journal/${entry.slug}`"
      class="block focus-visible:rounded-2xl
             focus-visible:outline-2
             focus-visible:outline-offset-4
             focus-visible:outline-primary"
    >
      <!-- Visual -->
      <div
        class="relative aspect-[16/10] overflow-hidden
               rounded-2xl border border-text/10
               bg-text/[0.025]"
      >
        <NuxtImg
          v-if="entry.image"
          :src="entry.image"
          :alt="entry.imageAlt || ''"
          width="800"
          height="500"
          format="webp"
          quality="72"
          loading="lazy"
          decoding="async"
          sizes="sm:100vw md:50vw lg:33vw"
          class="h-full w-full object-cover
                 transition-transform duration-500
                 group-hover:scale-[1.02]
                 motion-reduce:transform-none"
        />

        <!-- Fallback -->
        <div
          v-else
          class="flex h-full items-center
                 justify-center"
          aria-hidden="true"
        >
          <span
            class="text-5xl font-semibold
                   tracking-[-0.06em]
                   text-text/[0.06]"
          >
            XIANI
          </span>
        </div>

        <!-- Type -->
        <span
          class="absolute left-4 top-4
                 rounded-full
                 bg-background/90 px-3 py-1.5
                 text-[9px] font-semibold uppercase
                 tracking-[0.15em] text-text
                 backdrop-blur-sm"
        >
          {{ entry.type }}
        </span>

        <!-- Result -->
        <div
          v-if="entry.metric"
          class="absolute bottom-4 right-4
                 rounded-xl
                 bg-background/90 px-4 py-3
                 backdrop-blur-sm"
        >
          <strong
            class="block text-xl font-semibold
                   tracking-[-0.04em] text-text"
          >
            {{ entry.metric.value }}
          </strong>

          <span
            class="text-[9px] uppercase
                   tracking-[0.14em] text-muted"
          >
            {{ entry.metric.label }}
          </span>
        </div>
      </div>

      <!-- Information -->
      <div class="pt-5">
        <div
          class="flex items-center gap-2
                 text-[10px] text-muted"
        >
          <span class="font-medium text-primary">
            {{ entry.category }}
          </span>

          <span aria-hidden="true">·</span>

          <time :datetime="entry.date">
            {{ formatDate(entry.date) }}
          </time>

          <template v-if="entry.readingTime">
            <span aria-hidden="true">·</span>

            <span>
              {{ entry.readingTime }}
            </span>
          </template>
        </div>

        <h2
          class="mt-3 max-w-xl
                 text-xl font-semibold leading-tight
                 tracking-[-0.03em] text-text
                 transition-colors
                 group-hover:text-primary
                 sm:text-2xl"
        >
          {{ entry.title }}
        </h2>

        <p
          class="mt-3 max-w-xl
                 text-sm leading-6 text-muted"
        >
          {{ entry.excerpt }}
        </p>

        <!-- Tags -->
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tag in entry.tags.slice(0, 3)"
            :key="tag"
            class="rounded-full border border-text/10
                   px-2.5 py-1
                   text-[9px] text-muted"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>