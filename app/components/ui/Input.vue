<script setup lang="ts">
interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'url'
  disabled?: boolean
  required?: boolean
  error?: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      class="mb-2 block text-sm font-medium text-foreground"
    >
      {{ label }}

      <span
        v-if="required"
        class="text-bordeaux"
      >
        *
      </span>
    </label>

    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      class="w-full rounded-xl border bg-surface px-4 py-3 text-foreground outline-none transition-all duration-200 placeholder:text-muted/70 disabled:cursor-not-allowed disabled:opacity-50"
      :class="
        error
          ? 'border-error focus:border-primary focus:border-error focus:ring-2 focus:ring-error/20'
          : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
      "
      @input="updateValue"
    >

    <p
      v-if="error"
      class="mt-2 text-sm text-error"
    >
      {{ error }}
    </p>

    <p
      v-else-if="hint"
      class="mt-2 text-sm text-muted"
    >
      {{ hint }}
    </p>
  </div>
</template>