// https://nuxt.com/docs/api/configuration/nuxt-config

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
          href: '/favicon.ico'
        }
      ]
    }
  },

  devtools: {
    enabled: false
  },

  css: [
    '@fontsource-variable/mulish/wght.css',
    '@fontsource-variable/roboto/wght.css',
    '~/assets/css/main.css'
  ],

  site: {
    name: 'Xiani',
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    public: {
      githubUrl: process.env.NUXT_PUBLIC_GITHUB_URL || '',
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || '',
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
      ...(process.env.ANALYZE
        ? [
            visualizer({
              filename: 'bundle-report.html',
              open: false,
              gzipSize: true,
              brotliSize: true
            })
          ]
        : []),
    ]
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/contact', '/journal']
    }
  },

  ogImage: {
    enabled: false
  },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode'
  ],

  icon: {
    mode: 'svg',
    serverBundle: {
      collections: ['logos', 'skill-icons', 'grommet-icons', 'bxs']
    }
  },

  colorMode: {
    classSuffix: ''
  },
})