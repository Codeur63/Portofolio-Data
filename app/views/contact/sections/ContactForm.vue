<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
  website: '',
})

const subjects = [
  { value: '', label: 'Select a subject' },
  { value: 'project', label: 'Project or service' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'recruitment', label: 'Professional opportunity' },
  { value: 'other', label: 'Other request' },
] as const

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const errorMessage = ref('')

async function submit() {
  if (status.value === 'sending') return

  status.value = 'sending'
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })

    status.value = 'success'

    Object.assign(form, {
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
      website: '',
    })
  }
  catch {
    status.value = 'error'
    errorMessage.value =
      'Your message could not be sent. Please try again later.'
  }
}
</script>

<template>
  <section
    class="
      mx-auto grid max-w-7xl
      gap-12
      px-5 pb-28

      sm:px-6

      lg:grid-cols-[minmax(0,1.4fr)_minmax(270px,0.6fr)]
      lg:gap-20
      lg:px-8
    "
    aria-labelledby="contact-form-title"
  >
    <form
      class="relative z-10"
      @submit.prevent="submit"
    >
      <h2
        id="contact-form-title"
        class="
          text-2xl font-semibold
          tracking-[-0.02em]
          text-text
        "
      >
        Please describe your requirements
      </h2>

      <p class="mb-12 mt-2 text-sm leading-6 text-muted">
        Fields marked with * are required.
      </p>

      <!-- Identity -->
      <div class="grid gap-10 sm:grid-cols-2">
        <label class="block text-sm font-medium text-text">
          Name *

          <input
            v-model.trim="form.name"
            name="name"
            type="text"
            autocomplete="name"
            required
            maxlength="120"
            class="
              mt-2 w-full
              border-b 
              bg-transparent
              py-3
              text-text
              outline-none
              transition-colors duration-200
              focus:border-primary

              motion-reduce:transition-none
            "
          />
        </label>

        <label class="block text-sm font-medium text-text">
          Email *

          <input
            v-model.trim="form.email"
            name="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            required
            maxlength="254"
            class="
              mt-2 w-full
              border-b 
              bg-transparent
              py-3
              text-text
              outline-none
              transition-colors duration-200
              focus:border-primary

              motion-reduce:transition-none
            "
          />
        </label>
      </div>

      <div class="mt-10 grid gap-10">
        <!-- Organization -->
        <label class="block text-sm font-medium text-text">
          Company / organization
          <span class="font-normal text-muted">
            (optional)
          </span>

          <input
            v-model.trim="form.organization"
            name="organization"
            type="text"
            autocomplete="organization"
            maxlength="160"
            class="
              mt-2 w-full
              border-b
              bg-transparent
              py-3
              text-text
              outline-none

              transition-colors duration-200
              focus:border-primary

              motion-reduce:transition-none
            "
          />
        </label>

        <!-- Subject -->
        <label class="block text-sm font-medium text-text">
          Subject *

          <select
            v-model="form.subject"
            name="subject"
            required
            class="
              mt-2 w-full
              cursor-pointer
              border-b 
              bg-transparent
              py-3
              text-text
              outline-none

              transition-colors duration-200
              focus:border-primary

              motion-reduce:transition-none
            "
          >
            <option
              v-for="item in subjects"
              :key="item.value"
              :value="item.value"
              :disabled="!item.value"
              class="bg-background text-text"
            >
              {{ item.label }}
            </option>
          </select>
        </label>

        <!-- Message -->
        <label class="block text-sm font-medium text-text">
          Your message *

          <textarea
            v-model.trim="form.message"
            name="message"
            required
            minlength="15"
            maxlength="5000"
            rows="4"
            placeholder="Context, objectives, constraints, timeline…"
            class="
              mt-2
              min-h-32 w-full
              resize-y
              border-b 
              bg-transparent
              py-3
              text-text
              outline-none

              transition-colors duration-200
              placeholder:text-muted/60
              focus:border-primary

              motion-reduce:transition-none
            "
          />
        </label>
      </div>

      <!-- Honeypot -->
      <div
        class="sr-only"
        aria-hidden="true"
      >
        <label>
          Website

          <input
            v-model="form.website"
            name="website"
            tabindex="-1"
            autocomplete="off"
          />
        </label>
      </div>

      <!-- Submit -->
      <div class="mt-12 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          :disabled="status === 'sending'"
          class="
            inline-flex min-h-12
            items-center justify-center
            rounded-lg border border-border border-primary/70
            px-8
            text-sm font-semibold
            text-text

            shadow-sm

            transition-[transform,opacity]
            duration-200

            hover:scale-[1.02]
            active:scale-[0.98]

            disabled:cursor-not-allowed
            disabled:opacity-50

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            dark:focus-visible:ring-offset-background

            motion-reduce:transform-none
            motion-reduce:transition-none
          "
        >
          {{ status === 'sending' ? 'Sending…' : 'Send message' }}
        </button>

        <p
          role="status"
          aria-live="polite"
          class="text-sm font-medium"
          :class="
            status === 'error'
              ? 'text-red-600 dark:text-red-400'
              : 'text-muted'
          "
        >
          {{
            status === 'success'
              ? 'Your message has been sent successfully.'
              : errorMessage
          }}
        </p>
      </div>
    </form>

    <!-- Context -->
    <aside class="space-y-8 lg:pt-20">
      <div class="border-l-2 border-primary pl-5">
        <p
          class="
            text-xs font-semibold
            uppercase
            tracking-[0.2em]
          "
        >
          Collaborations
        </p>

        <p class="mt-4 leading-7 text-muted">
          Digital projects, data architectures, AI integration or
          technical collaborations: every discussion begins with
          understanding your needs.
        </p>
      </div>

      <div
        class="
          border-t border-black/[0.08]
          pt-6
          dark:border-white/[0.10]
        "
      >

        <p class="mt-2 text-sm leading-7 text-muted">
          Please specify your objective, the project context and,
          if possible, your timeline.
        </p>
      </div>
    </aside>
  </section>
</template>