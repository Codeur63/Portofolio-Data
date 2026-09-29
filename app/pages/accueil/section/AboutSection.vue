<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const activeIndex = ref(0)

const textItems = [
  {
    number: '01',
    title: 'Data Analytics',
    text: `Je transforme vos données en informations directement exploitables.
    L’objectif : rendre vos indicateurs plus lisibles, révéler les tendances importantes
    et donner aux équipes les éléments nécessaires pour prendre de meilleures décisions.`,
    image: '/images/about/data-analytics.png'
  },
  {
    number: '02',
    title: 'Data Engineering',
    text: `Je construis des pipelines de données fiables capables de collecter, transformer
    et organiser des volumes importants d’informations. Une donnée bien structurée devient
    alors une véritable fondation pour vos applications et vos décisions métier.`,
    image: '/images/about/data-engineering.png'

  },
  {
    number: '03',
    title: 'Data Platforms',
    text: `Je conçois des architectures permettant de centraliser, exploiter et faire circuler
    les données de manière cohérente. L’objectif est de construire un socle évolutif capable
    d’accompagner la croissance des besoins analytiques et technologiques de l’entreprise.`,
    image: '/images/about/data-platform.png'

  },
  {
    number: '04',
    title: 'Machine Learning',
    text: `Je transforme les données historiques en modèles capables d’identifier des tendances,
    de détecter des anomalies ou de produire des prédictions. L’intelligence devient ainsi
    un outil intégré aux processus métier plutôt qu'une simple expérimentation technique.`,
    image: '/images/about/data-mlflow.png'
  },
  {
    number: '05',
    title: 'IA Générative',
    text: `J’intègre les modèles de langage, la RAG et les agents intelligents dans des usages
    concrets : recherche d’information, automatisation, génération de contenu ou assistance
    métier. L’objectif est de faire de l’IA un véritable levier de productivité.`
  },
  {
    number: '06',
    title: 'Computer Vision',
    text: `Je développe des systèmes capables d’analyser automatiquement des images et des flux
    vidéo pour détecter, compter, classifier ou surveiller des éléments. Une manière de donner
    aux applications une capacité de perception adaptée aux besoins du terrain.`
  }
]

const textContainer = ref<HTMLElement | null>(null)
const currentText = ref<HTMLElement | null>(null)

const images = [
  '/images/skills/skill-data.png',
  '/images/skills/skill-data-mlflow.png',
  '/images/skills/skill-data-graphana.png',
  '/images/skills/skill-yolo.png'
]

let interval: ReturnType<typeof setInterval> | null = null

const changeText = () => {
  if (!currentText.value) return

  const nextIndex = (activeIndex.value + 1) % textItems.length

  gsap.to(currentText.value, {
    opacity: 0,
    y: -18,
    duration: 0.45,
    ease: 'power2.in',
    onComplete: () => {
      activeIndex.value = nextIndex

      gsap.fromTo(
        currentText.value,
        {
          opacity: 0,
          y: 18
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        }
      )
    }
  })
}

onMounted(() => {
  interval = setInterval(changeText, 5500)

  if (currentText.value) {
    gsap.fromTo(
      currentText.value,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    )
  }
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
    <section
        class="relative isolate px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:min-h-screen"
    >
        <div
            class="pointer-events-none absolute inset-0 opacity-[0.25] dark:opacity-[0.15] [background-image:radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div  class="relative max-w-7xl mx-auto z-10 flex items-center flex-col xl:items-center xl:justify-between xl:gap-10"">
            <div class="mb-6">
                <h2
                    class="text-left text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[4rem]"
                >
                    A Propos
                </h2>
            </div>
           <div class="flex border border-border rounded-2xl w-full h-full px-4 py-6 relative">
            <div class="md:min-h-[700px] xl:min-h-[650px] w-full h-full relative flex flex-col lg:flex-row gap-6">
                <div class="self-start px-4 mb-6 md:mb-8 xl:mb-12 md:px-8 xl:px-12">
                    <div
                      class="
                        mt-4
                        flex
                        items-center
                        justify-center
                        gap-3
                      "
                    >
                      <span
                        v-for="(_, index) in textItems"
                        :key="index"
                        class="
                          h-1
                          rounded-full
                          transition-all
                          duration-500
                        "
                        :class="
                          activeIndex === index
                            ? 'w-3 h-3 bg-primary'
                            : 'w-2 h-2 bg-border'
                        "
                      />
                    </div>
                     <div ref="textContainer" class=" relative  overflow-hidden mt-10                               min-h-[250px]                                                                sm:min-h-[220px]
                              "
                            >
                              <div
                                ref="currentText"
                                class="relative"
                              >

                                <!-- Solution -->

                                <h3
                                  class="
                                    text-xl
                                    xl:text-3xl
                                    font-semibold
                                    tracking-tight
                                    text-foreground
                                    sm:text-2xl
                                  "
                                >
                                  {{ textItems[activeIndex].title }}
                                </h3>

                                <!-- Description -->

                                <p
                                  class="
                                    mx-auto
                                    mt-6
                                    text-sm
                                    leading-7
                                    text-muted
                                    sm:text-base
                                    sm:leading-8
                                  "
                                >
                                  {{ textItems[activeIndex].text }}
                                </p>
                                <div class=" mt-6 h-full overflow-hidden">
                                    <img :src="textItems[activeIndex].image" alt="Image Data analystics" class=" rounded-tr-4xl object-contain rounded-tl-4xl
                                    max-h-[300px]  w-full top-0 z-10 "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full relative hidden md:block ">
                <img src="/images/avatar/avatar-3-light.png" alt="" class="absolute dark:hidden h-full top-0 z-10 "/>
                <img src="/images/avatar/avatar-3-dark.png" alt="" class="absolute hidden w-full h-full object-contain dark:block top-0 z-10 "/>
            </div>
           </div>
        </div>
    </section>
</template>
