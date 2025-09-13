import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ui from '@nuxt/ui/vite';
import tailwindcss from '@tailwindcss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import Layouts from 'vite-plugin-vue-layouts-next';

export default defineConfig({
  base: './', // GitHub Pages 部署路径
  plugins: [
    VueRouter(), // 自動路由生成
    Layouts(), // 佈局系統
    vue(), // Vue 3 支援
    ui(), // Nuxt UI 組件庫
    tailwindcss(), // Tailwind CSS v4
  ],
  server: {
    port: 3000, // 開發伺服器端口
  },
  build: {
    target: 'esnext', // 現代瀏覽器優化
    minify: 'terser', // 使用 terser 壓縮
    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分第三方庫
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'ui-vendor': ['@nuxt/ui', '@iconify/vue'],
          'utils-vendor': ['@vueuse/core', '@vueuse/head'],
        },
      },
    },
    // 啟用 gzip 壓縮
    reportCompressedSize: true,
    // 優化 chunk 大小警告
    chunkSizeWarningLimit: 1000,
  },
});
