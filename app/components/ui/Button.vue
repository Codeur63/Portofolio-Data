<script setup lang="ts">
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'

type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:pointer-events-none disabled:opacity-50"
    :class="{
      // Variants
      'bg-primary text-white hover:bg-primary-hover':
        variant === 'primary',

      'bg-data text-[#100A18] hover:opacity-90':
        variant === 'secondary',

      'border border-border bg-surface text-foreground hover:border-primary hover:text-primary':
        variant === 'outline',

      'text-foreground hover:bg-surface-secondary':
        variant === 'ghost',

      'bg-bordeaux text-white hover:opacity-90':
        variant === 'danger',

      'px-3 py-2 text-sm': size === 'sm',
      'px-5 py-2.5 text-sm': size === 'md',
      'px-6 py-3 text-base': size === 'lg',
    }"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />

    <slot />

    <span v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </button>
</template>