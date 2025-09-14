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
    name: '泰山職訓前端課程學員分享網',
    type: '全端專案',
    description: '為泰山職訓局前端課程打造的全端資訊平台，結合前台展示與後台管理功能。整合課程介紹、學員作品、FAQ 系統與部落格內容管理，支援 Markdown 與 MathJax 語法渲染。實現完整的 CRUD 操作與 JWT 權限控管系統，提供直觀的雙布局管理介面。',
    techStack: ['Vue 3', 'Vite', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Passport.js', 'Tailwind CSS v4', 'PrimeVue 4', 'daisyUI 5', 'Markdown-it', 'Mermaid.js'],
    demoUrl: 'https://chlorophyll319.github.io/frontPrWebOnlineVer-vite-project/#/',
    githubUrl: 'https://github.com/Chlorophyll319/frontPrWebOnlineVer-vite-project',
    icon: 'i-ph-graduation-cap',
    status: '已完成',
    metrics: {
      lighthouse: 'Lighthouse 效能 98',
      coreFeatures: 'JWT 身份驗證、內容管理系統、Markdown 渲染',
      scale: '雙布局架構、RESTful API、MVC 設計、MongoDB 資料庫',
      duration: '45 天'
    },
    highlights: [
      '雙布局架構：結合 daisyUI 前台、PrimeVue 後台，現代與專業管理介面',
      'RESTful API 設計：採用 MVC 架構與 Express.js，完整後端服務',
      'MongoDB 資料庫：使用 Mongoose ODM，詳細資料關聯與 ERD 設計',
      'JWT + Passport.js 認證：完整登入驗證與權限控管機制',
      'Markdown CMS：支援程式碼高亮、數學公式與豐富內容渲染',
      '自動路由系統：使用 unplugin-vue-router 自動生成路由配置'
    ]
  },
  {
    id: 2,
    name: 'Evenly - 個人履歷網站',
    type: '前端專案',
    description: '以 VSCode Extension Marketplace 為靈感的現代化履歷網站，採用一頁式佈局完美結合開發者工具美學與專業展示需求。整合個人簡介、技能展示、專案作品集與職涯經歷，體現前端技術與 UX 設計的平衡能力。確保 SEO 優化與效能表現符合業界最佳實踐標準。',
    techStack: ['Vue 3', 'Vite', 'TypeScript', 'Nuxt UI', 'Tailwind CSS v4', '@vueuse/head', '@vueuse/core', 'Pinia', '@iconify/vue', 'unplugin-vue-router'],
    demoUrl: 'https://chlorophyll319.github.io/workCV/#/',
    githubUrl: 'https://github.com/Chlorophyll319/workCV',
    icon: 'i-ph-user-circle',
    status: '已完成',
    metrics: {
      lighthouse: 'SEO 91 • 最佳做法 100',
      coreFeatures: 'VSCode 主題設計、SEO 優化、互動式 UI、TypeScript 型別安全',
      scale: '7個核心組件、響應式設計、統一文字系統、狀態管理',
      duration: '10 天'
    },
    highlights: [
      'VSCode Extension 風格：還原 Marketplace 視覺設計，包含檔案標籤、懸浮動效',
      '全響應式體驗：支援桌機、平板、手機的完美適配，統一設計語言',
      '效能極致優化：Vite 構建、懶載入、代碼分割，Critical Path 優化',
      'SEO 全面優化：91/100 分數，完整 meta 標籤、Open Graph、結構化資料',
      '流暢互動動效：卡片懸浮上浮、按鈕動畫、進場特效、Tab 關閉動畫',
      'GitLens 風格職涯時間線：Footer 區塊展示完整學經歷與技能標籤',
      'TypeScript 型別安全：全專案 100% 覆蓋，嚴格模式確保程式碼品質',
      '統一設計系統：typography.css 建立完整文字階層與視覺規範'
    ]
  },
  {
    id: 3,
    name: '多功能 LINE 聊天機器人—黛栗',
    type: '聊天機器人',
    description: '採用分層架構設計的多功能 LINE 聊天機器人，深度整合 82 個台灣政府開放資料 API。使用 BaseBot 抽象基類統一接口標準，實現模組化迷你機器人系統。涵蓋中央氣象局天氣預報、環保署空氣品質、地震資訊、紫外線指數與政府假期查詢等多元服務，提供個人化城市設定與 MongoDB 資料持久化功能。',
    techStack: ['Node.js', 'Express.js', 'Axios', 'LINE Messaging API', 'linebot', '中央氣象局API', '環保署API', '政府開放資料API', 'MongoDB', 'Mongoose'],
    demoUrl: 'https://line.me/R/ti/p/@142cmsyc',
    githubUrl: 'https://github.com/Chlorophyll319/Daily-LINEBot',
    icon: 'i-ph-chat-circle',
    status: '開發中',
    metrics: {
      currentProgress: 'WeatherBot 完成、架構重構、MongoDB 整合',
      availableFeatures: '天氣預報、個人化設定、錯誤處理',
      projectScope: '分層架構（routes-bots-services-adapters）',
      timeline: '剩餘 5 個機器人模組待開發'
    },
    highlights: [
      '現代化架構重構：主程式從 112 行優化至 52 行，清晰的職責分離',
      '標準化 Bot 框架：BaseBot 抽象基類 + 統一 canHandle/handle 接口',
      '分層架構設計：routes → bots → services → adapters，模組化易擴展',
      '大量 API 整合：串接 82 個政府開放資料 API（氣象局40個、環保署6個、地震3個等）',
      'MongoDB 資料持久化：使用者偏好設定儲存，個人化服務體驗',
      '統一錯誤處理機制：用戶友善回應，完整的錯誤追蹤與日誌系統',
      '可擴展設計：新增機器人只需繼承 BaseBot，快速開發部署'
    ]
  }
]
