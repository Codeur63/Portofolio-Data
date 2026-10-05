<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <div class="text-text bg-background min-h-screen">
        <Navbar />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>
