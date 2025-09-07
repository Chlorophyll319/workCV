<template>
  <div class="min-h-screen bg-vscode-bg">
    <!-- Main Container with Bento Grid Layout -->
    <div class="max-w-7xl mx-auto px-4 py-6 space-y-6">
      
      <!-- Hero Section - Full Width -->
      <div class="grid-item hero-area">
        <HeroSection />
      </div>
      
      <!-- About Me Section - Full Width -->
      <div class="grid-item about-area">
        <AboutSection />
      </div>
      
      <!-- Projects Section - Full Width -->
      <div class="grid-item projects-area">
        <ProjectsSection />
      </div>
      
      <!-- Future Sections Grid -->
      <!-- <div class="bento-grid grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div class="grid-item skills-area lg:col-span-1">
          <SkillsSection />
        </div>
        
        <div class="grid-item contact-area lg:col-span-1">
          <ContactSection />
        </div>
      </div> -->
    </div>
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

<style scoped>
/* Bento Grid Layout Styling */
.bento-grid {
  min-height: 60vh;
}

.grid-item {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Hero area special styling */
.hero-area {
  min-height: 70vh;
  background: 
    radial-gradient(circle at 20% 80%, rgba(86, 156, 214, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(106, 153, 85, 0.06) 0%, transparent 50%);
}

/* About area styling */
.about-area {
  min-height: 300px;
}

/* Projects area styling */
.projects-area {
  min-height: 500px;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .bento-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .hero-area {
    min-height: 50vh;
  }
  
  .about-area,
  .projects-area {
    min-height: auto;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .max-w-7xl {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .hero-area {
    min-height: 40vh;
  }
  
  .grid-item {
    border-radius: 12px;
  }
  
  .bento-grid {
    gap: 0.75rem;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Background pattern for visual interest */
.min-h-screen::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(86, 156, 214, 0.05) 2px, transparent 2px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: -1;
}
</style>
