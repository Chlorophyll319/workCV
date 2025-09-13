<template>
  <!-- 下方面板風格：緊貼底部，融入 main 區塊設計 -->
  <div class="bg-card border-t border-border w-full">
    <!-- Panel Tab Header -->
    <div class="bg-primary-100 px-4 py-2 border-b border-border">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 bg-card px-3 py-1 text-caption font-semibold text-text border border-border rounded-t">
          <Icon icon="heroicons:clock" class="w-3 h-3 text-accent" />
          <span>EXPERIENCE</span>
        </div>
        <div class="flex items-center gap-2 px-3 py-1 text-caption text-gray-500 hover:text-text cursor-pointer">
          <Icon icon="heroicons:envelope" class="w-3 h-3" />
          <span>CONTACT</span>
        </div>
        <div class="ml-auto text-caption text-gray-500">
          git log --author="Evenly" --oneline
        </div>
      </div>
    </div>

    <!-- Panel Content -->
    <div class="px-4 py-3 space-y-3 max-h-48 overflow-y-auto bg-card">
      <!-- 當前狀態 -->
      <div class="flex items-start gap-3 text-caption">
        <span class="text-accent font-mono">2024.09</span>
        <div class="flex-1">
          <div class="text-body text-text">
            feat(career): 前端開發職訓課程完成，Vue3 + Node.js 全端專案實作
          </div>
          <div class="text-body-secondary text-gray-600 mt-1">
            泰山職訓局前端開發班 | 培養了系統性思考與模組化開發能力，學會拆解複雜需求並規劃開發流程
          </div>
        </div>
        <div class="text-green-600 font-mono">2025</div>
      </div>

      <!-- 行銷工作經驗 -->
      <div class="flex items-start gap-3 text-caption">
        <span class="text-primary font-mono">2022.08</span>
        <div class="flex-1">
          <div class="text-body-secondary text-text">
            feat(marketing): 行銷設計助理 @ 樂麵屋 | 數位化流程優化經驗
          </div>
          <div class="text-body-secondary text-gray-600 mt-1">
            社群經營與會員系統設計經驗，培養了用戶體驗思維與數據分析能力，有助於前端 UI/UX 設計判斷
          </div>
        </div>
        <div class="text-blue-600 font-mono">6mo</div>
      </div>

      <!-- 教育背景 -->
      <div class="flex items-start gap-3 text-caption">
        <span class="text-gray-400 font-mono">2017.09</span>
        <div class="flex-1">
          <div class="text-body-secondary text-text">
            feat(education): 崑山科技大學 公共關係暨廣告學系
          </div>
          <div class="text-body-secondary text-gray-600 mt-1">
            專案企劃與跨領域協作能力培養，奠定了需求分析與團隊溝通的基礎，對軟體開發的協作流程很有幫助
          </div>
        </div>
        <div class="text-gray-500 font-mono">4yr</div>
      </div>
    </div>

    <!-- Panel Footer Actions -->
    <div class="bg-primary-50 px-4 py-2 border-t border-border">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <a
            href="https://github.com/chlorophyll319"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-caption text-primary hover:text-primary-700 transition-colors"
          >
            <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
            <span>GitHub Repository</span>
          </a>
          <span class="text-border">|</span>
          <a
            href="mailto:kcnfoggy54@gmail.com"
            class="flex items-center gap-1 text-caption text-primary hover:text-primary-700 transition-colors"
          >
            <Icon icon="heroicons:envelope" class="w-3 h-3" />
            <span>kcnfoggy54@gmail.com</span>
          </a>
        </div>
        <div class="flex items-center gap-2 text-caption text-gray-500">
          <Icon icon="heroicons:map-pin" class="w-3 h-3" />
          <span>台北市 | Remote Available</span>
          <span class="text-green-500">●</span>
          <span class="text-green-600">Ready to work</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>