<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-black" style="background-color: rgba(255, 250, 230, 0.95);">
    <nav class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold" style="color: var(--color-primary);">
          葉芃
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'transition-colors duration-200 hover:text-orange-500',
              activeSection === item.id ? 'text-orange-500 font-medium' : 'text-gray-700'
            ]"
            @click="scrollToSection(item.id)"
          >
            {{ item.name }}
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <Icon name="heroicons:bars-3" class="w-6 h-6" v-if="!isMenuOpen" />
          <Icon name="heroicons:x-mark" class="w-6 h-6" v-else />
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-show="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
        <div class="flex flex-col space-y-3">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'py-2 transition-colors duration-200',
              activeSection === item.id ? 'text-orange-500 font-medium' : 'text-gray-700'
            ]"
            @click="scrollToSection(item.id); isMenuOpen = false"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const activeSection = ref('')
const isMenuOpen = ref(false)

const navItems = [
  { id: 'hero', name: '首頁' },
  { id: 'projects', name: '專案經驗' },
  { id: 'skills', name: '背景資料' },
  { id: 'about', name: '關於我' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 80 // 導航欄高度
    const elementPosition = element.offsetTop - navHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100 // 考慮導航欄高度
  
  for (const item of navItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight
      
      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        activeSection.value = item.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // 初始化
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
/* 確保導航欄在滾動時保持固定 */
header {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>