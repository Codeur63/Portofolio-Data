<script setup>
const colorMode = useColorMode()

const heroImage = computed(() =>
  colorMode.value === 'dark'
    ? '/images/about/about-2.png'
    : '/images/about/about-1.png'
)

</script>

<template>
  <section
    id="about-intro"
    aria-labelledby="about-hero-title"
    class="
    mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28
    "
  >
    <!-- Decorative glow -->
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute -right-40 top-8 -z-10
        h-[32rem] w-[32rem]
        rounded-full
        bg-primary/[0.07]
        blur-[110px]

        dark:bg-primary/[0.10]
      "
    />

    <div
      class="
        mx-auto grid max-w-7xl
        items-center gap-14

        lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.75fr)]
        lg:gap-20
      "
    >
      <!-- Content -->
      <div>
        <h1
          id="about-hero-title"
          class="
            max-w-3xl
            text-[clamp(2.8rem,6.2vw,6.2rem)]
            font-semibold
            leading-[1.02]
            tracking-[-0.055em]
            text-text
          "
        >
          We build bespoke
            <span class="mt-1 block bg-gradient-to-r from-primary
                via-violet-500 to-accent
                bg-clip-text text-transparent">
                Systems
            </span>
        </h1>

        <p
          class="
            mt-7 max-w-xl
            text-base leading-7 sm:leading-8
            text-muted
            sm:text-lg
          "
        >
          Xiani brings together software architecture, data engineering
          and artificial intelligence to design coherent, reliable and
          measurable systems.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-4 ">
          <NuxtLink
            to="/journal"
            class=" group
              inline-flex min-h-12
              items-center gap-2
              border-b border-current/40
              text-sm font-semibold
              text-text
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5

              transition-colors duration-200

              hover:border-primary
              
              focus-visible:outline-offset-4
              focus-visible:outline-primary

              motion-reduce:transform-none
              motion-reduce:transition-none
              
            "
          >
            Explore our work

            <span aria-hidden="true" class="
                
                ">
              ↗
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Portrait -->
      <div
        class="
          relative mx-auto
          hidden w-full max-w-[490px]

          lg:block
        "
      >
        <div
          aria-hidden="true"
          class="
            absolute -inset-7
            rounded-[2.5rem]
            border border-primary/10
          "
        />

        <div
          class="
            relative
            aspect-[4/5]
            overflow-hidden
            rounded-[2rem]
            border border-black/[0.08]
            bg-background

            dark:border-white/[0.10]
          "
        >
            <NuxtImg
              :src="heroImage"
              alt="Avatar Xiani"
              aria-hidden="true"              
              width="800"
              height="1000"
              sizes="490px"
              format="webp"
              quality="85"
              loading="eager"
              fetchpriority="high"
              decoding="async"              
              class="h-full block w-full object-cover object-top"
            />

          <div
            aria-hidden="true"
            class="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-1/4
              bg-gradient-to-t
              from-black/20 to-transparent
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>