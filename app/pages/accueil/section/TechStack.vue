<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Technology {
  name: string
  icon: string
}

const technologies: Technology[] = [
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'npm', icon: 'logos:npm' },
  { name: 'Grafana', icon: 'logos:grafana' },
  { name: 'Prometheus', icon: 'logos:prometheus' },
  { name: 'Git', icon: 'logos:git' },
  { name: 'GitHub', icon: 'logos:github' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Pandas', icon: 'logos:pandas-icon' },
  { name: 'PyTorch', icon: 'logos:pytorch-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Apache Airflow', icon: 'logos:airflow' },
  { name: 'SQLite', icon: 'logos:sqlite' },
  { name: 'Cassandra', icon: 'logos:cassandra' },
  { name: 'InfluxDB', icon: 'logos:influxdb' },
  { name: 'FastAPI', icon: 'logos:fastapi' },
  { name: 'Redis', icon: 'logos:redis' },
]

// Répartition égale et déterministe de TOUTES les technologies sur 3 lignes
function chunk<T>(arr: T[], parts: number): T[][] {
  const size = Math.ceil(arr.length / parts)
  return Array.from({ length: parts }, (_, i) =>
    arr.slice(i * size, i * size + size),
  ).filter(row => row.length > 0)
}

const rows = chunk(technologies, 3)

// Apparition maîtrisée une seule fois au scroll
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 },
  )

  observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative z-10 -mt-20 px-4 lg:px-8 max-w-7xl mx-auto w-full"
    aria-label="Technologies utilisées"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="mx-auto max-w-4xl shadow-2xl rounded-[2rem] bg-surface/20 backdrop-blur-sm overflow-hidden">

      <!-- Conteneur global des technologies -->
      <div class="relative py-6 px-1 flex flex-col gap-4">
        
        <!-- Effet de fondu progressif gauche (Fade) -->
        <div
          class="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent"
        />

        <!-- Effet de fondu progressif droite (Fade) -->
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent"
        />

        <!-- Lignes infinies -->
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="tech-row"
          :style="{ '--reveal-delay': `${rowIndex * 120}ms` }"
          :class="{
            'tech-row-reverse': rowIndex === 1,
            'tech-row-slow': rowIndex === 2,
          }"
        >
          <div class="tech-track">
            <!-- Copie 1 (Visible initiale) -->
            <div class="tech-group">
              <div
                v-for="technology in row"
                :key="technology.name"
                class="tech-item hover:cursor-pointer"
              >
                <span class="tech-logo-box">
                  <Icon :name="technology.icon" class="tech-logo" />
                </span>
                <span class="tech-name text-sm sm:text-base">{{ technology.name }}</span>
              </div>
            </div>

            <!-- Copie 2 (Doublon parfait pour effet de boucle fluide sans coupure) -->
            <div class="tech-group" aria-hidden="true">
              <div
                v-for="technology in row"
                :key="`duplicate-${technology.name}`"
                class="tech-item hover:cursor-pointer"
              >
                <span class="tech-logo-box">
                  <Icon :name="technology.icon" class="tech-logo" />
                </span>
                <span class="tech-name text-sm sm:text-base">{{ technology.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Apparition au scroll ---------- */
.tech-row {
  --play-state: running;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--reveal-delay, 0ms);
}

.is-visible .tech-row {
  opacity: 1;
  transform: translateY(0);
}

.tech-row:hover {
  --play-state: paused;
}

/* ---------- Piste de défilement infinie ---------- */
.tech-track {
  display: flex;
  width: max-content;
  will-change: transform;
  backface-visibility: hidden;
  animation: tech-scroll 28s linear infinite;
  animation-play-state: var(--play-state);
}

.tech-row-reverse .tech-track {
  animation-direction: reverse;
  animation-duration: 32s;
}

.tech-row-slow .tech-track {
  animation-duration: 38s;
}

.tech-group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 1.5rem;
  padding: 0.25rem 0.75rem;
}

.tech-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid transparent;
  transition: transform 200ms ease, background-color 200ms ease, border-color 200ms ease;
}

.tech-logo-box {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
}

.tech-logo {
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  opacity: 0.4;
  transition: filter 250ms ease, opacity 250ms ease, transform 250ms ease;
}

.tech-name {
  white-space: nowrap;
  font-weight: 500;
  color: var(--color-muted, #6b7280);
  transition: color 250ms ease;
}

/* Interactions au Survol */
.tech-item:hover {
  transform: translateY(-2px);
  border-color: var(--color-border, rgba(156, 163, 175, 0.2));
  background-color: color-mix(in srgb, var(--color-surface, #ffffff) 65%, transparent);
}

.tech-item:hover .tech-logo {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.1);
}

.tech-item:hover .tech-name {
  color: var(--color-foreground, #1f2937);
}

@keyframes tech-scroll {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}

@media (max-width: 640px) {
  .tech-group { gap: 1rem; }
  .tech-logo-box { width: 22px; height: 22px; }
}

@media (prefers-reduced-motion: reduce) {
  .tech-track { animation: none; }
  .tech-row { opacity: 1; transform: none; transition: none; }
}
</style>
