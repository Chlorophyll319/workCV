<template>
  <div class="space-y-4 md:space-y-6 w-full overflow-x-hidden">
    <!-- Hero Section - 立即載入 (LCP 關鍵) -->
    <HeroSection />

    <!-- About Me Section - Lazy Load -->
    <div ref="aboutTarget">
      <AboutSection v-if="aboutVisible" />
    </div>

    <!-- Projects Section - Lazy Load -->
    <div ref="projectsTarget">
      <ProjectsSection v-if="projectsVisible" />
    </div>

    <!-- Skills Section - Lazy Load -->
    <div ref="skillsTarget">
      <SkillsSection v-if="skillsVisible" />
    </div>

    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from 'vue';
import { useLazyLoad } from '../composables/useLazyLoad';
import HeroSection from '../components/sections/HeroSection.vue';
import FooterSection from '../components/sections/FooterSection.vue';

const AboutSection = defineAsyncComponent(() => import('../components/sections/AboutSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('../components/sections/ProjectsSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('../components/sections/SkillsSection.vue'));

const aboutVisible = ref(false);
const projectsVisible = ref(false);
const skillsVisible = ref(false);

const { target: aboutTarget } = useLazyLoad(0.1);
const { target: projectsTarget } = useLazyLoad(0.1);
const { target: skillsTarget } = useLazyLoad(0.1);

onMounted(() => {
  setTimeout(() => { aboutVisible.value = true; }, 800);
  setTimeout(() => { projectsVisible.value = true; }, 1500);
  setTimeout(() => { skillsVisible.value = true; }, 2500);
});

definePageMeta({ layout: 'default' });

const siteUrl = 'https://chlorophyll319.github.io/workCV/';
const description = '從設計思維到功能實現，擅長與 AI 協作的前端工程師。具備 Vue 3、Node.js 全端開發經驗，專注於使用者體驗與現代 Web 技術。';

useSeoMeta({
  title: '葉芃 (Evelyn) | 前端工程師',
  description,
  ogTitle: '葉芃 (Evelyn) | 前端工程師',
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: 'Evenly 個人履歷',
  ogLocale: 'zh_TW',
  twitterCard: 'summary_large_image',
  twitterTitle: '葉芃 (Evelyn) | 前端工程師',
  twitterDescription: description,
  robots: 'index, follow',
  author: '葉芃 (Evelyn)',
  keywords: '前端工程師, Vue 3, Node.js, TypeScript, AI協作, 葉芃, Evelyn',
  themeColor: '#C0392B',
});

useHead({
  link: [
    { rel: 'canonical', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: '葉芃',
        alternateName: 'Evelyn',
        jobTitle: '前端工程師',
        url: siteUrl,
        sameAs: [
          'https://github.com/Chlorophyll319',
          'https://www.linkedin.com/in/evelyn-yeh-frontend/',
        ],
        knowsAbout: ['Vue 3', 'TypeScript', 'Node.js', 'Nuxt', 'AI協作開發'],
      }),
    },
  ],
});
</script>
