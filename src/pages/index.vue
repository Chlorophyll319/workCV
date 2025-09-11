<template>
  <div class="space-y-4 md:space-y-6 max-w-none overflow-x-hidden">
    <!-- Hero Section - Full Width - 立即載入 (LCP 關鍵) -->
    <div id="hero" class="min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      <HeroSection />
    </div>

    <!-- About Me Section - Lazy Load -->
    <div id="about" class="min-h-[300px] md:min-h-[400px]" ref="aboutTarget">
      <AboutSection v-if="aboutVisible" />
      <div v-else class="h-full flex items-center justify-center">
        <div class="animate-pulse text-gray-400">載入中...</div>
      </div>
    </div>

    <!-- Projects Section - Lazy Load -->
    <div id="projects" class="min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" ref="projectsTarget">
      <ProjectsSection v-if="projectsVisible" />
      <div v-else class="h-full flex items-center justify-center">
        <div class="animate-pulse text-gray-400">載入中...</div>
      </div>
    </div>

    <!-- Skills Section - Lazy Load -->
    <div id="skills" class="min-h-[400px] md:min-h-[500px]" ref="skillsTarget">
      <SkillsSection v-if="skillsVisible" />
      <div v-else class="h-full flex items-center justify-center">
        <div class="animate-pulse text-gray-400">載入中...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { useLazyLoad } from '../composables/useLazyLoad';
import HeroSection from '../components/sections/HeroSection.vue';

// 動態導入其他 section（code splitting）
const AboutSection = defineAsyncComponent(() => import('../components/sections/AboutSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('../components/sections/ProjectsSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('../components/sections/SkillsSection.vue'));

// Lazy loading 設定
const { target: aboutTarget, isVisible: aboutVisible } = useLazyLoad(0.1);
const { target: projectsTarget, isVisible: projectsVisible } = useLazyLoad(0.1);
const { target: skillsTarget, isVisible: skillsVisible } = useLazyLoad(0.1);

// 指定使用 default layout
defineOptions({
  meta: {
    layout: 'default',
  },
});

// 設定頁面 meta
useHead({
  title: '葉芃 (Evelyn) - Frontend Engineer | AI協作開發',
  meta: [
    {
      name: 'description',
      content:
        '從設計思維到功能實現，擅長與 AI 協作的前端工程師。具備 Vue 3、Node.js 全端開發經驗。',
    },
    { name: 'keywords', content: '前端工程師, Vue 3, Node.js, AI協作, 履歷, Frontend Engineer' },
    // Open Graph
    { property: 'og:title', content: '葉芃 (Evelyn) - Frontend Engineer' },
    { property: 'og:description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師' },
    { property: 'og:type', content: 'website' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '葉芃 (Evelyn) - Frontend Engineer' },
    { name: 'twitter:description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師' },
  ],
});
</script>
