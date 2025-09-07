import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ui from '@nuxt/ui/vite';
import tailwindcss from '@tailwindcss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import Fonts from 'unplugin-fonts/vite';
import Layouts from 'vite-plugin-vue-layouts-next';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    VueRouter(),
    Layouts(),
    vue(),
    ui(),
    tailwindcss(),
    Fonts({
      google: {
        families: ['Fira Code:400,500'],
        display: 'swap',
        preconnect: true,
      },
      custom: {
        families: [
          {
            name: 'jf-openhuninn',
            src: './src/assets/font/*.ttf',
          },
        ],
        display: 'swap',
        preload: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
