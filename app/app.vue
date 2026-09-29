<script setup lang="ts">
import Navbar from './layout/navbar/Navbar.vue';
import Footer from './layout/footer/Footer.vue';
import Hero from './pages/accueil/section/Hero.vue';
</script>

<template>
  <div class="relative bg-background text-foreground">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
     <div class="absolute inset-0">
      <Navbar />         
    </div> 
     <Hero />
     <main class="px-4 py-8 sm:px-6 lg:px-8">
        <NuxtPage/>
    </main>
    <Footer/>
  </div>
</template>
