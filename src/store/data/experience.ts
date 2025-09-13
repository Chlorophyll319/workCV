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
    description: '開發一頁式個人履歷網站，作為技術能力展示與作品集平台，採用 Vue3 + Tailwind CSS 與 NuxtUI 元件庫',
    skills: ['Vue3', 'Nuxt3', 'Tailwind CSS', 'NuxtUI', 'SSG'],
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
    description: '獨立開發具備前後台管理功能的課程資訊網站，提供訓練單位介紹、學員成果展示、FAQ 系統與文章內容管理，並整合 Markdown 與 Mermaid 語法渲染',
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
    description: '負責品牌社群經營、會員系統設計、行銷活動發想與視覺設計，培養了用戶體驗思維與數據分析能力',
    skills: ['社群經營', '會員系統設計', 'UI/UX', '數據分析', '行銷企劃'],
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
    description: '專案企劃與跨領域協作能力培養，奠定了需求分析、行動規劃等與團隊溝通的基礎，對軟體開發的協作流程很有幫助',
    skills: ['專案企劃', '跨領域協作', '需求分析', '團隊溝通'],
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
