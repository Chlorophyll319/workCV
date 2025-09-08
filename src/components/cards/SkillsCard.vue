<template>
  <div class="resume-card">
    <!-- 區塊標題 -->
    <h2 class="section-title">專長</h2>

    <!-- 四大技能分類 -->
    <div class="space-y-6">
      <!-- 前端技術 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-800">前端技術</h3>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>• HTML5 / CSS3 / RWD 響應式設計</li>
          <li>• Tailwind CSS、daisyUI、PrimeVue</li>
          <li>• JavaScript (ES6+) / jQuery</li>
          <li>• Vue 3（Composition API、Vue Router、Pinia）</li>
          <li>• Markdown-it / highlight.js / Mermaid 語法渲染</li>
        </ul>
      </div>

      <!-- 後端技術 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-800">後端技術</h3>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>• Node.js / Express.js</li>
          <li>• MongoDB / Mongoose</li>
          <li>• RESTful API 設計與串接</li>
          <li>• JWT + Passport.js 登入驗證</li>
        </ul>
      </div>

      <!-- 開發工具與流程 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-800">開發工具與流程</h3>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>• Git / GitHub（含 GitHub Pages 部署）</li>
          <li>• Render（後端部署）</li>
          <li>• Postman（API 測試）</li>
          <li>• ESLint / Prettier（程式碼風格檢查）</li>
        </ul>
      </div>

      <!-- AI 協作與輔助開發 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-800">AI 協作與輔助開發</h3>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>• 使用 ChatGPT、ClaudeCode、Gemini CLI、Gemini Assist、GitHub Copilot</li>
          <li>• 習慣與 AI 協作完成需求拆解、功能設計與除錯流程</li>
          <li>• 擅長運用提示詞引導 AI，提升開發效率與邏輯清晰度</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script needed for this component
</script>