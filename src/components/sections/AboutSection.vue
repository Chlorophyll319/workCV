<template>
  <section class="about-section h-full p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- About Card -->
      <div class="bg-vscode-card rounded-xl border border-vscode-border p-4 md:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-blue/50">
        <!-- VSCode File Tab Design -->
        <div class="flex items-center gap-2 mb-6 pb-4 border-b border-vscode-border">
          <div class="flex items-center gap-2 bg-vscode-bg px-4 py-2 rounded-t-lg">
            <UIcon name="i-ph-user" class="w-4 h-4 text-vscode-blue" />
            <span class="font-code text-sm text-vscode-text-white">about-me.md</span>
            <UIcon name="i-ph-x" class="w-3 h-3 text-vscode-text-secondary hover:text-vscode-text-white cursor-pointer" />
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-4 flex-1 flex flex-col">
          <!-- Main Description -->
          <div class="text-vscode-text-primary leading-relaxed font-chinese">
            {{ profile.about.description }}
          </div>

          <!-- Key Points -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
            <!-- Background -->
            <div class="space-y-2">
              <h3 class="flex items-center gap-2 text-vscode-yellow font-semibold text-sm">
                <UIcon name="i-ph-graduation-cap" class="w-4 h-4" />
                背景轉換
              </h3>
              <p class="text-vscode-text-secondary font-chinese text-xs leading-relaxed">
                從 {{ profile.about.background.from }} 轉向 {{ profile.about.background.to }}，
                帶來獨特的設計思維與用戶體驗觀點
              </p>
            </div>

            <!-- Philosophy -->
            <div class="space-y-2">
              <h3 class="flex items-center gap-2 text-vscode-green font-semibold text-sm">
                <UIcon name="i-ph-lightbulb" class="w-4 h-4" />
                開發理念
              </h3>
              <p class="text-vscode-text-secondary font-chinese text-xs leading-relaxed">
                {{ profile.about.philosophy }}
              </p>
            </div>
            <!-- Current Focus -->
            <div class="border-l-4 border-vscode-blue pl-3">
              <h3 class="text-vscode-blue font-semibold mb-1 text-sm">目前專注</h3>
              <p class="text-vscode-text-secondary font-chinese text-xs">
                {{ profile.about.currentFocus }}
              </p>
            </div>
            
            <!-- Highlights -->
            <div class="bg-vscode-bg rounded-lg p-3">
              <h3 class="flex items-center gap-2 text-vscode-purple font-semibold mb-2 text-sm">
                <UIcon name="i-ph-star" class="w-4 h-4" />
                核心優勢
              </h3>
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="highlight in profile.about.highlights" 
                  :key="highlight"
                  class="px-2 py-1 bg-vscode-card border border-vscode-border rounded text-xs text-vscode-text-white font-chinese"
                >
                  {{ highlight }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Full Width Bottom Section -->
          <div class="mt-4 text-center">
            <p class="text-vscode-text-secondary font-chinese text-sm italic">
              "從設計思維到功能實現，專注於創造優質的用戶體驗"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '../../assets/data/profile'
</script>

<style scoped>
/* Remove background since it's handled by parent */
.about-section {
  background: transparent;
}
</style>