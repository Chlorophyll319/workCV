<template>
  <div class="space-y-4 md:space-y-6 w-full overflow-x-hidden">
    <!-- Hero Section - Full Width - 立即載入 (LCP 關鍵) - 最小高度移除避免 Layout Shift -->
    <div id="hero">
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

    <!-- Footer Section - 下方面板風格，移除間距 -->
    <div id="footer">
      <FooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useLazyLoad } from '../composables/useLazyLoad';
import HeroSection from '../components/sections/HeroSection.vue';
import FooterSection from '../components/sections/FooterSection.vue';

// 動態導入其他 section（code splitting）
const AboutSection = defineAsyncComponent(() => import('../components/sections/AboutSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('../components/sections/ProjectsSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('../components/sections/SkillsSection.vue'));

// 漸進式載入策略 - 平衡效能與使用者體驗
const aboutVisible = ref(false);
const projectsVisible = ref(false);
const skillsVisible = ref(false);

// 保留 lazy loading 作為備案，但主要靠時間觸發
const { target: aboutTarget } = useLazyLoad(0.1);
const { target: projectsTarget } = useLazyLoad(0.1);
const { target: skillsTarget } = useLazyLoad(0.1);

// 優化的載入時序
onMounted(() => {
  // 立即載入 About (最重要的內容)
  setTimeout(() => {
    aboutVisible.value = true;
  }, 800);

  // 1.5秒後載入 Projects (作品集重要度次之)
  setTimeout(() => {
    projectsVisible.value = true;
  }, 1500);

  // 2.5秒後載入 Skills (相對輕量)
  setTimeout(() => {
    skillsVisible.value = true;
  }, 2500);
});

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
      content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師。具備 Vue 3、Node.js 全端開發經驗，專注於使用者體驗與現代 Web 技術。',
    },
    { name: 'keywords', content: '前端工程師, Vue 3, Node.js, TypeScript, AI協作, 履歷, Frontend Engineer, 葉芃, Evelyn' },
    { name: 'author', content: '葉芃 (Evelyn)' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:title', content: '葉芃 (Evelyn) - Frontend Engineer | AI協作開發' },
    { property: 'og:description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師。具備 Vue 3、Node.js 全端開發經驗，專注於使用者體驗與現代 Web 技術。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://chlorophyll319.github.io/workCV/#/' },
    { property: 'og:site_name', content: 'Evenly 個人履歷網站' },
    { property: 'og:locale', content: 'zh_TW' },
    
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '葉芃 (Evenly) - Frontend Engineer | AI協作開發' },
    { name: 'twitter:description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師。Vue 3 + TypeScript 全端開發經驗。' },
    { name: 'twitter:site', content: '@Evenly_Resume' },
    
    // 額外 SEO
    { name: 'theme-color', content: '#007acc' },
    { name: 'msapplication-TileColor', content: '#007acc' },
  ],
});


// 使用簡潔的 section 定義
const extensionFile = {
  icon: 'heroicons:puzzle-piece',
  displayName: 'YEH,PENG',
};
</script>
