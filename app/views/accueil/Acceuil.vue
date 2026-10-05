<script setup lang="ts">
import Hero from './sections/Hero.vue'
import TechStack from './sections/TechStack.vue'
import PolyvalenceSection from './sections/PolyvalenceSection.vue'
import WebSection from './sections/WebSection.vue'
import DataSection from './sections/DataSection.vue'
import IASection from './sections/IASection.vue'
import AboutSection from './sections/AboutSection.vue'
import SolutionSection from './sections/SolutionSection.vue'
import WorkSection from './sections/WorkSection.vue'
import ContactSection from './sections/ContactSection.vue'
</script>

<template>
  <div>
    <Hero />

    <TechStack />
    <PolyvalenceSection />
    <WebSection />
    <DataSection />
    <IASection />
    <AboutSection />
    <SolutionSection />

    <ScrollReveal direction="right">
      <WorkSection />
    </ScrollReveal>

    <ContactSection />
  </div>
</template>