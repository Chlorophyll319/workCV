<template>
  <section class="skills-section h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode File Tab Design -->
      <div
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <!-- File Tab -->
        <Tab :file="skillsFile" @close="handleTabClose" />

        <!-- Section Title -->
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold mb-2 text-primary">技術技能</h2>
          <div class="w-12 h-1 mx-auto rounded-full bg-accent"></div>
        </div>

        <!-- Skills Categories Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1"
        >
          <!-- Frontend Category -->
          <div
            class="min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-primary p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Icon icon="heroicons:code-bracket" class="w-4 h-4 text-primary" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">Frontend</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div
                v-for="skill in frontendSkills"
                :key="skill.name"
                class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0"
              >
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Backend Category -->
          <div
            class="min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-accent p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Icon icon="heroicons:server" class="w-4 h-4 text-accent" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">Backend</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div
                v-for="skill in backendSkills"
                :key="skill.name"
                class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0"
              >
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-accent" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Tools Category -->
          <div
            class="min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-primary p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Icon icon="heroicons:wrench-screwdriver" class="w-4 h-4 text-primary" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">開發工具</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div
                v-for="skill in toolsSkills"
                :key="skill.name"
                class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0"
              >
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- AI Category -->
          <div
            class="min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 border-accent p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Icon icon="heroicons:cpu-chip" class="w-4 h-4 text-accent" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">AI 協作</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div
                v-for="skill in aiSkills"
                :key="skill.name"
                class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0"
              >
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4 text-accent" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import Tab from '../Tab.vue';
import { sectionsFiles } from '../../assets/data/fileSystem';

// 找到對應的 skills 文件
const skillsFile = computed(() => {
  return sectionsFiles.find((file) => file.section === 'skills') || sectionsFiles[3];
});

const handleTabClose = () => {
  // Tab 關閉邏輯
  console.log('Skills tab closed');
};

// Frontend 技能
const frontendSkills = [
  {
    name: 'Vue 3',
    icon: 'logos:vue',
    description: 'Composition API、Vue Router、Pinia 狀態管理',
  },
  {
    name: 'HTML5 / CSS3',
    icon: 'logos:html-5',
    description: '語意化標籤、RWD 響應式設計',
  },
  {
    name: 'JavaScript (ES6+)',
    icon: 'logos:javascript',
    description: '現代語法、DOM 操作、非同步處理',
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    description: 'daisyUI、PrimeVue、Utility-first 設計',
  },
  {
    name: 'jQuery',
    icon: 'logos:jquery',
    description: 'DOM 操作、事件處理、動畫效果',
  },
  {
    name: 'Markdown-it',
    icon: 'logos:markdown',
    description: 'Markdown 語法解析、文章內容管理',
  },
  {
    name: 'Mermaid',
    icon: 'simple-icons:mermaid',
    description: '圖表渲染、流程圖與架構圖表展示',
  },
];

// Backend 技能
const backendSkills = [
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    description: 'Express 框架、MVC 架構設計',
  },
  {
    name: 'RESTful API',
    icon: 'simple-icons:swagger',
    description: 'API 設計與串接、Postman 測試',
  },
  {
    name: 'JWT + Passport.js',
    icon: 'simple-icons:jsonwebtokens',
    description: '使用者登入驗證、權限控管',
  },
  {
    name: 'MongoDB',
    icon: 'logos:mongodb-icon',
    description: 'NoSQL 文檔資料庫、Mongoose ODM',
  },
];

// 開發工具與流程
const toolsSkills = [
  {
    name: 'Git / GitHub',
    icon: 'logos:git-icon',
    description: '版本控制、GitHub Pages 部署',
  },
  {
    name: 'Render',
    icon: 'simple-icons:render',
    description: '後端服務部署、環境管理',
  },
  {
    name: 'Postman',
    icon: 'logos:postman-icon',
    description: 'API 測試、請求驗證、除錯工具',
  },
  {
    name: 'ESLint / Prettier',
    icon: 'logos:eslint',
    description: '程式碼風格檢查、自動格式化',
  },
];

// AI 協作技能
const aiSkills = [
  {
    name: 'ChatGPT',
    icon: 'simple-icons:openai',
    description: '需求拆解、功能設計、錯誤診斷',
  },
  {
    name: 'Claude Code',
    icon: 'simple-icons:anthropic',
    description: '程式碼重構、架構規劃、除錯協助',
  },
  {
    name: 'GitHub Copilot',
    icon: 'simple-icons:githubcopilot',
    description: '程式碼補全、函式建議、開發加速',
  },
  {
    name: 'Gemini CLI',
    icon: 'simple-icons:googlegemini',
    description: '命令列協作、技術諮詢、輔助開發',
  },
];
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
