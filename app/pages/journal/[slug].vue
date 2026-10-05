 <script setup lang="ts">
 import { journalEntries } from '@/data/journal'
 
 import JournalEntryContent from '@/views/journal/sections/JournalEntryContent.vue'
 import ProjectResult from '@/views/journal/sections/ProjectResult.vue'
 
 const route = useRoute()
 
 const entry = computed(() =>
   journalEntries.find(
     item => item.slug === route.params.slug,
   ),
 )
 
 if (!entry.value) {
   throw createError({
     statusCode: 404,
     statusMessage: 'Journal entry not found',
   })
 }
 
 useSeoMeta({
   title: () => entry.value?.title ?? 'Journal',
 
   description: () =>
     entry.value?.excerpt ?? '',
 
   ogTitle: () =>
     entry.value?.title ?? 'Journal',
 
   ogDescription: () =>
     entry.value?.excerpt ?? '',
 
   ogType: 'article',
 
   ogImage: () =>
     entry.value?.image ?? undefined,
 
   twitterCard: 'summary_large_image',
 })
 
 useHead({
   meta: [
     {
       property: 'article:published_time',
       content: entry.value.date,
     },
   ],
 })
 </script>
 
 <template>
   <article v-if="entry">
     <!-- Header -->
     <header
       class="px-5 pb-16 pt-24
              sm:px-6 sm:pb-20 sm:pt-28
              lg:px-8 lg:pt-32"
     >
       <div class="mx-auto max-w-5xl">
         <NuxtLink
           to="/journal"
           class="inline-flex items-center gap-2
                  text-xs font-medium text-muted
                  transition-colors hover:text-primary
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-primary"
         >
           <span aria-hidden="true">
             ←
           </span>
 
           Journal
         </NuxtLink>
 
         <div
           class="mt-12 flex flex-wrap
                  items-center gap-2
                  text-[10px]"
         >
           <span
             class="font-semibold uppercase
                    tracking-[0.15em]
                    text-primary"
           >
             {{ entry.category }}
           </span>
 
           <span
             aria-hidden="true"
             class="text-muted"
           >
             ·
           </span>
 
           <span
             class="uppercase
                    tracking-[0.15em]
                    text-muted"
           >
             {{ entry.type }}
           </span>
 
           <template v-if="entry.readingTime">
             <span
               aria-hidden="true"
               class="text-muted"
             >
               ·
             </span>
 
             <span class="text-muted">
               {{ entry.readingTime }}
             </span>
           </template>
         </div>
 
         <h1
           class="mt-6 max-w-4xl
                  text-[clamp(3rem,7vw,6rem)]
                  font-semibold leading-[0.95]
                  tracking-[-0.06em]
                  text-text"
         >
           {{ entry.title }}
         </h1>
 
         <p
           class="mt-7 max-w-2xl
                  text-base leading-7 text-muted
                  sm:text-lg sm:leading-8"
         >
           {{ entry.excerpt }}
         </p>
 
         <div class="mt-8 flex flex-wrap gap-2">
           <span
             v-for="tag in entry.tags"
             :key="tag"
             class="rounded-full
                    border border-text/10
                    px-3 py-1.5
                    text-[10px] text-muted"
           >
             {{ tag }}
           </span>
         </div>
 
         <div
           v-if="entry.image"
           class="mt-12 overflow-hidden
                  rounded-3xl
                  border border-text/10"
         >
           <NuxtImg
             :src="entry.image"
             :alt="entry.imageAlt || ''"
             width="1200"
             height="675"
             format="webp"
             quality="75"
             loading="eager"
             fetchpriority="high"
             sizes="100vw lg:1200px"
             class="aspect-video
                    w-full object-cover"
           />
         </div>
       </div>
     </header>
 
     <!-- Project result -->
     <ProjectResult
       v-if="entry.type === 'project'"
       :entry="entry"
     />
 
     <!-- Article / project body -->
     <JournalEntryContent
       :entry="entry"
     />
 
     <!-- End CTA -->
     <footer
       class="border-t border-text/10
              px-5 py-20
              sm:px-6 lg:px-8"
     >
       <div
         class="mx-auto flex max-w-5xl
                flex-col gap-6
                sm:flex-row sm:items-center
                sm:justify-between"
       >
         <div>
           <p
             class="text-[10px] font-semibold
                    uppercase tracking-[0.18em]
                    text-muted"
           >
             Keep exploring
           </p>
 
           <p
             class="mt-2 text-xl font-semibold
                    tracking-[-0.025em]
                    text-text"
           >
             More projects and engineering notes.
           </p>
         </div>
 
         <NuxtLink
           to="/journal"
           class="group inline-flex items-center
                  gap-2 text-sm font-semibold
                  text-text transition-colors
                  hover:text-primary"
         >
           Explore the journal
 
           <span
             aria-hidden="true"
             class="transition-transform
                    group-hover:translate-x-1
                    motion-reduce:transform-none"
           >
             →
           </span>
         </NuxtLink>
       </div>
     </footer>
   </article>
 </template> 