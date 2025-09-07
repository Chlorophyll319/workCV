import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Auto-generated router from unplugin-vue-router
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';

// NuxtUI
import ui from '@nuxt/ui/vue-plugin';
// TaillwindCSS
import './assets/main.css';

const app = createApp(App);
const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(),
});
app.use(router);
app.use(ui);

app.mount('#app');
