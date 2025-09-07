<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Me Section -->
    <AboutSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Skills Section -->
    <!-- <SkillsSection /> -->
    
    <!-- Contact Section -->
    <!-- <ContactSection /> -->
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
// import SkillsSection from '~/components/sections/SkillsSection.vue'
// import ContactSection from '~/components/sections/ContactSection.vue'

// 設定頁面 meta
useHead({
  title: '葉芃 (Evelyn) - Frontend Engineer | AI協作開發',
  meta: [
    { name: 'description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師。具備 Vue 3、Node.js 全端開發經驗。' },
    { name: 'keywords', content: '前端工程師, Vue 3, Node.js, AI協作, 履歷, Frontend Engineer' },
    // Open Graph
    { property: 'og:title', content: '葉芃 (Evelyn) - Frontend Engineer' },
    { property: 'og:description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師' },
    { property: 'og:type', content: 'website' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '葉芃 (Evelyn) - Frontend Engineer' },
    { name: 'twitter:description', content: '從設計思維到功能實現，擅長與 AI 協作的前端工程師' }
  ]
})
</script>
