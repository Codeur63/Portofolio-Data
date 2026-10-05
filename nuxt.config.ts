// // https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },

      titleTemplate: '%s | Xiani',

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  },

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Xiani',
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  },
  
  runtimeConfig: {
     resendApiKey: process.env.RESEND_API_KEY,
     contactEmail: process.env.CONTACT_EMAIL,
   },
  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
              filename: 'bundle-report.html',
              open: false,
              gzipSize: true,
              brotliSize: true
            })
    ]
  },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@formkit/auto-animate',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
})
