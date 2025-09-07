<template>
  <section class="skills-section h-full p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- Section Title -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-vscode-text-white font-chinese mb-2">
          技術技能
        </h2>
        <div class="w-12 h-1 bg-vscode-purple mx-auto rounded-full"></div>
      </div>

      <!-- Skills Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
        
        <!-- Frontend Category -->
        <div class="min-h-[280px] lg:min-h-[250px] md:min-h-auto flex flex-col bg-vscode-card rounded-xl border border-vscode-border p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-blue hover:bg-gradient-to-br hover:from-vscode-card/90 hover:to-vscode-card/95">
          <div class="category-header mb-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 rounded-lg bg-vscode-blue/10 flex items-center justify-center">
                <UIcon name="i-ph-monitor" class="w-4 h-4 text-vscode-blue" />
              </div>
              <h3 class="text-lg font-bold text-vscode-text-white font-chinese">Frontend</h3>
            </div>
          </div>
          <div class="flex-1 space-y-3">
            <div v-for="skill in frontendSkills" :key="skill.name" class="pb-2 border-b border-b-vscode-border/30 last:border-b-0 last:pb-0">
              <div class="flex items-center gap-2 mb-1">
                <UIcon :name="skill.icon" class="w-4 h-4 text-vscode-blue" />
                <span class="text-sm font-medium text-vscode-text-white">{{ skill.name }}</span>
              </div>
              <p class="text-xs text-vscode-text-secondary leading-relaxed text-left">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <!-- Backend Category -->
        <div class="min-h-[280px] lg:min-h-[250px] md:min-h-auto flex flex-col bg-vscode-card rounded-xl border border-vscode-border p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-green hover:bg-gradient-to-br hover:from-vscode-card/90 hover:to-vscode-card/95">
          <div class="category-header mb-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 rounded-lg bg-vscode-green/10 flex items-center justify-center">
                <UIcon name="i-ph-database" class="w-4 h-4 text-vscode-green" />
              </div>
              <h3 class="text-lg font-bold text-vscode-text-white font-chinese">Backend</h3>
            </div>
          </div>
          <div class="flex-1 space-y-3">
            <div v-for="skill in backendSkills" :key="skill.name" class="pb-2 border-b border-b-vscode-border/30 last:border-b-0 last:pb-0">
              <div class="flex items-center gap-2 mb-1">
                <UIcon :name="skill.icon" class="w-4 h-4 text-vscode-green" />
                <span class="text-sm font-medium text-vscode-text-white">{{ skill.name }}</span>
              </div>
              <p class="text-xs text-vscode-text-secondary leading-relaxed text-left">{{ skill.description }}</p>
            </div>
          </div>
        </div>


        <!-- Tools Category -->
        <div class="min-h-[280px] lg:min-h-[250px] md:min-h-auto flex flex-col bg-vscode-card rounded-xl border border-vscode-border p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-yellow hover:bg-gradient-to-br hover:from-vscode-card/90 hover:to-vscode-card/95">
          <div class="category-header mb-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 rounded-lg bg-vscode-yellow/10 flex items-center justify-center">
                <UIcon name="i-ph-gear-six" class="w-4 h-4 text-vscode-yellow" />
              </div>
              <h3 class="text-lg font-bold text-vscode-text-white font-chinese">開發工具</h3>
            </div>
          </div>
          <div class="flex-1 space-y-3">
            <div v-for="skill in toolsSkills" :key="skill.name" class="pb-2 border-b border-b-vscode-border/30 last:border-b-0 last:pb-0">
              <div class="flex items-center gap-2 mb-1">
                <UIcon :name="skill.icon" class="w-4 h-4 text-vscode-yellow" />
                <span class="text-sm font-medium text-vscode-text-white">{{ skill.name }}</span>
              </div>
              <p class="text-xs text-vscode-text-secondary leading-relaxed text-left">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <!-- AI 協作 Category -->
        <div class="min-h-[280px] lg:min-h-[250px] md:min-h-auto flex flex-col bg-vscode-card rounded-xl border border-vscode-border p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-purple hover:bg-gradient-to-br hover:from-vscode-card/90 hover:to-vscode-card/95">
          <div class="category-header mb-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 rounded-lg bg-vscode-purple/10 flex items-center justify-center">
                <UIcon name="i-ph-robot" class="w-4 h-4 text-vscode-purple" />
              </div>
              <h3 class="text-lg font-bold text-vscode-text-white font-chinese">AI 協作</h3>
            </div>
          </div>
          <div class="flex-1 space-y-3">
            <div v-for="skill in aiSkills" :key="skill.name" class="pb-2 border-b border-b-vscode-border/30 last:border-b-0 last:pb-0">
              <div class="flex items-center gap-2 mb-1">
                <UIcon :name="skill.icon" class="w-4 h-4 text-vscode-purple" />
                <span class="text-sm font-medium text-vscode-text-white">{{ skill.name }}</span>
              </div>
              <p class="text-xs text-vscode-text-secondary leading-relaxed text-left">{{ skill.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Frontend 技能
const frontendSkills = [
  {
    name: 'Vue 3',
    icon: 'i-logos-vue',
    description: 'Composition API、Vue Router、Pinia 狀態管理'
  },
  {
    name: 'HTML5 / CSS3',
    icon: 'i-ph-code',
    description: '語意化標籤、RWD 響應式設計'
  },
  {
    name: 'JavaScript (ES6+)',
    icon: 'i-logos-javascript',
    description: '現代語法、DOM 操作、非同步處理'
  },
  {
    name: 'Tailwind CSS',
    icon: 'i-logos-tailwindcss-icon',
    description: 'daisyUI、PrimeVue、Utility-first 設計'
  },
  {
    name: 'jQuery',
    icon: 'i-ph-function',
    description: 'DOM 操作、事件處理、動畫效果'
  },
  {
    name: 'Markdown-it',
    icon: 'i-ph-file-text',
    description: 'Markdown 語法解析、文章內容管理'
  },
  {
    name: 'Mermaid',
    icon: 'i-ph-chart-bar',
    description: '圖表渲染、流程圖與架構圖表展示'
  }
]

// Backend 技能
const backendSkills = [
  {
    name: 'Node.js',
    icon: 'i-logos-nodejs-icon',
    description: 'Express 框架、MVC 架構設計'
  },
  {
    name: 'RESTful API',
    icon: 'i-ph-globe',
    description: 'API 設計與串接、Postman 測試'
  },
  {
    name: 'JWT + Passport.js',
    icon: 'i-ph-lock',
    description: '使用者登入驗證、權限控管'
  },
  {
    name: 'MongoDB',
    icon: 'i-logos-mongodb-icon',
    description: 'NoSQL 文檔資料庫、Mongoose ODM'
  }
]


// 開發工具與流程
const toolsSkills = [
  {
    name: 'Git / GitHub',
    icon: 'i-logos-git-icon',
    description: '版本控制、GitHub Pages 部署'
  },
  {
    name: 'Render',
    icon: 'i-ph-cloud-arrow-up',
    description: '後端服務部署、環境管理'
  },
  {
    name: 'Postman',
    icon: 'i-logos-postman-icon',
    description: 'API 測試、請求驗證、除錯工具'
  },
  {
    name: 'ESLint / Prettier',
    icon: 'i-ph-code',
    description: '程式碼風格檢查、自動格式化'
  }
]

// AI 協作技能
const aiSkills = [
  {
    name: 'ChatGPT',
    icon: 'i-ph-chat-circle',
    description: '需求拆解、功能設計、錯誤診斷'
  },
  {
    name: 'Claude Code',
    icon: 'i-ph-terminal-window',
    description: '程式碼重構、架構規劃、除錯協助'
  },
  {
    name: 'GitHub Copilot',
    icon: 'i-ph-robot',
    description: '程式碼補全、函式建議、開發加速'
  },
  {
    name: 'Gemini CLI',
    icon: 'i-ph-sparkle',
    description: '命令列協作、技術諮詢、輔助開發'
  }
]
</script>

