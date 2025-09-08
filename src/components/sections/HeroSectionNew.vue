<template>
  <section id="hero" class="min-h-screen flex items-center justify-center pt-20" style="background-color: var(--color-base);">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center">
        <!-- 超大標題，模仿參考風格 -->
        <div class="mb-8">
          <h1 class="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 leading-none">
            <span style="color: var(--color-primary); text-transform: uppercase;">
              {{ profile.englishName }},{{ profile.name.split('').join(',') }}
            </span>
          </h1>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black" style="color: var(--color-primary);">
            RESUME
          </h2>
        </div>
        
        <!-- 職稱標籤 -->
        <div class="mb-12">
          <span class="orange-tag text-xl md:text-2xl px-6 py-3 font-bold">
            {{ profile.title }}
          </span>
        </div>
        
        <!-- 簡介 -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold mb-4" style="color: var(--color-primary);">簡介</h3>
          <p class="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
            {{ profile.description }}
          </p>
        </div>
        
        <!-- 重點技能 -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold mb-6" style="color: var(--color-primary);">技能 / 專長</h3>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="skill in highlightSkills"
              :key="skill"
              class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors duration-200"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        
        <!-- 分隔線 -->
        <div class="w-full h-1 bg-black mb-8"></div>
        
        <!-- 聯絡資訊 -->
        <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div class="text-left">
            <h4 class="text-xl font-bold mb-4" style="color: var(--color-primary);">聯絡方式</h4>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="orange-icon">
                  <Icon name="heroicons:phone" class="w-4 h-4 text-white" />
                </div>
                <span>{{ profile.contact.phone }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="orange-icon">
                  <Icon name="heroicons:envelope" class="w-4 h-4 text-white" />
                </div>
                <span>{{ profile.contact.email }}</span>
              </div>
            </div>
          </div>
          
          <div class="text-left">
            <h4 class="text-xl font-bold mb-4" style="color: var(--color-primary);">社群鏈結</h4>
            <div class="space-y-3">
              <a :href="profile.contact.github" target="_blank" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <div class="orange-icon">
                  <Icon name="mdi:github" class="w-4 h-4 text-white" />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a :href="profile.contact.linkedin" target="_blank" class="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <div class="orange-icon">
                  <Icon name="mdi:linkedin" class="w-4 h-4 text-white" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- 向下滾動提示 -->
        <div class="mt-16">
          <button
            @click="scrollToSection('about')"
            class="animate-bounce hover:text-blue-600 transition-colors duration-200"
            style="color: var(--color-primary);"
          >
            <Icon name="heroicons:chevron-down" class="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { profile } from '../../assets/data/profile'

const highlightSkills = [
  'HTML5 / CSS3 / JavaScript',
  'Vue 3 / Vue Router / Pinia', 
  'TypeScript / ES6+',
  'Node.js / Express / MongoDB',
  'Git / GitHub / 版本控制',
  'AI 協作輔助開發'
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 80
    const elementPosition = element.offsetTop - navHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
/* 確保 Hero section 有足夠高度 */
section {
  min-height: calc(100vh - 80px);
}

/* 滾動動畫 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
}
</style>