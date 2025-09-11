export interface Skill {
  name: string
  description: string
  level: 'intermediate' | 'advanced'
  category: 'frontend' | 'backend' | 'tools' | 'ai'
  icon: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  borderColor: string
  iconColor: string
  skills: Skill[]
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'Vue 3',
    icon: 'logos:vue',
    description: 'Composition API、Vue Router、Pinia 狀態管理',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'HTML5 / CSS3',
    icon: 'logos:html-5',
    description: '語意化標籤、RWD 響應式設計',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'JavaScript (ES6+)',
    icon: 'logos:javascript',
    description: '現代語法、DOM 操作、非同步處理',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    description: 'daisyUI、PrimeVue、Utility-first 設計',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'jQuery',
    icon: 'logos:jquery',
    description: 'DOM 操作、事件處理、動畫效果',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'Markdown-it',
    icon: 'logos:markdown',
    description: 'Markdown 語法解析、文章內容管理',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'Mermaid',
    icon: 'simple-icons:mermaid',
    description: '圖表渲染、流程圖與架構圖表展示',
    level: 'intermediate',
    category: 'frontend'
  },

  // Backend
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    description: 'Express 框架、MVC 架構設計',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'RESTful API',
    icon: 'simple-icons:swagger',
    description: 'API 設計與串接、Postman 測試',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'JWT + Passport.js',
    icon: 'simple-icons:jsonwebtokens',
    description: '使用者登入驗證、權限控管',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: 'logos:mongodb-icon',
    description: 'NoSQL 文檔資料庫、Mongoose ODM',
    level: 'intermediate',
    category: 'backend'
  },

  // Tools
  {
    name: 'Git / GitHub',
    icon: 'logos:git-icon',
    description: '版本控制、GitHub Pages 部署',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'Render',
    icon: 'simple-icons:render',
    description: '後端服務部署、環境管理',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'Postman',
    icon: 'logos:postman-icon',
    description: 'API 測試、請求驗證、除錯工具',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'ESLint / Prettier',
    icon: 'logos:eslint',
    description: '程式碼風格檢查、自動格式化',
    level: 'intermediate',
    category: 'tools'
  },

  // AI 協作
  {
    name: 'ChatGPT',
    icon: 'simple-icons:openai',
    description: '需求拆解、功能設計、錯誤診斷',
    level: 'advanced',
    category: 'ai'
  },
  {
    name: 'Claude Code',
    icon: 'simple-icons:anthropic',
    description: '程式碼重構、架構規劃、除錯協助',
    level: 'advanced',
    category: 'ai'
  },
  {
    name: 'GitHub Copilot',
    icon: 'simple-icons:githubcopilot',
    description: '程式碼補全、函式建議、開發加速',
    level: 'intermediate',
    category: 'ai'
  },
  {
    name: 'Gemini CLI',
    icon: 'simple-icons:googlegemini',
    description: '命令列協作、技術諮詢、輔助開發',
    level: 'intermediate',
    category: 'ai'
  }
]

// Linus 風格：自動顏色分配，消除特殊情況
const SKILL_COLORS = ['primary', 'accent'] as const

const SKILL_CATEGORIES_BASE = [
  {
    id: 'frontend' as const,
    title: 'Frontend',
    icon: 'heroicons:code-bracket'
  },
  {
    id: 'backend' as const,
    title: 'Backend',
    icon: 'heroicons:server'
  },
  {
    id: 'tools' as const,
    title: '開發工具',
    icon: 'heroicons:wrench-screwdriver'
  },
  {
    id: 'ai' as const,
    title: 'AI 協作',
    icon: 'heroicons:cpu-chip'
  }
] as const

// 統一的技能類別數據結構 - 消除顏色分配特殊情況
export const skillCategories: SkillCategory[] = SKILL_CATEGORIES_BASE.map((category, index) => {
  const colorType = SKILL_COLORS[index % 2]
  return {
    ...category,
    borderColor: `border-${colorType}`,
    iconColor: `text-${colorType}`,
    skills: skills.filter(skill => skill.category === category.id)
  }
})