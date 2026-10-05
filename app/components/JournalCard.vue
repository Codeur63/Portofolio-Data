<script setup lang="ts">
interface Props {
  title: string
  description: string
  category: string
  slug: string
  image?: string
  imageAlt?: string
  result?: string
  tags?: string[]
}
withDefaults(defineProps<Props>(), {
  image: '',
  imageAlt: '',
  result: '',
  tags: () => [],
})
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-border/70 bg-background transition-[border-color,box-shadow,transform] duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
    <NuxtLink :to="`/journal/${slug}`" class="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-primary" :aria-label="`Lire l'étude de cas : ${title}`">
      <div class="relative aspect-[16/10] overflow-hidden bg-surface">
        <img v-if="image" :src="image" :alt="imageAlt || `Aperçu du projet ${title}`" width="960" height="600" loading="lazy" decoding="async" class="h-full w-full object-contain p-3 transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
        <div v-else class="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-surface to-violet-500/10 px-6 text-center text-xl font-semibold tracking-tight text-foreground/70" aria-hidden="true">{{ category }}</div>
        <span class="absolute left-4 top-4 rounded-full border border-border/70 bg-background/90 px-3 py-1.5 text-[11px] font-semibold text-foreground backdrop-blur">{{ category }}</span>
      </div>
      <div class="flex flex-1 flex-col p-6">
        <h2 class="text-2xl font-semibold leading-tight tracking-tight text-foreground">{{ title }}</h2>
        <p class="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">{{ description }}</p>
        <p v-if="result" class="mt-5 border-l-2 border-primary pl-3 text-sm font-semibold text-foreground">{{ result }}</p>
        <ul v-if="tags.length" class="mt-5 flex flex-wrap gap-2" aria-label="Technologies utilisées">
          <li v-for="tag in tags" :key="tag" class="rounded-full border border-border/70 px-2.5 py-1 text-[11px] text-muted-foreground">{{ tag }}</li>
        </ul>
        <span class="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary">Lire l'étude de cas <span class="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true">→</span></span>
      </div>
    </NuxtLink>
  </article>
</template>
