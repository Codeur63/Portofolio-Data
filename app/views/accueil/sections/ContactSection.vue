<script setup lang="ts">

const colormode = useColorMode()

const contactImage = colormode.value === 'dark'
  ? '/images/contact/avatar-3-dark.png'
  : '/images/contact/avatar-3-light.png'


</script>
<template>
  <section
    class="relative border-b border-border isolate overflow-hidden px-5 py-24
           sm:px-6 sm:py-28 lg:px-8 xl:py-32"
    aria-labelledby="contact-cta-title"
  >
      <!-- Decorative background -->
      <div
        aria-hidden="true"
        class="
          pointer-events-none
          absolute inset-0 -z-10
          bg-gradient-to-br
          from-primary/[0.07]
          via-transparent
          to-secondary[1]
  
          dark:from-primary/[0.09]
          dark:to-secondary/[0.07]
        "
      />

      
    <!-- Background glow -->
    <div
      class="pointer-events-none absolute right-[-12%] top-1/2 -z-10
             h-[650px] w-[650px] -translate-y-1/2
             rounded-full bg-primary/[0.08] blur-[160px]"
      aria-hidden="true"
    />

    <div
      class="mx-auto grid max-w-7xl items-center gap-14
             lg:grid-cols-[1.1fr_.9fr] lg:gap-20"
    >
      <!-- Content -->
      <div class="max-w-3xl">
        <p
          class="text-[10px] font-semibold uppercase
                 tracking-[0.2em] text-muted"
        >
          Start a conversation
        </p>

        <h2
          id="contact-cta-title"
          class="mt-5 text-[clamp(2.8rem,6vw,5.5rem)]
                 font-semibold leading-[0.97]
                 tracking-[-0.055em] text-text"
        >
          Have an idea,

          <span
            class="block bg-gradient-to-r
                   from-primary via-violet-500 to-accent
                   bg-clip-text text-transparent"
          >
            a problem to solve?
          </span>
        </h2>

        <p
          class="mt-7 max-w-xl text-base leading-7 text-muted
                 sm:text-lg sm:leading-8"
        >
          Whether it involves software, data or artificial
          intelligence, let’s discuss the problem and determine
          the right technical approach.
        </p>

        <NuxtLink
          to="/contact"
          class="group mt-9 inline-flex min-h-12
                 items-center gap-3  border-b border-border border-primary px-6 hover:text-primary
                 text-sm font-semibold 
                 transition-transform duration-300
                 hover:-translate-y-0.5
                 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-primary
                 motion-reduce:transform-none"
        >
          Start a conversation

          <span
            aria-hidden="true"
            class="transition-transform duration-300
                   group-hover:translate-x-1
                   motion-reduce:transform-none"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <!-- Visual -->
      <div
        class="relative mx-auto hidden h-[520px]
               w-full max-w-[440px]
               items-end justify-center md:flex"
        aria-hidden="true"
      >
        <span
          class="pointer-events-none absolute left-1/2 top-[15%]
                 -z-10 -translate-x-1/2
                 select-none whitespace-nowrap
                 text-[6rem] font-bold tracking-[-0.08em]
                 text-text/[0.025]"
        >
          TALK
        </span>

        <div
          class="pointer-events-none absolute left-1/2 top-1/2
                 -z-10 h-[380px] w-[380px]
                 -translate-x-1/2 -translate-y-1/2
                 rounded-full bg-primary/[0.10] blur-[100px]"
        />

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            :srcset="contactImage"
          />

          <img
            :src="contactImage"
            alt=""
            width="440"
            height="550"
            loading="lazy"
            decoding="async"
            class="max-h-[520px] w-auto object-contain object-bottom"
          />
        </picture>
      </div>
    </div>
  </section>
</template>