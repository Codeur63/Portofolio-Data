<template>
    <section
        class="relative isolate isolate px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:min-h-screen"
    >
        <div
            class="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:48px_48px]"
        />

        <!-- Halo violet -->

        <div
            class="pointer-events-none absolute right-10 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
        />
        <div
            class="pointer-events-none absolute -left-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
        />
        <div
            class="pointer-events-none absolute -left-40 bottom-20 -z-10 h-[360px] w-[360px] rounded-full bg-data/10 blur-[120px] "
        />

        <div class="relative max-w-7xl mx-auto z-10 flex items-center flex-col  gap-6 xl:items-center xl:justify-between">
            <!-- Titre et Paragraphe parfaitement centrés -->
            <div class="mx-auto max-w-2xl text-left ">
                <h2
                    class="text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[4rem]"
                >
                    J'implémente des systèmes <span class="text-secondary">Intelligents</span>
                </h2>
                <p
                    class="mt-6 sm:text-base leading-7 text-muted sm:text-lg sm:leading-8 my-6 text-sm text-justify "
                >
                    Je transforme l’intelligence artificielle en solutions concrètes capables d’analyser, comprendre et agir. De la Computer Vision au Deep Learning, en passant par les LLM, le RAG et les agents autonomes, je conçois des systèmes intelligents adaptés aux besoins réels.
                </p>
            </div>
    
            <!-- 2. Section Images : Grille 2x2 sur Mobile, Accordéon animé sur Bureau -->
            <div class="w-full">
                <!--
            - grid grid-cols-2 : Grille 2x2 sur mobile sans animation.
            - lg:flex : Passe en mode Flexbox sur grand écran pour activer l'accordéon.
        -->
                <div
                    class="grid grid-cols-2 gap-4 h-[400px] sm:h-[500px] hover:cursor-pointer lg:flex lg:gap-3 overflow-hidden rounded-2xl sm:rounded-3xl"
                >
                    <!-- Image 1 -->
                    <div
                        class="relative group overflow-hidden shadow-xl bg-surface/95 w-full h-full lg:flex-1 h-[500px] lg:transition-all xl:shadow-none lg:duration-500 lg:ease-out lg:hover:flex-[3]"
                    >
                        <img
                            src="/images/skills/skill-yolo.png"
                            alt="Analyse Prédictive IA"
                            class="block sm:hidden xl:block w-full h-full object-cover group-hover:object-contain transition-all duration-500 group-hover:scale-105"
                        />
                        <img
                            src="/images/skills/skill-yolo-2.png"
                            alt="Analyse Prédictive IA"
                            class="block xl:hidden w-full h-full object-cover group-hover:object-contain transition-all duration-500 group-hover:scale-105"
                        />
                        <!-- Overlay de texte optionnel lors du survol -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                        >
                            <h3 class="text-white font-bold text-lg">
                                Computer Vision
                            </h3>
                            <p class="text-white/80 text-xs mt-1">
                                Détection d'objets en temps réel
                            </p>
                        </div>
                    </div>
    
                    <!-- Image 2 -->
                    <div
                        class="relative group overflow-hidden w-full h-full shadow-xl bg-surface/95 xl:shadow-none lg:flex-1 lg:transition-all lg:duration-500 lg:ease-out lg:hover:flex-[3]"
                    >
                        <img
                            src="/images/skills/skill-fine-tuning.png"
                            alt="Fine-tuning"
                            class="w-full h-full object-cover group-hover:object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 xl:shadow-none group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                        >
                            <h3 class="text-white font-bold text-lg">NLP & LLM</h3>
                            <p class="text-white/80 text-xs mt-1">
                                Fine-tuning de modèles de langage
                            </p>
                        </div>
                    </div>
    
                    <!-- Image 3 -->
                    <div
                        class="relative group overflow-hidden w-full h-full shadow-xl xl:shadow-none bg-surface lg:flex-1 lg:transition-all lg:duration-500 lg:ease-out lg:hover:flex-[3]"
                    >
                        <img
                            src="/images/skills/skill-rag-2.png"
                            alt="Analyse Prédictive IA"
                            class="hidden sm:hidden xl:block w-full h-full object-cover group-hover:object-contain transition-all duration-500 group-hover:scale-105"
                        />
                        <img
                            src="/images/skills/skill-rag.png"
                            alt="Analyse Prédictive IA"
                            class="block xl:hidden w-full h-full object-cover group-hover:object-contain transition-all duration-500 group-hover:scale-105"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                        >
                            <h3 class="text-white font-bold text-lg">RAG</h3>
                            <p class="text-white/80 text-xs mt-1">
                                Retrieval Augmented Generation
                            </p>
                        </div>
                    </div>
    
                    <!-- Image 4 -->
                    <div
                        class="relative shadow-xl bg-surface/80 xl:shadow-none group overflow-hidden w-full h-full lg:flex-1 lg:transition-all lg:duration-500 lg:ease-out lg:hover:flex-[3]"
                    >
                        <img
                            src="/images/skills/skill-agent.png"
                            alt="Générative AI"
                            class="w-full h-full object-cover group-hover:object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                        >
                            <h3 class="text-white font-bold text-lg">
                                IA Générative
                            </h3>
                            <p class="text-white/80 text-xs mt-1">
                                Création d'agents autonomes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
</template>

<script setup lang="ts">
// Aucun code JavaScript/GSAP requis, tout passe par les classes Tailwind !
</script>
