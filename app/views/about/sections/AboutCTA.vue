<!-- <template>
  <section
    aria-labelledby="about-cta-title"
    class="
      relative isolate overflow-hidden
      border-t border-border/60
      px-5 py-24
      sm:px-6 sm:py-32
      lg:px-8
    "
  > 
      
    <div
      aria-hidden="true"
      class="
        pointer-events-none
        absolute inset-0 -z-10
        bg-gradient-to-br
        from-primary/[0.07]
        via-transparent
        to-violet-500/[0.05]
      "
    />

    <div class="mx-auto max-w-7xl">
      <div class="max-w-4xl">
        <h2
          id="about-cta-title"
          class="
            text-[clamp(2.6rem,6vw,5.5rem)]
            font-semibold
            leading-[1.03]
            tracking-[-0.055em]
            text-foreground
          "
        >
          Let's talk about what we can build.
        </h2>

        <p
          class="
            mt-7 max-w-2xl
            text-base leading-8
            text-muted-foreground
            sm:text-lg
          "
        >
          Explore our engineering work or tell us about
          a software, data or AI challenge you are looking
          to solve.
        </p>

        <div
          class="
            mt-10 flex flex-col gap-4
            sm:flex-row sm:items-center
          "
        >
            
          <NuxtLink
            to="/contact"
            class="
              inline-flex min-h-12
              items-center justify-center gap-3
              rounded-2xl
              border border-primary
              px-7 py-3fire
              text-sm font-semibold
              text-primary-foreground
              transition-transform duration-200
              hover:-translate-y-0.5
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-primary
              motion-reduce:transform-none
            "
          >
            Contact Us

            <span aria-hidden="true">
              →
            </span>
          </NuxtLink>

          
          <NuxtLink
            to="/journal"
            class="
              inline-flex min-h-12
              items-center justify-center gap-3
              border-b border-foreground/30
              px-2 py-3
              text-sm font-semibold
              text-foreground
              transition-colors duration-200
              hover:border-primary
              hover:text-primary
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-primary
            "
          >
            Explore Our Projects

            <span aria-hidden="true">
              ↗
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template> -->

<template>
  <section
    aria-labelledby="about-cta-title"
    class="
      relative isolate overflow-hidden
      border-t border-black/[0.08]
      px-5 py-24

      sm:px-6 sm:py-32

      lg:px-8

      dark:border-white/[0.10]
    "
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

    <div class="mx-auto max-w-7xl">
      <div class="max-w-4xl">
        <h2
          id="about-cta-title"
          class="
            text-[clamp(2.6rem,6vw,5.5rem)]
            font-semibold
            leading-[1.03]
            tracking-[-0.055em]
            text-text
          "
        >
          Let's talk about what we can build.
        </h2>

        <p
          class="
            mt-7 max-w-2xl
            text-base leading-8
            text-muted

            sm:text-lg
          "
        >
          Explore our engineering work or tell us about
          a software, data or AI challenge you are looking
          to solve.
        </p>

        <div
          class="
            mt-10 flex flex-col gap-4

            sm:flex-row sm:items-center
          "
        >
          <!-- Primary CTA -->
          <NuxtLink
            to="/contact"
            class="
              group
              inline-flex min-h-12
              items-center justify-center gap-3
              border-b border-primary
              
              px-7 py-3 
              text-sm sm:text-base  font-semibold

              transition-transform duration-200

              hover:-translate-y-0.5
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-primary

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            Contact us

            <span
              aria-hidden="true"
              class="
                transition-transform duration-200
                group-hover:translate-x-0.5

                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            >
              →
            </span>
          </NuxtLink>
         
        </div>
      </div>
    </div>
  </section>
</template>