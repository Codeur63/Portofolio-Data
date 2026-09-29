<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const img1 = ref<HTMLElement | null>(null);
const img2 = ref<HTMLElement | null>(null);
const img3 = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(() => {
    const images = [img1.value, img2.value, img3.value].filter((img): img is HTMLElement => img !== null);

    if (!images.length) return;

    ctx = gsap.context(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(images, {
                xPercent: 0,
                opacity: 0,
            });
            gsap.set(images[0], {
                opacity: 1,
            });
            return;
        }

        // Configuration initiale : toutes les images cachées à gauche (-105%)
        gsap.set(images, {
            xPercent: -105,
            opacity: 0,
        });

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.5,
        });

        images.forEach((image) => {
            tl
                // 1. Entrée depuis la gauche vers le centre (0)
                .to(image, {
                    xPercent: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                })
                // 2. Temps d'affichage statique au centre
                .to(image, {
                    duration: 2.2,
                })
                // 3. Sortie vers la droite (105)
                .to(image, {
                    xPercent: 105,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.in",
                })
                // 4. Reset immédiat à gauche (-105) sans animation pour le prochain tour
                .set(image, {
                    xPercent: -105,
                });
        });
    });
});

onBeforeUnmount(() => {
    ctx?.revert();
});
</script>

<template>
    <section
        class="relative isolate px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:min-h-screen"
    >
        <div
            class="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:40px_40px]"
        />
        <div class="relative max-w-7xl mx-auto z-10 flex items-center flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-10"
        >
            <div
                class="relative z-30 flex w-full max-w-2xl flex-col items-start justify-between xl:w-[42%] xl:max-w-xl xl:items-start xl:text-left"
            >
                <h2
                    class="text-left text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[4rem]"
                >
                    Transformer les
                    <span class="text-accent"> données </span>
                    <br />
                    en décisions.
                </h2>
                <p
                    class="my-6 text-sm leading-7 text-muted sm:text-base sm:leading-8 max-w-xl text-justify"
                >
                    Je construis des pipelines de données, des systèmes
                    analytiques et des solutions de machine learning capables de
                    transformer des données brutes en informations exploitables.
                </p>

                <div
                    class="grid w-full max-w-2xl justify-between grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2"
                >
                    <!-- Analytics -->
                    <div
                        class="rounded-xl border border-border bg-surface/70 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-data/40"
                    >
                        <div
                            class="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-data/10 text-data"
                        >
                            <UIcon name="i-lucide-bar-chart-3" class="h-5 w-5" />
                        </div>
                        <p class="text-sm font-semibold text-foreground">Analytics</p>
                        <p class="mt-1 text-xs leading-5 text-muted">KPI & visualisation</p>
                    </div>

                    <!-- Data Engineering -->
                    <div
                        class="rounded-xl border border-border bg-surface/70 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                    >
                        <div
                            class="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                            <UIcon name="i-lucide-database" class="h-5 w-5" />
                        </div>
                        <p class="text-sm font-semibold text-foreground">Data Engineering</p>
                        <p class="mt-1 text-xs leading-5 text-muted">ETL & pipelines</p>
                    </div>

                    <!-- Machine Learning -->
                    <div
                        class="rounded-xl border border-border bg-surface/70 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                    >
                        <div
                            class="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"
                        >
                            <UIcon name="i-lucide-brain-circuit" class="h-5 w-5" />
                        </div>
                        <p class="text-sm font-semibold text-foreground">Machine Learning</p>
                        <p class="mt-1 text-xs leading-5 text-muted">Modèles & features</p>
                    </div>

                    <!-- MLOps -->
                    <div
                        class="rounded-xl border border-border bg-surface/70 p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-bordeaux/40"
                    >
                        <div
                            class="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-bordeaux/10 text-bordeaux"
                        >
                            <UIcon name="i-lucide-workflow" class="h-5 w-5" />
                        </div>
                        <p class="text-sm font-semibold text-foreground">MLOps</p>
                        <p class="mt-1 text-xs leading-5 text-muted">Deploy & monitor</p>
                    </div>
                </div>
            </div>

            <div class="absolute hidden xl:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/images/avatar/avatar-2-light.png" alt="Image d'avatar" class="block dark:hidden" />
                 <img src="/images/avatar/avatar-2-dark.png" alt="Image d'avatar" class="hidden dark:block" />
            </div>
            <!-- Arrière-plan lumineux -->
            <div
                class="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-data/10 blur-[100px] xl:left-[70%] xl:h-[600px] xl:w-[600px]"
            />

            <!-- Conteneur Mockup Faux Navigateur -->
            <div class="relative z-20 mx-auto w-full max-w-none xl:max-w-none overflow-hidden rounded-2xl border border-border/70 bg-surface shadow-[0_35px_100px_rgba(26,16,36,0.18)] sm:rounded-3xl xl:mx-0 xl:w-[51%] xl:max-w-none aspect-[4/3] flex flex-col"
            >
                <!-- BROWSER HEADER -->
                <div class="flex h-9 items-center justify-between border-b bg-accent border-border bg-surface/50 px-4 sm:h-10 shrink-0">
                    <div class="flex gap-1.5">
                        <span class="h-2.5 w-2.5 rounded-full bg-error/70" />
                        <span class="h-2.5 w-2.5 rounded-full bg-warning/70" />
                        <span class="h-2.5 w-2.5 rounded-full bg-success/70" />
                    </div>
                    <div class="rounded-full bg-background dark:bg-white px-4 py-1 text-[9px] text-muted sm:block">
                        data-platform / dashboard
                    </div>
                    <div class="h-2 w-8 rounded-full bg-border" />
                </div>

                <!-- ZONE SLIDER IMAGES IMAGÉES -->
                <div class="relative flex-1 w-full h-full overflow-hidden">
                    <div class="relative w-full h-full grid place-items-center">
                        <img
                            ref="img1"
                            src="/images/skills/skill-data.png"
                            alt="Dashboard Data Analytics"
                            class="absolute inset-0 w-full h-full object-cover "
                        />       
                        <img
                            ref="img2"
                            src="/images/skills/skill-data-mlflow.png"
                            alt="Image mlflow"
                            class="absolute inset-0 w-full h-full object-cover "
                        />
                        <img
                            ref="img3"
                            src="/images/skills/skill-data-grafana.png"
                            alt="Image grafana"
                            class="absolute inset-0 w-full h-full object-cover "
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Laissé vide exprès pour éviter les conflits et forcer la fermeture propre */
</style>
