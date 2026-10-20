<script setup lang="ts">
import { computed, ref } from 'vue'
import { journalEntries, type JournalEntry, type JournalDomain } from '~/data/journal'
import FeaturedEntry from './sections/FeaturedEntry.vue'
import JournalHero from './sections/JournalHero.vue'
import JournalFilters from './sections/JournalFilters.vue'
import JournalCard from './sections/JournalCard.vue'

const activeFilter = ref('all')

const featuredEntry = journalEntries.find(
  entry => entry.featured,
)

const filteredEntries = computed<JournalEntry[]>(() => {
  const entries = journalEntries.filter(
    entry => activeFilter.value !== 'all' || entry.slug !== featuredEntry?.slug,
  )

  switch (activeFilter.value) {
    case 'projects':
      return entries.filter(
        entry => entry.type === 'project',
      )

    case 'articles':
      return entries.filter(
        entry => entry.type === 'article',
      )

    case 'data':
    case 'ai':
    case 'software':
      return entries.filter(entry =>
        entry.domains.includes(
          activeFilter.value as JournalDomain,
        ),
      )

    default:
      return [...entries].sort((a, b) => b.date.localeCompare(a.date))
  }
})
const displayedEntryCount = computed(() => filteredEntries.value.length + (featuredEntry && activeFilter.value === 'all' ? 1 : 0))
</script>

<template>
  <div>
    <JournalHero />

    <FeaturedEntry
      v-if="featuredEntry && activeFilter === 'all'"
      :entry="featuredEntry"
    />

    <JournalFilters v-model="activeFilter" />

    <section
      class="px-5 py-16
             sm:px-6 sm:py-20
             lg:px-8 lg:py-24"
      aria-label="Journal entries"
    >
      <div class="mx-auto max-w-7xl">
        <div
          class="mb-10 border-b
                 border-text/10 pb-4"
        >
          <p
            class="text-xs font-semibold
                   uppercase tracking-[0.17em]
                   text-muted"
            aria-live="polite"
          >
            {{ displayedEntryCount }}
            {{
              displayedEntryCount === 1
                ? 'entry'
                : 'entries'
            }}
          </p>
        </div>

        <div
          v-if="filteredEntries.length"
          class="grid grid-cols-1
                 gap-x-6 gap-y-14
                 md:grid-cols-2
                 lg:grid-cols-3"
        >
          <JournalCard
            v-for="entry in filteredEntries"
            :key="entry.slug"
            :entry="entry"
          />
        </div>

        <div
          v-else
          class="py-20 text-center"
        >
          <p class="text-sm text-muted">
            No entries in this category yet.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>