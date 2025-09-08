<template>
  <section class="about-section h-full p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- About Card -->
      <div 
        class="bg-white rounded-xl border-2 p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        style="border-color: var(--color-primary);"
      >
        <!-- VSCode File Tab Design -->
        <div class="flex items-center gap-2 mb-6 pb-4 border-b-2" style="border-color: var(--color-primary);">
          <div class="flex items-center gap-2 px-4 py-2 rounded-t-lg" style="background-color: var(--color-primary); color: white;">
            <Icon icon="heroicons:user" class="w-4 h-4" />
            <span class="font-mono text-sm font-semibold">about-me.md</span>
            <Icon icon="heroicons:x-mark" class="w-3 h-3 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors" />
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6 flex-1 flex flex-col">
          <!-- Main Description -->
          <div class="text-gray-800 leading-relaxed">
            {{ profile.about.description }}
          </div>

          <!-- Key Points Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
            <!-- Background -->
            <div class="space-y-2">
              <h3 class="flex items-center gap-2 font-semibold text-sm" style="color: var(--color-accent);">
                <Icon icon="heroicons:academic-cap" class="w-4 h-4" />
                背景轉換
              </h3>
              <p class="text-gray-600 text-xs leading-relaxed">
                從 {{ profile.about.background.from }} 轉向 {{ profile.about.background.to }}，
                帶來獨特的設計思維與用戶體驗觀點
              </p>
            </div>

            <!-- Philosophy -->
            <div class="space-y-2">
              <h3 class="flex items-center gap-2 font-semibold text-sm" style="color: var(--color-primary);">
                <Icon icon="heroicons:light-bulb" class="w-4 h-4" />
                開發理念
              </h3>
              <p class="text-gray-600 text-xs leading-relaxed">
                {{ profile.about.philosophy }}
              </p>
            </div>
            
            <!-- Current Focus -->
            <div class="border-l-4 pl-3" style="border-color: var(--color-primary);">
              <h3 class="font-semibold mb-1 text-sm" style="color: var(--color-primary);">目前專注</h3>
              <p class="text-gray-600 text-xs leading-relaxed">
                {{ profile.about.currentFocus }}
              </p>
            </div>
            
            <!-- Highlights -->
            <div class="bg-gray-50 rounded-lg p-3">
              <h3 class="flex items-center gap-2 font-semibold mb-2 text-sm" style="color: var(--color-accent);">
                <Icon icon="heroicons:star" class="w-4 h-4" />
                核心優勢
              </h3>
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="highlight in profile.about.highlights" 
                  :key="highlight"
                  class="px-2 py-1 bg-white border rounded text-xs font-medium"
                  style="border-color: var(--color-primary); color: var(--color-primary);"
                >
                  {{ highlight }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Full Width Bottom Section -->
          <div class="mt-6 text-center border-t-2 pt-4" style="border-color: var(--color-primary);">
            <p class="text-gray-600 text-sm italic">
              "從設計思維到功能實現，專注於創造優質的用戶體驗"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { profile } from '../../assets/data/profile'
</script>

<style scoped>
/* Remove background since it's handled by parent */
.about-section {
  background: transparent;
}

/* Enhanced hover effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>