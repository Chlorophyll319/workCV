<template>
  <!-- VSCode 下方面板風格：保持面板特色 + 統一設計 -->
  <section class="w-full overflow-x-hidden">
    <!-- VSCode Bottom Panel - 緊貼底部的面板設計 -->
    <div class="bg-white border-t-2 border-primary shadow-[0_-4px_20px_rgba(0,0,0,0.1)] w-full">

      <!-- Panel Tab Header - 響應式設計 -->
      <div class="bg-primary-50 px-2 sm:px-4 py-2 border-b border-primary-200">
        <div class="flex items-center justify-between gap-2 sm:gap-4 overflow-x-hidden">
          <!-- 左側 Tab 區域 -->
          <div class="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div class="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 py-1.5 text-caption font-semibold text-primary border-2 border-primary-300 rounded-t-lg shadow-sm">
              <Icon icon="heroicons:document-text" class="w-3 h-3 text-accent" />
              <span class="hidden xs:inline">學歷與經歷</span>
              <span class="xs:hidden">學經歷</span>
            </div>
            <div
              @click="scrollToSection('about')"
              class="hidden sm:flex items-center gap-2 px-3 py-1.5 text-caption text-gray-500 hover:text-primary cursor-pointer transition-colors rounded-t-lg hover:bg-white/50"
              title="關於我"
            >
              <Icon icon="heroicons:user" class="w-3 h-3" />
            </div>
          </div>

          <!-- 右側狀態資訊 - 響應式顯示 -->
          <div class="flex items-center gap-1 sm:gap-2 md:gap-4 text-caption overflow-hidden">
            <!-- 桌面版：完整顯示 -->
            <div class="hidden lg:flex items-center gap-3">
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-primary hover:text-primary-700 transition-colors font-medium"
              >
                <Icon icon="heroicons:code-bracket" class="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span class="text-gray-300">•</span>
              <a
                :href="`mailto:${contactInfo.email}`"
                class="flex items-center gap-1.5 text-primary hover:text-primary-700 transition-colors font-medium"
              >
                <Icon icon="heroicons:envelope" class="w-3.5 h-3.5" />
                <span>{{ contactInfo.email }}</span>
              </a>
            </div>

            <!-- 平板版：精簡顯示 -->
            <div class="hidden md:flex lg:hidden items-center gap-2">
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1 text-primary hover:text-primary-700 transition-colors"
                title="GitHub"
              >
                <Icon icon="heroicons:code-bracket" class="w-3.5 h-3.5" />
              </a>
              <a
                :href="`mailto:${contactInfo.email}`"
                class="flex items-center gap-1 text-primary hover:text-primary-700 transition-colors"
                title="Email"
              >
                <Icon icon="heroicons:envelope" class="w-3.5 h-3.5" />
              </a>
            </div>

            <!-- 手機版：最精簡顯示 -->
            <div class="flex md:hidden items-center gap-1">
              <a
                :href="contactInfo.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-primary hover:text-primary-700 transition-colors"
                title="GitHub"
              >
                <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
              </a>
            </div>

            <!-- 分隔線 -->
            <span class="hidden lg:inline text-gray-300">|</span>

            <!-- 狀態資訊 - 所有尺寸都顯示但簡化 -->
            <div class="flex items-center gap-1 sm:gap-2 text-gray-600 overflow-hidden">
              <Icon icon="heroicons:map-pin" class="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span class="hidden sm:inline truncate">{{ contactInfo.location }}</span>
              <span class="sm:hidden">TW</span>
              <span class="text-green-500 text-sm">●</span>
              <span class="text-green-600 font-medium text-xs sm:text-caption truncate">{{ contactInfo.status }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel Content - GitLens 風格的 commit 歷史 -->
      <div class="px-4 py-3 space-y-2 bg-white">
        <div
          v-for="item in experienceData"
          :key="item.id"
          class="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-gray-50 transition-colors group"
        >
          <!-- Git 提交圖示 + 時間 -->
          <div class="flex items-center gap-2 min-w-0">
            <div
              class="w-2 h-2 rounded-full flex-shrink-0"
              :class="getCommitDotColor(item.type, item.status)"
            ></div>
            <span
              :class="getExperienceTypeColor(item.type, item.status)"
              class="font-mono text-caption font-medium whitespace-nowrap"
            >
              {{ formatExperienceDate(item.startDate, item.endDate) }}
            </span>
          </div>

          <!-- Commit 訊息主體 - GitLens 風格 -->
          <div class="flex-1 min-w-0">
            <div class="text-body text-gray-800 font-medium leading-tight">
              {{ item.gitCommitStyle || `${getCommitPrefix()}: ${item.title}` }}
            </div>
            <div class="text-caption text-gray-600 mt-0.5">
              <span class="text-primary font-medium">{{ item.organization }}</span>
              <span class="mx-2 text-gray-300">•</span>
              <span>{{ item.description }}</span>
            </div>
            <!-- 技能標籤 - GitLens 檔案風格 -->
            <div v-if="item.skills && item.skills.length > 0" class="flex flex-wrap gap-1 mt-2">
              <span
                v-for="skill in item.skills.slice(0, 5)"
                :key="skill"
                class="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200 font-mono"
              >
                {{ skill }}
              </span>
              <span
                v-if="item.skills.length > 5"
                class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-mono"
              >
                +{{ item.skills.length - 5 }}
              </span>
            </div>
          </div>

          <!-- 持續時間 - GitLens 風格 -->
          <div class="text-caption text-gray-500 font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {{ calculateDuration(item.startDate, item.endDate) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  experienceData,
  contactInfo,
  formatExperienceDate,
  calculateDuration,
  getExperienceTypeColor,
  getCommitDotColor,
  type ExperienceItem
} from '../../store/data/experience'

// 所有類型統一使用 'feat' 前綴 - 簡潔明確
const getCommitPrefix = (): string => 'feat'

// 滾動至指定區域的功能
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
