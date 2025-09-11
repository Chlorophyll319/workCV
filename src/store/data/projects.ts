interface ProjectMetrics {
  lighthouse?: number | null     // Lighthouse 評分
  coreFeatures: string | null    // 核心功能描述
  scale?: string | null          // 專案規模
}

export interface Project {
  id: number
  name: string
  type: string | null
  description: string | null
  techStack: string[] | null
  demoUrl?: string | null
  githubUrl?: string | null
  icon: string | null
  status: string | null
  metrics: ProjectMetrics | null
  highlights: string[] | null
}

// UI 常數定義
export const PROJECT_CONSTANTS = {
  colors: {
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)'
  },
  labels: {
    techStack: '開發技術',
    metrics: '效能指標',
    demo: 'Demo',
    github: 'GitHub'
  },
  metricLabels: {
    lighthouse: 'Lighthouse 評分',
    coreFeatures: '核心功能',
    scale: '專案規模'
  }
}

export const projects: Project[] = [
  {
    id: 1,
    name: '職訓資訊分享網站',
    type: '全端專案',
    description: '具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理。重點練習 CRUD 操作與使用者權限管理。',
    techStack: ['Vue 3', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Markdown-it', 'Mermaid'],
    demoUrl: 'https://chlorophyll319.github.io/frontPrWebOnlineVer-vite-project/#/',
    githubUrl: 'https://github.com/Chlorophyll319/frontPrWebOnlineVer-vite-project',
    icon: 'i-ph-graduation-cap',
    status: '已完成',
    metrics: {
      lighthouse: 92,
      coreFeatures: '用戶管理、文章發布、FAQ 系統、成果展示',
      scale: '7個頁面、12支 API、雙權限管理'
    },
    highlights: [
      '完整前後台分離架構',
      'MongoDB 資料庫設計與優化',
      'JWT 身份驗證系統',
      'Markdown 文章編輯器整合',
      '響應式 RWD 設計'
    ]
  },
  {
    id: 2,
    name: '個人履歷網站',
    type: '前端專案',
    description: 'VSCode 主題風格的一頁式個人履歷網站，作為技術能力展示與作品集平台。專注於優秀的使用者體驗與 SEO 優化。',
    techStack: ['Vue 3', 'Nuxt UI', 'Tailwind v4', '@vueuse/head', 'TypeScript'],
    demoUrl: null,
    githubUrl: null,
    icon: 'i-ph-user-circle',
    status: '已完成',
    metrics: {
      lighthouse: 98,
      coreFeatures: '個人資訊展示、技能標籤、作品集、SEO 優化',
      scale: '5個組件、一頁式設計、RWD 支援'
    },
    highlights: [
      'VSCode 主題風格設計',
      'Tailwind v4 CSS-first 配置',
      '完整 SEO meta 設定',
      'TypeScript 類型安全',
      '模組化組件架構'
    ]
  },
  {
    id: 3,
    name: 'PayMock 模擬器',
    type: '後端練習',
    description: '以 NewebPay 為範例的小型付款流程模擬器，練習金流 API 串接、加密參數生成與 callback 回傳解析。專注於資料安全與 API 設計。',
    techStack: ['Node.js', 'Express', 'NewebPay API', 'SHA256 加密'],
    demoUrl: null,
    githubUrl: null,
    icon: 'i-ph-credit-card',
    status: '開發中',
    metrics: {
      lighthouse: null,
      coreFeatures: '金流 API 串接、加密參數生成、Callback 處理',
      scale: '3個 API 端點、SHA256 加密、Express 中間件'
    },
    highlights: [
      'NewebPay 金流 API 串接',
      'SHA256 安全加密驗證',
      'callback 回調處理機制',
      'Express 中間件開發',
      'API 錯誤處理與日誌'
    ]
  }
]