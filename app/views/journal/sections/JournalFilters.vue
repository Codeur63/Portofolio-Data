<script setup lang="ts">
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Projects', value: 'projects' },
  { label: 'Articles', value: 'articles' },
  { label: 'Data', value: 'data' },
  { label: 'AI', value: 'ai' },
  { label: 'Software', value: 'software' },
] as const

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div
    class="border-y border-text/10"
    aria-label="Filter journal entries"
  >
    <div
      class="mx-auto flex max-w-7xl gap-2
             overflow-x-auto px-5 py-4
             sm:px-6 lg:px-8"
    >
      <button
        v-for="filter in filters"
        :key="filter.value"
        type="button"
        class="shrink-0 rounded-full px-4 py-2
               text-xs font-medium
               transition-colors duration-200
               focus-visible:outline-2
               focus-visible:outline-offset-2
               focus-visible:outline-primary"
        :class="
          modelValue === filter.value
            ? 'bg-text text-background'
            : 'text-muted hover:bg-text/5 hover:text-text'
        "
        :aria-pressed="modelValue === filter.value"
        @click="emit('update:modelValue', filter.value)"
      >
        {{ filter.label }}
      </button>
    </div>
  </div>
</template>