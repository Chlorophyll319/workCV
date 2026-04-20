interface ProjectMetrics {
  // 已完成專案欄位
  lighthouse?: string | null; // Lighthouse 評分（前端專案）
  coreFeatures?: string | null; // 核心功能描述（已完成專案）
  scale?: string | null; // 專案規模
  duration?: string | null; // 開發時間

  // 未完成專案欄位
  apiPerformance?: string | null; // API 效能評測（後端專案）
  currentProgress?: string | null; // 開發進度
  availableFeatures?: string | null; // 可用功能
  projectScope?: string | null; // 專案架構
  timeline?: string | null; // 預計完成
}

export interface Project {
  id: number;
  name: string;
  type: string | null;
  description: string | null;
  techStack: string[] | null;
  demoUrl?: string | null;
  githubUrl?: string | null;
  icon: string | null;
  status: string | null;
  metrics: ProjectMetrics | null;
  highlights: string[] | null;
}

// UI 常數定義
export const PROJECT_CONSTANTS = {
  colors: {
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)',
  },
  labels: {
    techStack: '開發技術',
    metrics: '效能指標',
    demo: 'Demo',
    github: 'GitHub',
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
    timeline: '預計完成',
  },
};

export const projects: Project[] = [
  {
    id: 1,
    name: '多功能 LINE 聊天機器人',
    type: '聊天機器人',
    description:
      '串接政府開放資料的多功能 LINE 聊天機器人，9 個功能模組持續擴充中。設計 BaseBot 共用基底類別，每個功能模組繼承同一套介面（canHandle / handle / getHelpInfo）；messageRouter 遍歷清單自動分發，新增功能不需修改路由層。',
    techStack: [
      'Node.js',
      'Express.js',
      'LINE Messaging API',
      '政府開放資料 API',
      'MongoDB',
      'Mongoose',
    ],
    demoUrl: 'https://line.me/R/ti/p/@142cmsyc',
    githubUrl: 'https://github.com/Chlorophyll319/Daily-LINEBot',
    icon: 'i-ph-chat-circle',
    status: '開發中',
    metrics: {
      currentProgress: '9 個功能模組持續擴充中',
      availableFeatures: '天氣、AQI、地震、假日、紫外線等政府開放資料',
      projectScope: '分層架構（routes → bots → services → adapters）',
      timeline: '持續更新',
    },
    highlights: [
      'BaseBot 抽象基類：統一 canHandle/handle/getHelpInfo 介面，新增模組不需改路由層',
      '分層架構：routes → bots → services → adapters，職責清楚分離',
      '串接 9 個功能模組：天氣、AQI、地震、假日、紫外線等政府開放資料 API',
      'MongoDB Atlas：持久化使用者城市偏好與抽籤歷史',
      'Flex Message 主選單 + Quick Reply 子選單階層導覽',
      'Node.js 原生 test runner 單元測試',
    ],
  },
  {
    id: 2,
    name: '泰山職訓課程學員分享網',
    type: '全端專案',
    description:
      '獨立開發具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理，並整合 Markdown 與 Mermaid 語法渲染。採用 MVC 架構設計與 RESTful API，設計資料表結構並繪製 ERD，實作 JWT + Passport.js 登入驗證機制。',
    techStack: [
      'Vue 3',
      'Vite',
      'Tailwind CSS',
      'daisyUI',
      'PrimeVue',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Passport.js',
    ],
    demoUrl: 'https://chlorophyll319.github.io/frontPrWebOnlineVer-vite-project/#/',
    githubUrl: 'https://github.com/Chlorophyll319/frontPrWebOnlineVer-vite-project',
    icon: 'i-ph-graduation-cap',
    status: '已完成',
    metrics: {
      coreFeatures: 'JWT 身份驗證、內容管理系統、Markdown + Mermaid 渲染',
      scale: '雙布局架構（daisyUI 前台 / PrimeVue 後台）',
      duration: '45 天',
    },
    highlights: [
      '前台使用 daisyUI，後台使用 PrimeVue，雙布局架構',
      'MVC 架構 + RESTful API，完整後端服務',
      'Mongoose ODM + ERD 設計，明確定義模組關聯與資料流向',
      'JWT + Passport.js 登入驗證與 CRUD 權限控管',
      'Markdown 整合 highlight.js 程式碼高亮與 Mermaid 圖表渲染',
    ],
  },
  {
    id: 3,
    name: 'Evenly - 個人履歷網站',
    type: '前端專案',
    description:
      '一頁式個人履歷網站，使用 Nuxt 3（SPA mode）搭配 Vue 3、TypeScript、Tailwind CSS v4，整合 Pinia 狀態管理，建立 SEO 機制與 GitHub Actions 自動部署。',
    techStack: [
      'Nuxt 3',
      'Vue 3',
      'TypeScript',
      'Tailwind CSS v4',
      '@nuxt/ui',
      'Pinia',
      'Iconify',
      'GitHub Actions',
    ],
    demoUrl: 'https://chlorophyll319.github.io/workCV/',
    githubUrl: 'https://github.com/Chlorophyll319/workCV',
    icon: 'i-ph-user-circle',
    status: '持續更新',
    metrics: {
      coreFeatures: '報紙版面系統、SEO 優化、響應式設計',
      scale: '整合 useSeoMeta、Open Graph、Twitter Card、JSON-LD',
      duration: '持續迭代',
    },
    highlights: [
      '報紙版面系統：Hero 頭版、技能與專案區塊採報紙分欄排版',
      'Nuxt 3 SPA mode + TypeScript 全覆蓋，型別安全開發',
      'Pinia 狀態管理 + Nuxt 3 自動化路由，建立型別定義與資料模型',
      'SEO：useSeoMeta + Open Graph / Twitter Card / JSON-LD 結構化資料',
      'GitHub Actions 自動部署至 GitHub Pages',
    ],
  },
  {
    id: 4,
    name: "Git 指令產生器（Yes, It's Git）",
    type: '前端工具',
    description:
      'Git 學習輔助工具，提供指令產生器、速查表、情境導向、歷史記錄四個功能頁面。支援 cherry-pick、tag、remote、log 等多種指令類型，危險指令加二次確認與 Enter 快捷鍵；速查表支援分類 Tab 篩選與指令範例展開。',
    techStack: [
      'Vue 3',
      'Vite',
      'TypeScript',
      'Tailwind CSS v4',
      'daisyUI v5',
      'Pinia',
      'pinia-plugin-persistedstate',
      'vee-validate',
      'yup',
      'vue-router',
    ],
    githubUrl: 'https://github.com/Chlorophyll319/itsGit.github.io',
    demoUrl: 'https://chlorophyll319.github.io/yesItsGit/',
    icon: 'i-ph-git-branch',
    status: '持續更新',
    metrics: {
      coreFeatures: '指令產生器、速查表、情境導向、歷史記錄',
      scale: '4 個功能頁面、file-based routing',
      duration: '持續更新',
    },
    highlights: [
      '指令產生器：支援 cherry-pick、tag、remote、log 等多種指令類型',
      '危險指令加二次確認與 Enter 快捷鍵保護',
      '速查表：分類 Tab 篩選 + 指令範例展開',
      '情境導向：依使用情境引導選擇正確指令',
      'Pinia + persistedstate 本機持久化歷史記錄',
      'vee-validate + yup 表單驗證',
    ],
  },
];
