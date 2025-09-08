<template>
  <div class="min-h-screen" style="background-color: var(--color-base);">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Hero Section (簡化版，包含主要資訊) -->
    <HeroSectionNew />
    
    <!-- Main Content Sections -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- 分隔線 -->
      <div class="w-full h-1 bg-black mb-12"></div>
      
      <!-- 專案經驗區域 -->
      <section id="projects" class="mb-16">
        <h2 class="text-3xl font-bold mb-8" style="color: var(--color-primary);">專案經驗</h2>
        <div class="grid lg:grid-cols-2 gap-8">
          <ProjectsCard />
          <ExperienceCard />
        </div>
      </section>
      
      <!-- 分隔線 -->
      <div class="w-full h-1 bg-black mb-12"></div>
      
      <!-- 技能和學歷 -->
      <section id="skills" class="mb-16">
        <h2 class="text-3xl font-bold mb-8" style="color: var(--color-primary);">背景資料</h2>
        <div class="grid lg:grid-cols-2 gap-8">
          <SkillsCard />
          <EducationCard />
        </div>
      </section>
      
      <!-- 分隔線 -->
      <div class="w-full h-1 bg-black mb-12"></div>
      
      <!-- 關於我 -->
      <section id="about" class="mb-16">
        <AboutCard />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
// @ts-ignore
import NavBar from '../components/ui/NavBar.vue';
// @ts-ignore
import HeroSectionNew from '../components/sections/HeroSectionNew.vue';
// @ts-ignore
import SkillsCard from '../components/cards/SkillsCard.vue';
// @ts-ignore
import ProjectsCard from '../components/cards/ProjectsCard.vue';
// @ts-ignore
import ExperienceCard from '../components/cards/ExperienceCard.vue';
// @ts-ignore
import EducationCard from '../components/cards/EducationCard.vue';
// @ts-ignore
import AboutCard from '../components/cards/AboutCard.vue';

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

<style scoped>
/* Section Styling */
section {
  scroll-margin-top: 80px; /* 考慮固定導航欄的高度 */
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Section transitions */
section {
  transition: all 0.3s ease-in-out;
}

/* Card hover effects */
:deep(.resume-card) {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

:deep(.resume-card:hover) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
</style>
