<script setup lang="ts">
import type { JournalEntry } from '@/data/journal'

defineProps<{
  entry: JournalEntry
}>()
</script>

<template>
  <div
    class="px-5 pb-24
           sm:px-6 sm:pb-28
           lg:px-8 lg:pb-32"
  >
    <div
      class="mx-auto grid max-w-5xl
             gap-12
             lg:grid-cols-[180px_1fr]
             lg:gap-16"
    >
      <!-- Sidebar -->
      <aside class="hidden lg:block">
        <div class="sticky top-28">
          <p
            class="text-[9px] font-semibold uppercase
                   tracking-[0.18em] text-muted"
          >
            Contents
          </p>

          <nav
            class="mt-5"
            aria-label="Article contents"
          >
            <ol class="space-y-3">
              <li
                v-for="(section, index) in entry.sections"
                :key="section.title"
              >
                <a
                  :href="`#section-${index + 1}`"
                  class="text-xs leading-5 text-muted
                         transition-colors hover:text-primary
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-primary"
                >
                  {{ section.title }}
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </aside>

      <!-- Content -->
      <div class="min-w-0">
        <section
          v-for="(section, index) in entry.sections"
          :id="`section-${index + 1}`"
          :key="section.title"
          class="journal-section
                 border-t border-text/10
                 py-10 first:border-t-0 first:pt-0
                 sm:py-12"
        >
          <div
            class="mb-5 flex items-center gap-3"
            aria-hidden="true"
          >
            <span
              class="font-mono text-[9px]
                     text-primary"
            >
              0{{ index + 1 }}
            </span>

            <span
              class="h-px w-8 bg-primary/30"
            />
          </div>

          <h2
            class="text-2xl font-semibold
                   tracking-[-0.035em] text-text
                   sm:text-3xl"
          >
            {{ section.title }}
          </h2>

          <div class="mt-6 space-y-5">
            <p
              v-for="paragraph in section.content"
              :key="paragraph"
              class="max-w-2xl
                     text-base leading-8 text-muted"
            >
              {{ paragraph }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>