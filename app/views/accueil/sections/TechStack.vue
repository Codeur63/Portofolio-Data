<script setup lang="ts">
import Technology from '@/types/Technology.js'

const technologies: Technology[] = [
  { name: 'Python', icon: 'logos:python', category: 'engineering' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'engineering' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', category: 'engineering' },
  { name: 'Vue', icon: 'logos:vue', category: 'engineering' },
  { name: 'FastAPI', icon: 'logos:fastapi-icon', category: 'engineering' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'cloud' },
  { name: 'Git', icon: 'logos:git-icon', category: 'engineering' },
  { name: 'GitHub', icon: 'logos:github-icon', category: 'engineering' },

  { name: 'PyTorch', icon: 'logos:pytorch-icon', category: 'ai' },
  { name: 'Pandas', icon: 'logos:pandas-icon', category: 'data' },
  { name: 'Redis', icon: 'logos:redis', category: 'data' },
  { name: 'Cassandra', icon: 'logos:cassandra', category: 'data' },
  { name: 'InfluxDB', icon: 'logos:influxdb', category: 'data' },
  { name: 'Apache Airflow', icon: 'logos:airflow', category: 'data' },
  { name: 'Grafana', icon: 'logos:grafana', category: 'data' },
  { name: 'Prometheus', icon: 'logos:prometheus', category: 'data' },
]

const rows = [
  technologies.slice(0, 8),
  technologies.slice(8),
]
</script>

<template>
  <section
    class="relative z-20 mx-auto -mt-6 w-[calc(100%-2rem)] max-w-4xl sm:-mt-12 lg:-mt-14"
    aria-labelledby="tech-stack-title"
  >
    <div
      class="relative overflow-hidden rounded-[1.75rem]
             border border-black/[0.06]
             shadow-[0_20px_70px_rgba(15,23,42,0.08)]
             backdrop-blur-xl
             dark:border-white/[0.08] "
    >
      <div class="flex items-center justify-center gap-3 px-6 pb-4 pt-6">
        <span
          class="h-1.5 w-1.5 rounded-full bg-primary"
          aria-hidden="true"
        />

        <h2
          id="tech-stack-title"
          class="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
        >
          Technologies &amp; engineering stack
        </h2>
      </div>

      <div class="relative overflow-hidden pb-6">
        <div class="flex flex-col gap-2.5">
          <div
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            class="tech-row"
            :class="{ 'tech-row--reverse': rowIndex === 1 }"
          >
            <div class="tech-track">
              <div
                v-for="technology in [...row, ...row]"
                :key="`${rowIndex}-${technology.name}-${Math.random}`"
                class="tech-item"
              >
                <Icon
                  :name="technology.icon"
                  class="h-6 w-6 shrink-0 opacity-60"
                  aria-hidden="true"
                />

                <span class="whitespace-nowrap text-xs font-medium text-muted">
                  {{ technology.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        class="border-t  px-6 py-3.5 text-center
               text-xs text-muted "
      >
        From raw data to a deployed smart product.
      </p>
    </div>
  </section>
</template>

<style scoped>
.tech-row {
  overflow: hidden;
}

.tech-track {
  display: flex;
  width: max-content;
  gap: 0.5rem;
  animation: tech-scroll 36s linear infinite;
}

.tech-row--reverse .tech-track {
  animation-direction: reverse;
  animation-duration: 42s;
}

.tech-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.65rem;
  min-height: 42px;
  padding: 0.55rem 0.85rem;
  border-radius: 0.8rem;
}

@keyframes tech-scroll {
  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-track {
    animation: none;
  }
}
</style>