<template>
  <section class="skills-section h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode File Tab Design -->
      <div 
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <div class="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary">
          <div class="flex items-center gap-3 px-4 py-2 rounded-t-lg bg-primary text-white">
            <Icon icon="heroicons:cog-6-tooth" class="w-4 h-4" />
            <span class="font-mono text-sm font-semibold">skills-config.yaml</span>
            <Icon icon="heroicons:x-mark" class="w-3 h-3 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors" />
          </div>
        </div>

        <!-- Section Title -->
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold mb-2 text-primary">
            技術技能
          </h2>
          <div class="w-12 h-1 mx-auto rounded-full bg-accent"></div>
        </div>

        <!-- Skills Categories Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 flex-1">
          
          <!-- Frontend Category -->
          <div class="min-h-[250px] sm:min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-primary p-3 sm:p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-primary bg-opacity-10">
                  <Icon icon="heroicons:code-bracket" class="w-4 h-4 text-primary" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">Frontend</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div v-for="skill in frontendSkills" :key="skill.name" class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">{{ skill.description }}</p>
              </div>
            </div>
          </div>

          <!-- Backend Category -->
          <div class="min-h-[250px] sm:min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-accent p-3 sm:p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-accent bg-opacity-10">
                  <Icon icon="heroicons:server" class="w-4 h-4 text-accent" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">Backend</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div v-for="skill in backendSkills" :key="skill.name" class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-accent" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">{{ skill.description }}</p>
              </div>
            </div>
          </div>

          <!-- Tools Category -->
          <div class="min-h-[250px] sm:min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-primary p-3 sm:p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-primary bg-opacity-10">
                  <Icon icon="heroicons:wrench-screwdriver" class="w-4 h-4 text-primary" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">開發工具</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div v-for="skill in toolsSkills" :key="skill.name" class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">{{ skill.description }}</p>
              </div>
            </div>
          </div>

          <!-- AI Category -->
          <div class="min-h-[250px] sm:min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-accent p-3 sm:p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-accent bg-opacity-10">
                  <Icon icon="heroicons:cpu-chip" class="w-4 h-4 text-accent" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">AI 協作</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div v-for="skill in aiSkills" :key="skill.name" class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0">
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-accent" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">{{ skill.description }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Frontend 技能
const frontendSkills = [
  {
    name: 'Vue 3',
    icon: 'heroicons:code-bracket',
    description: 'Composition API、Vue Router、Pinia 狀態管理'
  },
  {
    name: 'HTML5 / CSS3',
    icon: 'heroicons:code-bracket',
    description: '語意化標籤、RWD 響應式設計'
  },
  {
    name: 'JavaScript (ES6+)',
    icon: 'heroicons:bolt',
    description: '現代語法、DOM 操作、非同步處理'
  },
  {
    name: 'Tailwind CSS',
    icon: 'heroicons:paint-brush',
    description: 'daisyUI、PrimeVue、Utility-first 設計'
  },
  {
    name: 'jQuery',
    icon: 'heroicons:variable',
    description: 'DOM 操作、事件處理、動畫效果'
  },
  {
    name: 'Markdown-it',
    icon: 'heroicons:document-text',
    description: 'Markdown 語法解析、文章內容管理'
  },
  {
    name: 'Mermaid',
    icon: 'heroicons:chart-bar-square',
    description: '圖表渲染、流程圖與架構圖表展示'
  }
]

// Backend 技能
const backendSkills = [
  {
    name: 'Node.js',
    icon: 'heroicons:server-stack',
    description: 'Express 框架、MVC 架構設計'
  },
  {
    name: 'RESTful API',
    icon: 'heroicons:globe-alt',
    description: 'API 設計與串接、Postman 測試'
  },
  {
    name: 'JWT + Passport.js',
    icon: 'heroicons:lock-closed',
    description: '使用者登入驗證、權限控管'
  },
  {
    name: 'MongoDB',
    icon: 'heroicons:circle-stack',
    description: 'NoSQL 文檔資料庫、Mongoose ODM'
  }
]

// 開發工具與流程
const toolsSkills = [
  {
    name: 'Git / GitHub',
    icon: 'heroicons:code-bracket-square',
    description: '版本控制、GitHub Pages 部署'
  },
  {
    name: 'Render',
    icon: 'heroicons:cloud-arrow-up',
    description: '後端服務部署、環境管理'
  },
  {
    name: 'Postman',
    icon: 'heroicons:paper-airplane',
    description: 'API 測試、請求驗證、除錯工具'
  },
  {
    name: 'ESLint / Prettier',
    icon: 'heroicons:code-bracket-square',
    description: '程式碼風格檢查、自動格式化'
  }
]

// AI 協作技能
const aiSkills = [
  {
    name: 'ChatGPT',
    icon: 'heroicons:chat-bubble-left-right',
    description: '需求拆解、功能設計、錯誤診斷'
  },
  {
    name: 'Claude Code',
    icon: 'heroicons:command-line',
    description: '程式碼重構、架構規劃、除錯協助'
  },
  {
    name: 'GitHub Copilot',
    icon: 'heroicons:cpu-chip',
    description: '程式碼補全、函式建議、開發加速'
  },
  {
    name: 'Gemini CLI',
    icon: 'heroicons:sparkles',
    description: '命令列協作、技術諮詢、輔助開發'
  }
]
</script>

<style scoped>
/* Remove background since it's handled by parent */
.skills-section {
  background: transparent;
}

/* Enhanced hover effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Category card hover effects */
.min-h-\[280px\]:hover {
  transform: translateY(-4px);
}
</style>