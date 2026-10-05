<script setup lang="ts">
interface Filter { label: string; value: string; count: number }
defineProps<{ filters: Filter[]; modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <div class="flex flex-wrap gap-2" role="group" aria-label="Filtrer les réalisations">
    <button v-for="filter in filters" :key="filter.value" type="button"
      :aria-pressed="modelValue === filter.value"
      class="rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="modelValue === filter.value ? 'border-primary bg-primary text-white' : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'"
      @click="emit('update:modelValue', filter.value)">
      {{ filter.label }} <span class="ml-1 opacity-70">{{ filter.count }}</span>
    </button>
  </div>
</template>
