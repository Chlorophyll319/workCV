interface ProjectMetrics {
  // 已完成專案欄位
  lighthouse?: string | null     // Lighthouse 評分（前端專案）
  coreFeatures?: string | null   // 核心功能描述（已完成專案）
  scale?: string | null          // 專案規模
  duration?: string | null       // 開發時間
  
  // 未完成專案欄位
  apiPerformance?: string | null // API 效能評測（後端專案）
  currentProgress?: string | null // 開發進度
  availableFeatures?: string | null // 可用功能
  projectScope?: string | null   // 專案架構
  timeline?: string | null       // 預計完成
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
    // 已完成專案標籤
    lighthouse: 'Lighthouse 評分',
    coreFeatures: '核心功能',
    scale: '專案規模',
    duration: '開發時間',
    // 未完成專案標籤
    apiPerformance: 'API 效能評測',
    currentProgress: '開發進度',
    availableFeatures: '可用功能',
    projectScope: '專案架構',
    timeline: '預計完成'
  }
}

export const projects: Project[] = [
  {
    id: 1,
    name: '職訓資訊分享網站',
    type: '全端專案',
    description: '獨立開發具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理，並整合 Markdown 與 Mermaid 語法渲染。專注於完整的 CRUD 操作與使用者權限管理系統。',
    techStack: ['Vue 3', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Passport.js', 'Tailwind CSS', 'PrimeVue', 'daisyUI', 'Markdown-it', 'Mermaid', 'highlight.js'],
    demoUrl: 'https://chlorophyll319.github.io/frontPrWebOnlineVer-vite-project/#/',
    githubUrl: 'https://github.com/Chlorophyll319/frontPrWebOnlineVer-vite-project',
    icon: 'i-ph-graduation-cap',
    status: '已完成',
    metrics: {
      lighthouse: '效能 98',
      coreFeatures: 'JWT 身份驗證、內容管理系統、檔案路由、Markdown 渲染',
      scale: '前後台雙布局、12支 RESTful API、MVC 架構、ERD 資料庫設計',
      duration: '45 days'
    },
    highlights: [
      '前後台分離架構：前台 daisyUI + 後台 PrimeVue 雙 UI 系統',
      'RESTful API 設計：採用 MVC 架構與 Express.js 建構後端服務',
      'MongoDB 資料庫：使用 Mongoose ODM，完整 ERD 設計與資料關聯',
      'JWT + Passport.js 認證：完整的登入驗證與權限控管機制',
      'Markdown CMS：支援程式碼高亮、數學公式與 Mermaid 圖表渲染',
      '檔案路由系統：使用 unplugin-vue-router 自動生成路由配置'
    ]
  },
  {
    id: 2,
    name: '個人履歷網站',
    type: '前端專案',
    description: 'VSCode 主題風格的一頁式個人履歷網站，展現在 UX 創新與技術規範之間的平衡能力。選擇實現複雜的互動式界面來展現交互設計技能，同時確保 SEO 優化與最佳實踐符合業界標準，體現對使用者體驗與技術品質並重的開發理念。',
    techStack: ['Vue 3', 'Vite', 'Nuxt UI', 'Tailwind v4', '@vueuse/head', '@vueuse/core', 'TypeScript', 'Pinia', 'Vue Router', '@iconify/vue'],
    demoUrl: 'https://chlorophyll319.github.io/workCV/#/',
    githubUrl: 'https://github.com/Chlorophyll319/workCV',
    icon: 'i-ph-user-circle',
    status: '已完成',
    metrics: {
      lighthouse: 'SEO 91 • 最佳做法 100',
      coreFeatures: '技術決策平衡、SEO 優化、互動式 UI、型別安全',
      scale: '7個核心組件、複雜狀態管理、TypeScript 100% 覆蓋、響應式設計',
      duration: '10 days'
    },
    highlights: [
      'VSCode 風格 UI：完整實現拖拽調整、響應式側邊欄等複雜互動功能',
      '技術決策展示：在創意實現與技術規範間找到最佳平衡點',
      'SEO 優化達標：91/100 分數確保搜尋引擎友好與社群分享最佳化',
      '最佳實踐滿分：100/100 展現對 Web 標準與開發規範的深度理解',
      'Nuxt UI + Tailwind v4：整合最新技術棧打造統一設計語言',
      '複雜狀態管理：實現拖拽、響應式佈局與多層級組件通信',
      'TypeScript 型別安全：全專案 100% 覆蓋，確保程式碼品質與維護性',
      '使用者體驗優先：創意互動設計兼顧無障礙設計與跨裝置相容性'
    ]
  },
  {
    id: 3,
    name: 'LINE 機器人黛栗',
    type: '聊天機器人',
    description: '全功能 LINE 聊天機器人，採用 Node.js + Express 架構，深度整合台灣政府開放資料 30+ API。提供即時天氣預報、空氣品質監測、地震速報、放假日查詢、淺草籤詩抽籤與智能對話系統。具備完整的模組化設計、統一錯誤處理機制與人性化互動體驗。',
    techStack: ['Node.js', 'Express.js', 'LINE Messaging API', '氣象局開放資料API', 'MongoDB', 'JSDoc','RESTful API'],
    demoUrl: 'https://line.me/R/ti/p/@142cmsyc',
    githubUrl: 'https://github.com/Chlorophyll319/Daily-LINEBot',
    icon: 'i-ph-chat-circle',
    status: '開發中',
    metrics: {
      currentProgress: '30+ OpenData整合完成、MongoDB架構建立、API響應<2s',
      availableFeatures: '天氣查詢、空品監測、地震速報、智能對話、LINE選單',
      projectScope: '7模組系統、統一錯誤處理、完整JSDoc文件',
      timeline: '核心功能完善中，預計2週內完成部署優化'
    },
    highlights: [
      '氣象局 API 整合：一週/三天天氣預報、即時觀測、天氣警報、熱傷害指數',
      '環保署空氣品質監測：即時 AQI、PM2.5、預報資料、歷史數據查詢',
      '地震速報系統：顯著有感地震報告、小區域地震資訊、震度資料',
      '政府行政日曆：辦公日曆表、天災停班停課資訊即時查詢',
      '淺草籤詩系統：完整籤詩資料庫、隨機抽籤、指定籤號查詢功能',
      '智能對話引擎：關鍵字識別、情境化回應、鼓勵話語與程式設計師笑話',
      'LINE 選單互動：視覺化操作介面、快速功能存取、使用者體驗優化',
      '模組化架構重構：統一程式風格、完整 JSDoc 註解、人性化錯誤處理'
    ]
  }
]
