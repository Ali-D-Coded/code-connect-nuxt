import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins:[
    '~/plugins/antd-ui'
  ],
    runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },

  modules: ['@sidebase/nuxt-auth'],
  auth: {
  baseURL: process.env.AUTH_ORIGIN,
        provider: {
            type: 'authjs'
    },
        // globalAppMiddleware: true
  },
  


})
