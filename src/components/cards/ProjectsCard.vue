<template>
  <div class="resume-card">
    <!-- 區塊標題 -->
    <h2 class="section-title">專案成就</h2>

    <!-- 專案列表 -->
    <div class="space-y-8">
      <!-- 專案1: 職訓資訊分享網站 -->
      <div class="project-border">
        <div class="mb-3">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">專題作品｜職訓資訊分享網站</h3>
          <p class="text-sm text-gray-500">(2025/8~2025/9)</p>
        </div>
        <p class="text-gray-700 mb-3 leading-relaxed">
          獨立開發具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理，並整合 Markdown 與 Mermaid 語法渲染。
        </p>
        <div class="mb-3">
          <div class="mb-2">
            <span class="font-semibold text-gray-800">前端：</span>
            <span class="text-sm text-gray-700">Vue 3 + Tailwind CSS（前台 daisyUI，後台 PrimeVue）、Markdown 支援、highlight.js 程式碼高亮、Mermaid 圖表渲染、內容模組管理與權限控管</span>
          </div>
          <div>
            <span class="font-semibold text-gray-800">後端：</span>
            <span class="text-sm text-gray-700">Node.js + Express + MongoDB、MVC 架構、RESTful API、資料表設計與 ERD、JWT + Passport.js 驗證機制</span>
          </div>
        </div>
      </div>

      <!-- 專案2: 個人履歷網站 -->
      <div class="project-border">
        <div class="mb-3">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">個人履歷網站｜一頁式 Vue 技術簡介與作品展示頁</h3>
          <p class="text-sm text-gray-500">(2025/9~2025/9)</p>
        </div>
        <p class="text-gray-700 mb-3 leading-relaxed">
          開發一頁式個人履歷網站，作為技術能力展示與作品集平台，專注於清晰的資訊架構與優秀的使用者體驗。
        </p>
        <div class="mb-3">
          <div class="mb-2">
            <span class="font-semibold text-gray-800">技術架構：</span>
            <span class="text-sm text-gray-700">Vue3 + Tailwind CSS + NuxtUI、Nuxt3 SSG 靜態生成、響應式設計</span>
          </div>
          <div class="mb-2">
            <span class="font-semibold text-gray-800">功能模組：</span>
            <span class="text-sm text-gray-700">模組化元件設計、NuxtUI 元件整合、外部連結導流與 GitHub 整合</span>
          </div>
          <div>
            <span class="font-semibold text-gray-800">使用者體驗：</span>
            <span class="text-sm text-gray-700">一頁式設計、跨裝置響應式、頁面載入優化與 Core Web Vitals</span>
          </div>
        </div>
      </div>

      <!-- 專案3: PayMock 模擬器 -->
      <div class="project-border">
        <div class="mb-3">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">小型 Demo｜PayMock 模擬器（金流串接流程展示）</h3>
          <p class="text-sm text-gray-500">(2025/9~2025/9)</p>
        </div>
        <p class="text-gray-700 mb-3 leading-relaxed">
          以 NewebPay 為範例製作的小型付款流程模擬器，練習金流 API 串接、加密參數生成與 callback 回傳解析。
        </p>
        <div class="mb-3">
          <div class="mb-2">
            <span class="font-semibold text-gray-800">技術重點：</span>
            <span class="text-sm text-gray-700">Node.js + Express 串接藍新金流測試 API、SHA256 加密驗證、資料包封裝與回傳處理</span>
          </div>
          <div>
            <span class="font-semibold text-gray-800">學習成果：</span>
            <span class="text-sm text-gray-700">熟悉金流串接關鍵邏輯與 request-response 流程</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script needed for this component
</script>