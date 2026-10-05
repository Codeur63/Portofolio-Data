<!-- <script setup lang="ts">
type ExpertiseId = 'software' | 'data' | 'ai'

interface Expertise {
  id: ExpertiseId
  title: string
  action: string
  description: string
  capabilities: readonly string[]
}

const expertises: readonly Expertise[] = [
  {
    id: 'software',
    title: 'Software Engineering',
    action: 'Build',
    description:
      'Design applications, services, and architectures that transform a business need into a maintainable and deployable software product.',
    capabilities: [
      'Application Architecture',
      'APIs & Services',
      'Web Applications',
      'Systems Integration',
      'Containerization',
      'Deployment',
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    action: 'Structure',
    description:
      'Build reliable data pipelines, from ingestion and transformation through storage, observability, and delivery.',
    capabilities: [
      'Data Pipelines',
      'Ingestion & Transformation',
      'Data Modeling',
      'SQL & NoSQL Databases',
      'Caching & Performance',
      'Monitoring & Observability',
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    action: 'Augment',
    description:
      'Integrate intelligent models and systems when they provide a measurable solution to a problem, then connect them to the rest of the system.',
    capabilities: [
      'Machine Learning',
      'Time Series',
      'RAG',
      'AI Agents',
      'Computer Vision',
      'Evaluation & Experimentation',
    ],
  },
] as const

const activeId = ref<ExpertiseId>('software')

const activeExpertise = computed(
  () =>
    expertises.find(
      expertise => expertise.id === activeId.value
    ) ?? expertises[0]
)
</script>

<template>
  <section
    id="expertise"
    aria-labelledby="about-expertise-title"
    class="relative isolate overflow-hidden px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
  > 
      
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_50%_45%,hsl(var(--primary)/0.05),transparent_38%)]
      "
    />

    <div class="mx-auto max-w-7xl">
        
      <header class="max-w-3xl">
        <h2
          id="about-expertise-title"
          class="
            text-[clamp(2.6rem,5.5vw,5rem)]
            font-semibold
            leading-[1.02]
            tracking-[-0.055em]
            text-foreground
          "
        >
          Three disciplines.

          <span class="block text-muted-foreground">
            One system.
          </span>
        </h2>

        <p
          class="
            mt-7 max-w-2xl
            text-base leading-8
            text-muted-foreground
            sm:text-lg
          "
        >
          Xiani combines Software Engineering, Data Engineering,
          and Artificial Intelligence to address multiple layers
          of a single system, from its architecture to the
          utilization of its data.
        </p>
      </header>

      
      <div
        class="
          mt-16 grid gap-12
          lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]
          lg:gap-20
        "
      >
          
        <div
          class="
            divide-y divide-border/70
            border-y border-border/70
          "
        >
          <button
            v-for="item in expertises"
            :key="item.id"
            type="button"
            :aria-pressed="activeId === item.id"
            class="
              group flex w-full
              cursor-pointer
              items-center gap-5
              py-7 text-left
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-primary
              lg:py-9
            "
            @click="activeId = item.id"
          >
            <span
              class="
                flex-1
                text-xl font-medium
                transition-colors duration-200
                sm:text-2xl
                motion-reduce:transition-none
              "
              :class="
                activeId === item.id
                  ? 'text-primary'
                  : 'text-foreground group-hover:text-primary'
              "
            >
              {{ item.title }}
            </span>

            <span
              class="
                hidden
                text-xs font-semibold
                uppercase
                tracking-[0.14em]
                text-muted-foreground
                sm:block
              "
            >
              {{ item.action }}
            </span>
          </button>
        </div>

        
        <article
          class="
            place-self-start
            bg-surface/40
            p-7
            sm:p-9
            lg:p-10
          "
        >
          <p
            class="
              text-xs font-semibold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            {{ activeExpertise.action }}
          </p>

          <h3
            class="
              mt-3
              text-2xl font-semibold
              tracking-[-0.03em]
              text-foreground
              sm:text-3xl
            "
          >
            {{ activeExpertise.title }}
          </h3>

          <p
            class="
              mt-5 max-w-2xl
              leading-8
              text-muted-foreground
            "
          >
            {{ activeExpertise.description }}
          </p>

          <ul
            class="
              mt-8 grid
              gap-x-8 gap-y-4
              border-t border-border/70
              pt-7
              sm:grid-cols-2
            "
          >
            <li
              v-for="capability in activeExpertise.capabilities"
              :key="capability"
              class="
                flex items-center gap-3
                text-sm
                text-foreground/80
              "
            >
              <span
                aria-hidden="true"
                class="
                  h-1.5 w-1.5
                  shrink-0 rounded-full
                  bg-primary
                "
              />

              {{ capability }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section> 
</template> 

  -->

<script setup lang="ts">
type ExpertiseId = 'software' | 'data' | 'ai'

interface Expertise {
  id: ExpertiseId
  title: string
  action: string
  description: string
  capabilities: readonly string[]
}

const expertises: readonly Expertise[] = [
  {
    id: 'software',
    title: 'Software Engineering',
    action: 'Build',
    description:
      'Design applications, services and architectures that transform a business need into a maintainable and deployable software product.',
    capabilities: [
      'Application Architecture',
      'APIs & Services',
      'Web Applications',
      'Systems Integration',
      'Containerization',
      'Deployment',
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    action: 'Structure',
    description:
      'Build reliable data pipelines, from ingestion and transformation through storage, observability and delivery.',
    capabilities: [
      'Data Pipelines',
      'Ingestion & Transformation',
      'Data Modeling',
      'SQL & NoSQL Databases',
      'Caching & Performance',
      'Monitoring & Observability',
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    action: 'Augment',
    description:
      'Integrate intelligent models and systems when they provide a measurable solution to a problem, then connect them to the rest of the system.',
    capabilities: [
      'Machine Learning',
      'Time Series',
      'RAG',
      'AI Agents',
      'Computer Vision',
      'Evaluation & Experimentation',
    ],
  },
] as const

const activeId = ref<ExpertiseId>('software')

const activeExpertise = computed(
  () =>
    expertises.find(item => item.id === activeId.value) ??
    expertises[0],
)

function selectExpertise(id: ExpertiseId) {
  activeId.value = id
}

function handleKeydown(event: KeyboardEvent, index: number) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
    return
  }

  event.preventDefault()

  let nextIndex = index

  if (event.key === 'ArrowDown') {
    nextIndex = (index + 1) % expertises.length
  }

  if (event.key === 'ArrowUp') {
    nextIndex = (index - 1 + expertises.length) % expertises.length
  }

  if (event.key === 'Home') {
    nextIndex = 0
  }

  if (event.key === 'End') {
    nextIndex = expertises.length - 1
  }

  activeId.value = expertises[nextIndex].id

  nextTick(() => {
    document
      .getElementById(`expertise-tab-${activeId.value}`)
      ?.focus()
  })
}
</script>

<template>
  <section
    id="expertise"
    aria-labelledby="about-expertise-title"
    class="
      relative isolate overflow-hidden
      px-5 py-24
      sm:px-6
      lg:px-8 lg:py-32
    "
  >
    <!-- Decorative glow -->
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute left-1/2 top-1/2 -z-10
        h-[34rem] w-[34rem]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-primary/[0.045]
        blur-[110px]
        dark:bg-primary/[0.065]
      "
    />

    <div class="mx-auto max-w-7xl">
      <header class="max-w-3xl">
        <h2
          id="about-expertise-title"
          class="
            text-[clamp(2.6rem,5.5vw,5rem)]
            font-semibold
            leading-[1.02]
            tracking-[-0.055em]
            text-text
          "
        >
          Three disciplines.

          <span class="block text-muted">
            One system.
          </span>
        </h2>

        <p
          class="
            mt-7 max-w-2xl
            text-base leading-8 text-muted
            sm:text-lg
          "
        >
          Xiani combines software engineering, data engineering
          and artificial intelligence to address multiple layers
          of a single system, from its architecture to the
          utilization of its data.
        </p>
      </header>

      <div
        class="
          mt-16 grid gap-12
          lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]
          lg:gap-20
        "
      >
        <!-- Expertise navigation -->
        <div
          role="tablist"
          aria-label="Engineering disciplines"
          aria-orientation="vertical"
          class="
            divide-y divide-black/[0.08]
            border-y border-black/[0.08]
            dark:divide-white/[0.10]
            dark:border-white/[0.10]
          "
        >
          <button
            v-for="(item, index) in expertises"
            :id="`expertise-tab-${item.id}`"
            :key="item.id"
            type="button"
            role="tab"
            :aria-selected="activeId === item.id"
            :aria-controls="`expertise-panel-${item.id}`"
            :tabindex="activeId === item.id ? 0 : -1"
            class="
              group flex w-full
              cursor-pointer items-center gap-5
              py-7 text-left
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-primary
              lg:py-9
            "
            @click="selectExpertise(item.id)"
            @keydown="handleKeydown($event, index)"
          >
            <span
              class="
                flex-1
                text-xl font-medium
                transition-colors duration-200
                sm:text-2xl
                motion-reduce:transition-none
              "
              :class="
                activeId === item.id
                  ? 'text-primary'
                  : 'text-text group-hover:text-primary'
              "
            >
              {{ item.title }}
            </span>

            <span
              class="
                hidden
                text-xs font-semibold uppercase
                tracking-[0.14em]
                text-muted
                sm:block
              "
            >
              {{ item.action }}
            </span>
          </button>
        </div>

        <!-- Active expertise -->
        <article
          :id="`expertise-panel-${activeExpertise.id}`"
          role="tabpanel"
          :aria-labelledby="`expertise-tab-${activeExpertise.id}`"
          class="
            place-self-start
            border border-black/[0.06]
            bg-black/[0.015]
            p-7
            sm:p-9
            lg:p-10
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
          "
        >
          <p
            class="
              text-xs font-semibold uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            {{ activeExpertise.action }}
          </p>

          <h3
            class="
              mt-3
              text-2xl font-semibold
              tracking-[-0.03em]
              text-text
              sm:text-3xl
            "
          >
            {{ activeExpertise.title }}
          </h3>

          <p class="mt-5 max-w-2xl leading-8 text-muted">
            {{ activeExpertise.description }}
          </p>

          <ul
            class="
              mt-8 grid gap-x-8 gap-y-4
              border-t border-black/[0.08]
              pt-7
              sm:grid-cols-2
              dark:border-white/[0.10]
            "
          >
            <li
              v-for="capability in activeExpertise.capabilities"
              :key="capability"
              class="
                flex items-center gap-3
                text-sm text-text/80
              "
            >
              <span
                aria-hidden="true"
                class="
                  h-1.5 w-1.5
                  shrink-0 rounded-full
                  bg-primary
                "
              />

              {{ capability }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
