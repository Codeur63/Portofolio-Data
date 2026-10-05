<script setup lang="ts">
import type { CaseStudy } from '@/data/caseStudies'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <article class="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-6 lg:px-8">
    <nav aria-label="Fil d’Ariane" class="mb-12 text-sm text-muted-foreground">
      <NuxtLink to="/journal" class="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">← Retour au Journal</NuxtLink>
    </nav>

    <header class="max-w-4xl">
      <p class="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{{ study.eyebrow }}</p>
      <h1 class="text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground">{{ study.title }}</h1>
      <p class="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">{{ study.summary }}</p>
      <ul class="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
        <li v-for="tag in study.stack" :key="tag" class="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{{ tag }}</li>
      </ul>
    </header>

    <figure v-if="study.image" class="mt-14 overflow-hidden rounded-3xl border border-border bg-surface p-4 sm:p-8">
      <img :src="study.image" :alt="study.imageAlt || `Capture du projet ${study.title}`" width="1200" height="720" class="mx-auto max-h-[580px] w-full object-contain" />
      <figcaption class="mt-4 text-center text-xs text-muted-foreground">Illustration du projet — à vérifier avant publication.</figcaption>
    </figure>

    <div class="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
      <div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">01 — Contexte</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-foreground">Le point de départ</h2></div>
      <div class="space-y-5 text-base leading-8 text-muted-foreground"><p>{{ study.context }}</p><p>{{ study.challenge }}</p></div>
    </div>

    <div class="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
      <div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">02 — Méthode</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-foreground">De l’analyse à la solution</h2></div>
      <ol class="space-y-6">
        <li v-for="(step, index) in study.approach" :key="step" class="flex gap-5 border-b border-border/60 pb-6 last:border-b-0">
          <span class="shrink-0 font-mono text-sm font-semibold text-primary">{{ String(index + 1).padStart(2, '0') }}</span>
          <p class="text-base leading-8 text-muted-foreground">{{ step }}</p>
        </li>
      </ol>
    </div>

    <div class="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-20">
      <div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">03 — Résultats</p><h2 class="mt-3 text-3xl font-semibold tracking-tight text-foreground">Ce que montre le projet</h2></div>
      <div class="space-y-6"><p class="border-l-2 border-primary pl-5 text-xl font-medium leading-9 text-foreground">{{ study.outcome }}</p><div><h3 class="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">Périmètre et limites</h3><p class="text-base leading-8 text-muted-foreground">{{ study.limits }}</p></div></div>
    </div>

    <footer class="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-9">
      <NuxtLink to="/journal" class="text-sm font-semibold text-primary hover:underline">← Toutes les réalisations</NuxtLink>
      <NuxtLink to="/contact" class="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-transform motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Discuter d’un projet ↗</NuxtLink>
    </footer>
  </article>
</template>
