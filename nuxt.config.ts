export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  ui: {
    fonts: false
  },

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    // 只能在服务端读取
    contactWebhookUrl: '',

    public: {
      siteName: '个人技术主页',
      siteUrl: 'http://127.0.0.1:3000'
    }
  },

  routeRules: {
    '/': {
      prerender: true
    },

    '/projects': {
      prerender: true
    },

    '/privacy': {
      prerender: true
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },

  compatibilityDate: '2026-07-31'
})
