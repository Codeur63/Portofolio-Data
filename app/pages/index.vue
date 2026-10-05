<script setup lang="ts">
import Acceuil from "@/views/accueil/Acceuil.vue";

useSeoMeta({
  title: 'Software, Data & AI Engineering',
  description:
    'Xiani designs and builds software, data engineering and artificial intelligence systems for modern digital products.',
  ogTitle: 'Xiani — Software, Data & AI Engineering',
  ogDescription:
    'Engineering software, data and artificial intelligence systems designed for real-world applications.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: '/',
    },
  ],
})

</script> 


<template>
    <div>
        <Acceuil/>
    </div>
</template> 