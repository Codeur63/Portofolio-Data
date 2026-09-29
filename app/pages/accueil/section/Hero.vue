<script setup lang="ts">
import TypeWriter from "@/utils/TypeWriter.vue";

const colorMode = useColorMode();
</script>

<template>
    <section
        class="relative pt-0 xl:pt-10 isolate h-screen w-full overflow-hidden bg-background"
    >
        <!-- IMAGES HERO avec lazy loading -->
        <img
            src="/images/hero/hero-light.png"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 -z-20 h-full w-full object-cover object-center dark:hidden"
            loading="lazy"
        />

        <img
            src="/images/hero/hero-dark.png"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 -z-20 hidden h-full w-full object-cover object-center dark:block"
            loading="lazy"
        />

        <!-- Overlays  -->
        <div
            class="absolute inset-0 -z-10 bg-gradient-to-r from-white/80 via-white/60 to-white/20 dark:from-[#100A18]/80 dark:via-[#100A18]/50 dark:to-[#100A18]/10 "
        />

        <div
            class="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-background via-background/50 to-transparent"
        />

        <!-- Contenu principal -->
        <div
            class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center"
        >
            <div class="w-full max-w-4xl">
                <!-- Titre principal avec gradient multi-couleurs -->
                <div class="space-y-6 text-center">
                    <h1
                        class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
                    >
                        Piloter votre croissance
                        <span class="bg-clip-text bg-gradient-to-r
                       from-primary to-accent dark:from-accent dark:to-secondary dark:text-transparent">Digitale</span>
                    </h1>

                    <!-- Sous-titre avec TypeWriter -->
                    <div class="max-w-3xl mx-auto space-y-3">
                        <p
                            class="text-base sm:text-lg lg:text-xl text-muted leading-relaxed"
                        >
                            <TypeWriter /> 
                            , je conçois des solutions
                            intelligentes qui transforment vos défis en
                            opportunités de croissance. De la collecte des données au déploiement de l'interface utilisateur pour une transformation réelle.
                        </p>
                    </div>
                </div>

                <!-- CTA avec dual action -->
                <div
                    class="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                >
                    <NuxtLink
                        to="/projects"
                        class="inline-flex text-base items-center justify-center gap-2 rounded-lg font-bold dark:text-white text-text px-8 py-4 border border-border hover:bg-text hover:text-white dark:hover:bg-background shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-1 active:translate-y-0 group"
                    >
                        <span>Discutons de votre projet</span>
                        
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes gradient {
    0%,
    100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Smooth transitions */
button,
a {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optimisation des images */
img {
    content-visibility: auto;
}

/* Focus states pour accessibilité */
a:focus-visible,
button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}
</style>
