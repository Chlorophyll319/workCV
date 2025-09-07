export interface Project {
  id: number
  name: string
  type: string
  description: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  icon: string
  status: string
  metrics: Record<string, string>
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: '職訓資訊分享網站',
    type: '全端專案',
    description: '具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理。重點練習 CRUD 操作與使用者權限管理。',
    techStack: ['Vue 3', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Markdown-it', 'Mermaid'],
    demoUrl: '#',
    githubUrl: '#',
    icon: 'i-ph-graduation-cap',
    status: '已完成',
    metrics: {
      lighthouse: '92',
      loading: '1.2s',
      users: '50+',
      uptime: '99.8%'
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
    demoUrl: '#',
    githubUrl: '#',
    icon: 'i-ph-user-circle',
    status: '開發中',
    metrics: {
      lighthouse: '98',
      performance: '95',
      loading: '0.8s',
      users: '進行中'
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
    githubUrl: '#',
    icon: 'i-ph-credit-card',
    status: '已完成',
    metrics: {
      apiResponse: '<100ms',
      uptime: '99.9%',
      lighthouse: '無',
      loading: '即時'
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