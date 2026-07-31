export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  // 这一行不能丢
  css: ['~/assets/css/main.css'],

  ui: {
    // 关闭Google字体请求
    fonts: false
  },

  routeRules: {
    // API不参与预渲染
    '/api/**': {
      prerender: false
    }
  },

  devtools: {
    enabled: true
  }
})
