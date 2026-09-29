<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

</script>
 
<template>
  <section
    class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:min-h-screen flex items-center "
  >
    <!-- Grille principale : 1 colonne sur mobile/tablette, 2 colonnes équilibrées sur grand écran -->
    <div class="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center w-full">
     
      <div class="flex flex-col max-w-2xl xl:max-w-none mx-auto xl:mx-0 w-full">
        <div class="relative">
          <h2
            class="text-left text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[4rem]"
          >
            Des applications web
            <br />
            et mobiles
            <span
              class="bg-primary bg-clip-text  text-transparent tracking-wide"
            >
              au besoin
            </span>
          </h2>
          
          <p
            class="my-6 text-sm leading-7 text-muted sm:text-base sm:leading-8 max-w-xl text-justify"
          >
            Je conçois des interfaces modernes, rapides et intuitives, intégrant des 
            architectures robustes et scalables pour répondre aux besoins réels des utilisateurs.
          </p>
        </div>

        <!-- Illustration du site web/mobile avec effet de profondeur -->
        <div class="relative w-full rounded-tr-4xl rounded-tl-4xl bg-surface/50 shadow-lg overflow-hidden group">
          <img 
            src="/images/skills/skill-web.png" 
            alt="Image de site Web et Mobile" 
            class="w-full h-[250px] sm:h-[320px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" 
          />
        </div>
      </div>

      <ScrollReveal>
        <div class="hidden xl:flex relative items-center justify-center w-full h-[600px] justify-self-center">
            
            <!-- Halos lumineux d'arrière-plan (Glow effect derrière la figurine) -->
            <div class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
            <div class="pointer-events-none absolute right-4 bottom-10 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[80px]" />
    
            <!-- Socle discret à la base de la figurine (Optionnel, renforce l'effet statuette) -->
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-gradient-to-r from-transparent via-foreground/10 to-transparent blur-sm dark:via-foreground/5" />
    
            <!-- Conteneur de la Figurine Avatar -->
            <div class="relative w-full h-full overflow-visible flex items-center justify-center">
            
            <!-- Avatar Figurines (Mode Clair) -->
            <img
                src="/images/avatar/avatar-1-light.png"
                alt="Avatar Site"
                class="w-auto h-full max-h-[1000px] object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] dark:hidden transition-transform duration-500 hover:scale-[1.03]"
            />
            
            <!-- Avatar Figurines (Mode Sombre) -->
            <img
                src="/images/avatar/avatar-1-dark.png"
                alt="Avatar Site"
                class="w-auto h-full max-h-[1000px] object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] hidden dark:block transition-transform duration-500 hover:scale-[1.03]"
            />
            </div>
        </div>        
      </ScrollReveal>
      

    </div>
  </section>
</template>
