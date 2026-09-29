<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook('page:start', () => {
  loading.value = true;
});

nuxtApp.hook('page:finish', () => {
  loading.value = false;
});

</script>
   
<template>
    <Transition name="fade">
        <div v-if="loading" class="fixed inset-0 z-20 flex flex-col items-center justify-center">
            <UIcon name="i-heroicon-arrow-right" class="h-12 w-12 animate-spin text-primary-500"/>            
        </div>        
    </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>