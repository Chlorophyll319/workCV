// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

  // SPA 模式，相容現有的 browser-only API（IntersectionObserver 等）
  ssr: false,

  modules: ['@nuxt/ui', '@pinia/nuxt'],

  // 全局 CSS（含 Tailwind v4 + Nuxt UI + 自訂 token）
  css: ['~/assets/main.css'],

  // 全局 <head> 預設值
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/workCV/' : '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  compatibilityDate: '2025-01-01',
})
