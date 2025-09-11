import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ui from '@nuxt/ui/vite';
import tailwindcss from '@tailwindcss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import Fonts from 'unplugin-fonts/vite';
import Layouts from 'vite-plugin-vue-layouts-next';

export default defineConfig({
  base: './', // GitHub Pages 部署路径
  plugins: [
    VueRouter(), // 自動路由生成
    Layouts(), // 佈局系統
    vue(), // Vue 3 支援
    ui(), // Nuxt UI 組件庫
    tailwindcss(), // Tailwind CSS v4
    Fonts({
      custom: {
        families: [
          {
            name: 'jf-openhuninn', // 自定義中文字體
            src: './src/assets/font/*.ttf',
          },
        ],
        display: 'swap', // 字體載入策略（避免 FOIT）
        preload: true, // 字體預載入（提升 FCP）
      },
    }),
  ],
  server: {
    port: 3000, // 開發伺服器端口
  },
});
