<template>
  <div class="resume-card">
    <!-- 區塊標題 -->
    <h2 class="section-title">關於我</h2>

    <!-- 自傳摘要內容 -->
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <div>
        <h3 class="font-semibold text-gray-800 mb-2">背景轉換</h3>
        <p>畢業後專職於設計與行銷領域，意識到發展瓶頸後轉入前端開發</p>
      </div>

      <div>
        <h3 class="font-semibold text-gray-800 mb-2">學習成果</h3>
        <p>受訓完成後獨自完成個人專題開發，採用 MVC 架構建構 RESTful API</p>
      </div>

      <div>
        <h3 class="font-semibold text-gray-800 mb-2">專長特色</h3>
        <p>具備完整前後端開發能力，特別專精於 AI 協作開發</p>
      </div>

      <div>
        <h3 class="font-semibold text-gray-800 mb-2">未來目標</h3>
        <p>希望在實務中累積技術基礎，成為具備技術厚度與系統規劃能力的前端工程師</p>
      </div>
    </div>

    <!-- 核心優勢標籤 -->
    <div class="mt-6 pt-6 border-t border-gray-100">
      <h3 class="text-lg font-semibold mb-4" style="color: var(--color-primary);">核心優勢</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="highlight in highlights" :key="highlight" 
              class="orange-tag text-sm">
          {{ highlight }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const highlights = [
  '跨領域背景轉換',
  '獨立全端開發',
  'AI 協作專精',
  '系統性分析能力'
]
</script>