export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  ui: {
    fonts: false
  },

  routeRules: {
    // 目前只有首页，所以只预渲染首页
    '/': {
      prerender: true
    },

    // API必须保留为动态接口，不参与页面预渲染
    '/api/**': {
      prerender: false
    }
  },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2026-07-31'
})
