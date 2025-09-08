<template>
  <div class="min-h-screen" style="background-color: var(--color-base)">
    <!-- Main Container with Two-Column Layout -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column (30%) -->
        <div class="lg:w-[30%] space-y-6">
          <PersonalCard />
          <SkillsCard />
        </div>

        <!-- Vertical Divider (Hidden on mobile) -->
        <div class="hidden lg:block w-px bg-black"></div>

        <!-- Right Column (70%) -->
        <div class="lg:w-[70%] space-y-6">
          <ContactCard />
          <ProjectsCard />
          <ExperienceCard />
          <EducationCard />
          <AboutCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
// @ts-ignore
import PersonalCard from '../components/cards/PersonalCard.vue';
// @ts-ignore
import SkillsCard from '../components/cards/SkillsCard.vue';
// @ts-ignore
import ContactCard from '../components/cards/ContactCard.vue';
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
/* Two-Column Layout Styling */
@media (min-width: 1024px) {
  .lg\:w-\[30\%\] {
    position: sticky;
    top: 2rem;
    align-self: flex-start;
  }
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .max-w-7xl {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .max-w-7xl {
    padding: 1rem;
  }

  .space-y-6 > * + * {
    margin-top: 1rem;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
