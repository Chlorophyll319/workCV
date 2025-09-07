export interface Skill {
  name: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  category: 'frontend' | 'backend' | 'tools' | 'ai'
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'Vue 3',
    description: 'Composition API、Vue Router、Pinia 狀態管理',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    description: '響應式設計、utility-first 開發模式',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    description: 'ES6+、非同步處理、DOM 操作',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    description: '型別定義、介面設計、型別安全',
    level: 'beginner',
    category: 'frontend'
  },

  // Backend
  {
    name: 'Node.js',
    description: 'Express 框架、中介軟體設計',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    description: 'Mongoose ODM、資料庫設計、查詢最佳化',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'RESTful API',
    description: 'API 設計、JWT 驗證、錯誤處理',
    level: 'intermediate',
    category: 'backend'
  },

  // Tools
  {
    name: 'Git',
    description: '版本控制、分支管理、協作開發',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'Vite',
    description: '建構工具、熱重載、套件最佳化',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'ESLint / Prettier',
    description: '程式碼品質檢查、格式化規範',
    level: 'intermediate',
    category: 'tools'
  },

  // AI 協作
  {
    name: 'ChatGPT',
    description: '需求分析、程式碼生成、錯誤排查',
    level: 'advanced',
    category: 'ai'
  },
  {
    name: 'Claude Code',
    description: '程式碼重構、架構設計、功能實作',
    level: 'advanced',
    category: 'ai'
  },
  {
    name: 'GitHub Copilot',
    description: '輔助開發、提升程式碼品質',
    level: 'intermediate',
    category: 'ai'
  }
]

export const skillCategories = {
  frontend: { name: 'Frontend', color: 'blue', icon: 'ph:code' },
  backend: { name: 'Backend', color: 'green', icon: 'ph:database' },
  tools: { name: 'Tools', color: 'yellow', icon: 'ph:wrench' },
  ai: { name: 'AI 協作', color: 'purple', icon: 'ph:robot' }
} as const