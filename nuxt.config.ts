// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public:{
      GOOGLE_MAPS_KEY_FRONTEND:'',
      BACKEND_URL : ''//NUXT_PUBLIC_BACKEND_URL
    }
    
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {Roboto: true}
    }]
  ],
  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
