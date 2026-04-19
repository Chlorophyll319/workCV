export interface Skill {
  name: string
  description: string
  level: 'intermediate' | 'advanced'
  category: 'languages' | 'frontend' | 'backend' | 'tools'
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
  // Languages
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    description: '型別安全開發、介面定義、嚴格模式',
    level: 'intermediate',
    category: 'languages'
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    description: 'ES6+ 現代語法、非同步處理、DOM 操作',
    level: 'intermediate',
    category: 'languages'
  },
  {
    name: 'HTML5 / CSS3',
    icon: 'logos:html-5',
    description: '語意化標籤、RWD 響應式設計',
    level: 'intermediate',
    category: 'languages'
  },

  // Frontend
  {
    name: 'Vue 3 / Nuxt 3',
    icon: 'logos:nuxt-icon',
    description: 'Composition API、Pinia、SPA/SSG 部署',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'React / Next.js',
    icon: 'logos:nextjs-icon',
    description: 'React 19、Next.js 16、App Router、TanStack Query',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS v4',
    icon: 'logos:tailwindcss-icon',
    description: 'shadcn/ui、daisyUI、Nuxt UI、響應式設計',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'Pinia / Zustand',
    icon: 'heroicons:circle-stack',
    description: '跨框架狀態管理、持久化儲存',
    level: 'intermediate',
    category: 'frontend'
  },
  {
    name: 'PWA',
    icon: 'simple-icons:pwa',
    description: 'Service Worker、離線支援、Web App Manifest',
    level: 'intermediate',
    category: 'frontend'
  },

  // Backend
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    description: 'Express v5、MVC 架構、RESTful API 設計',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'Express.js',
    icon: 'simple-icons:express',
    description: '中介層設計、路由管理、API 代理層',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'MongoDB / Mongoose',
    icon: 'logos:mongodb-icon',
    description: 'NoSQL 資料庫、ODM、ERD 設計',
    level: 'intermediate',
    category: 'backend'
  },
  {
    name: 'JWT + Passport.js',
    icon: 'simple-icons:jsonwebtokens',
    description: '身份驗證、權限控管、OTP 流程',
    level: 'intermediate',
    category: 'backend'
  },

  // Tools
  {
    name: 'Git / GitHub Actions',
    icon: 'logos:git-icon',
    description: '版本控制、CI/CD、自動部署 GitHub Pages',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'Vite',
    icon: 'logos:vitejs',
    description: '快速構建、打包優化、插件生態',
    level: 'intermediate',
    category: 'tools'
  },
  {
    name: 'Storybook',
    icon: 'logos:storybook-icon',
    description: '元件開發文件化、視覺化測試',
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
]

// Linus 風格：自動顏色分配，消除特殊情況
const SKILL_COLORS = ['primary', 'accent'] as const

const SKILL_CATEGORIES_BASE = [
  {
    id: 'languages' as const,
    title: 'Languages',
    icon: 'heroicons:code-bracket-square'
  },
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
    title: 'Tools & Platforms',
    icon: 'heroicons:wrench-screwdriver'
  },
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
