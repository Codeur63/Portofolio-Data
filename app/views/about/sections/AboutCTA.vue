

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
        to-secondary/10

        dark:from-primary/[0.09]
        dark:to-secondary/[0.07]
      "
    />

    <div class="mx-auto lg:max-w-7xl">
      <div class="max-w-4xl ">
        <h2
          id="about-cta-title"
          class="text-[clamp(2.8rem,6vw,5.5rem)]
                 font-semibold leading-[0.97]
                 tracking-[-0.055em] text-text"
        >
          Let's talk about what 
          <span
            class="block bg-gradient-to-r
                   from-primary via-violet-500 to-accent
                   bg-clip-text text-transparent"
          >
            we can build.
          </span>
        </h2>

        <p
          class="
            mt-6 max-w-2xl
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
            class="group mt-6 inline-flex min-h-12
                 items-center gap-3 border-b border-primary/40 px-6
                 text-sm font-semibold
                 transition-[color,border-color,transform] duration-300
                 hover:border-primary hover:text-primary
                 hover:-translate-y-0.5
                 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-primary
                 motion-reduce:transform-none"
          >
            Contact Us

            <span aria-hidden="true"  class="transition-transform duration-300
                   group-hover:translate-x-1
                   motion-reduce:transform-none">
              →
            </span>
          </NuxtLink>
         
        </div>
      </div>
    </div>
  </section>
</template>