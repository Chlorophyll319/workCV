// Linus 風格：統一 metrics 結構，消除特殊情況
interface ProjectMetrics {
  score?: number          // 統一評分 0-100
  performance: string     // 關鍵效能指標
  availability?: string   // 可用性指標
}

export interface Project {
  id: number
  name: string
  type: string
  description: string
  techStack: string[]
  demoUrl?: string | null
  githubUrl?: string | null
  icon: string
  status: string
  metrics: ProjectMetrics
  highlights: string[]
}

// UI 常數定義
export const PROJECT_CONSTANTS = {
  colors: {
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)'
  },
  labels: {
    techStack: '技術棧',
    metrics: '效能指標',
    demo: 'Demo',
    github: 'GitHub'
  },
  metricLabels: {
    score: '綜合評分',
    performance: '關鍵指標',
    availability: '可用性'
  }
}

export const projects: Project[] = [
  {
    id: 1,
    name: '職訓資訊分享網站',
    type: '全端專案',
    description: '具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理。重點練習 CRUD 操作與使用者權限管理。',
    techStack: ['Vue 3', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Markdown-it', 'Mermaid'],
    demoUrl: null,
    githubUrl: null,
    icon: 'i-ph-graduation-cap',
    status: '已完成',
    metrics: {
      score: 92,
      performance: '載入 1.2s',
      availability: '50+ 用戶, 99.8% 運行'
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
    status: '開發中',
    metrics: {
      score: 98,
      performance: '載入 0.8s',
      availability: '開發中'
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
    status: '已完成',
    metrics: {
      performance: 'API <100ms',
      availability: '99.9% 運行'
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