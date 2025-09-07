<template>
  <section class="about-section py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-vscode-text-white font-chinese mb-4">
          關於我
        </h2>
        <div class="w-16 h-1 bg-vscode-blue mx-auto rounded-full"></div>
      </div>

      <!-- About Card -->
      <div class="bg-vscode-card rounded-xl border border-vscode-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-blue/50">
        <!-- VSCode File Tab Design -->
        <div class="flex items-center gap-2 mb-6 pb-4 border-b border-vscode-border">
          <div class="flex items-center gap-2 bg-vscode-bg px-4 py-2 rounded-t-lg">
            <UIcon name="i-ph-user" class="w-4 h-4 text-vscode-blue" />
            <span class="font-code text-sm text-vscode-text-white">about-me.md</span>
            <UIcon name="i-ph-x" class="w-3 h-3 text-vscode-text-secondary hover:text-vscode-text-white cursor-pointer" />
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <!-- Main Description -->
          <div class="text-vscode-text-primary leading-relaxed text-lg font-chinese">
            {{ profile.about.description }}
          </div>

          <!-- Key Points -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Background -->
            <div class="space-y-3">
              <h3 class="flex items-center gap-2 text-vscode-yellow font-semibold">
                <UIcon name="i-ph-graduation-cap" class="w-5 h-5" />
                背景轉換
              </h3>
              <p class="text-vscode-text-secondary font-chinese text-sm leading-relaxed">
                從 {{ profile.about.background.from }} 轉向 {{ profile.about.background.to }}，
                帶來獨特的設計思維與用戶體驗觀點
              </p>
            </div>

            <!-- Philosophy -->
            <div class="space-y-3">
              <h3 class="flex items-center gap-2 text-vscode-green font-semibold">
                <UIcon name="i-ph-lightbulb" class="w-5 h-5" />
                開發理念
              </h3>
              <p class="text-vscode-text-secondary font-chinese text-sm leading-relaxed">
                {{ profile.about.philosophy }}
              </p>
            </div>
          </div>

          <!-- Highlights */
          <div class="bg-vscode-bg rounded-lg p-4">
            <h3 class="flex items-center gap-2 text-vscode-purple font-semibold mb-3">
              <UIcon name="i-ph-star" class="w-5 h-5" />
              核心優勢
            </h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="highlight in profile.about.highlights" 
                :key="highlight"
                class="px-3 py-1 bg-vscode-card border border-vscode-border rounded-full text-sm text-vscode-text-white font-chinese"
              >
                {{ highlight }}
              </span>
            </div>
          </div>

          <!-- Current Focus -->
          <div class="border-l-4 border-vscode-blue pl-4">
            <h3 class="text-vscode-blue font-semibold mb-2">目前專注</h3>
            <p class="text-vscode-text-secondary font-chinese text-sm">
              {{ profile.about.currentFocus }}
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
.about-section {
  background: 
    radial-gradient(circle at 80% 20%, rgba(197, 134, 192, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(220, 220, 170, 0.06) 0%, transparent 50%);
}
</style>