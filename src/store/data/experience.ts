// 經歷資料結構 - 消除所有特殊情況，對齊真實履歷格式
export interface ExperienceItem {
  id: string
  type: 'project' | 'work' | 'education' | 'training'
  title: string
  organization: string
  startDate: string // YYYY/M 格式，對齊履歷
  endDate?: string // YYYY/M 格式，對齊履歷
  description: string
  skills?: string[]
  status: 'completed' | 'current' | 'ongoing'
  gitCommitStyle?: string // Git commit 風格的標題
}

// 單一資料來源 - 基於真實履歷內容
export const experienceData: ExperienceItem[] = [
    {
    id: 'project-portfolio',
    type: 'project',
    title: '個人履歷網站',
    organization: '專題作品',
    startDate: '2025/9',
    endDate: '2025/9',
    description: '結訓後持續自主學習，開發一頁式個人履歷網站作為技術展示平台。在此專案中深入學習 TypeScript 強型別開發，並積極嘗試 NuxtUI、Tailwind v4 等新套件與 UI 框架',
    skills: ['Vue3', 'TypeScript', 'Nuxt3', 'Tailwind CSS v4', 'NuxtUI', 'SSG', '新技術學習'],
    status: 'current',
    gitCommitStyle: 'feat(portfolio): Vue3 個人履歷網站建構'
  },
  {
    id: 'project-training-site',
    type: 'project',
    title: '職訓資訊分享網站',
    organization: '專題作品',
    startDate: '2025/8',
    endDate: '2025/9',
    description: '參與泰山職訓局前端開發課程期間，深入學習程式設計原理與語法，並獨立開發此前後端分離的全端專題作品。網站具備前後台管理功能，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理，並整合 Markdown 與 Mermaid 語法渲染',
    skills: ['Vue3', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    status: 'completed',
    gitCommitStyle: 'feat(fullstack): 職訓資訊分享網站開發完成'
  },
  {
    id: 'work-marketing',
    type: 'work',
    title: '行銷設計助理',
    organization: '樂麵屋_太魯閣國際股份有限公司',
    startDate: '2022/8',
    endDate: '2023/1',
    description: '負責品牌社群經營與行銷活動企劃，並參與會員系統的 UI/UX 設計流程。透過旁聽後台系統設計會議，初次接觸程式邏輯思維，了解功能實現的可行性評估。擔任內外部溝通窗口（店面、辦公室、百貨樓管、印刷廠），深化跨領域協作經驗',
    skills: ['社群經營', '會員系統設計', 'UI/UX', '後台系統理解', '程式邏輯概念', '數據分析', '行銷企劃', '跨部門溝通'],
    status: 'completed',
    gitCommitStyle: 'feat(marketing): 數位化流程優化與品牌社群經營'
  },
  {
    id: 'education-university',
    type: 'education',
    title: '崑山科技大學',
    organization: '公共關係暨廣告學系',
    startDate: '2017/9',
    endDate: '2022/6',
    description: '透過企劃書撰寫與行銷活動策劃，學習如何從需求分析到落地執行的完整專案流程。這些企劃思維與執行經驗，對於 Side Project 的規劃與程式開發的系統性思考提供了重要基礎。跨領域團隊協作經驗也強化了溝通協調能力',
    skills: ['專案企劃', '企劃書撰寫', '行銷活動策劃', '跨領域協作', '需求分析', '執行計劃', '團隊溝通'],
    status: 'completed',
    gitCommitStyle: 'feat(education): 公關廣告學系畢業'
  }
]

// 聯絡資料
export const contactInfo = {
  github: 'https://github.com/chlorophyll319',
  email: 'kcnfoggy54@gmail.com',
  location: '台北市',
  remoteAvailable: true,
  status: 'Ready to work'
}

// 簡單的工具函數 - 直接使用履歷格式，消除複雜轉換
export const formatExperienceDate = (startDate: string, endDate?: string): string => {
  if (!endDate) return startDate
  return `${startDate} - ${endDate}`
}

export const calculateDuration = (startDate: string, endDate?: string): string => {
  // 簡單解析 YYYY/M 格式
  const parseDate = (dateStr: string) => {
    const [year, month] = dateStr.split('/').map(Number)
    return { year, month }
  }

  const start = parseDate(startDate)
  const end = endDate ? parseDate(endDate) : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 }

  const diffInMonths = (end.year - start.year) * 12 + (end.month - start.month)

  if (diffInMonths === 0) return 'current'
  if (diffInMonths < 12) return `${diffInMonths}mo`

  const years = Math.floor(diffInMonths / 12)
  const remainingMonths = diffInMonths % 12

  if (remainingMonths === 0) return `${years}yr`
  return `${years}yr ${remainingMonths}mo`
}

export const getExperienceTypeColor = (type: ExperienceItem['type'], status: ExperienceItem['status']) => {
  if (status === 'current') return 'text-green-600'

  switch (type) {
    case 'project':
      return 'text-primary'
    case 'work':
      return 'text-blue-600'
    case 'education':
      return 'text-gray-500'
    case 'training':
      return 'text-accent'
    default:
      return 'text-gray-400'
  }
}

export const getExperienceBorderColor = (type: ExperienceItem['type'], status: ExperienceItem['status']) => {
  if (status === 'current') return 'border-l-green-500'

  switch (type) {
    case 'project':
      return 'border-l-primary'
    case 'work':
      return 'border-l-primary-500'
    case 'education':
      return 'border-l-primary-500'
    case 'training':
      return 'border-l-accent'
    default:
      return 'border-l-primary-500'
  }
}

export const getCommitDotColor = (type: ExperienceItem['type'], status: ExperienceItem['status']) => {
  if (status === 'current') return 'bg-green-500'

  switch (type) {
    case 'project':
      return 'bg-primary'
    case 'work':
      return 'bg-primary-800'
    case 'education':
      return 'bg-primary-800'
    case 'training':
      return 'bg-accent'
    default:
      return 'bg-primary-800'
  }
}

export const getExperienceIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'project':
      return 'heroicons:code-bracket'
    case 'work':
      return 'heroicons:briefcase'
    case 'education':
      return 'heroicons:academic-cap'
    case 'training':
      return 'heroicons:cog-6-tooth'
    default:
      return 'heroicons:document'
  }
}
