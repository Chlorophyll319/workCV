// Linus 風格：統一來源，消除重複
const TAGLINE = '從設計思維到功能實現，專注於創造優質的用戶體驗';

export const profile = {
  name: '葉芃',
  englishName: 'Evelyn',
  title: '前端工程師',
  subtitle: 'Frontend Engineer',
  tagline: TAGLINE,
  description: '行銷設計出身，完成泰山職訓局半年前端開發課程，具備前後端分離的獨立開發實作經驗。開發過程中習慣與 AI 協作，透過對話釐清問題、規劃流程並輔助除錯，擅長拆解需求並規劃開發流程。',
  
  about: {
    description: '畢業後專職於設計與行銷領域，意識到設計領域發展瓶頸後，希望融合設計思維與程式技術，因此參加前端職訓課程轉換跑道。在受訓期間，我發現自己熱愛「優化資訊架構、實現功能邏輯」的開發過程。',
    sections: {
      background: {
        title: '背景轉換',
        icon: 'heroicons:academic-cap',
        from: '行銷設計',
        to: '前端工程'
      },
      philosophy: {
        title: '開發理念',
        icon: 'heroicons:light-bulb',
        description: '結合過去培養的需求分析與流程拆解能力，能將複雜問題從本質分解成具體步驟逐一解決，深入理解技術架構背後的商業邏輯'
      },
      currentFocus: {
        title: '目前專注',
        icon: 'heroicons:cursor-arrow-rays',
        description: '希望在實務中累積技術基礎，培養系統性分析能力。短期目標是熟練前端核心技術與後端 API 整合，持續精進設計模式、版本控制等技能'
      },
      highlights: {
        title: '核心優勢',
        icon: 'heroicons:star',
        items: [
          'AI 協作開發',
          '全端獨立開發',
          '設計思維',
          '快速學習'
        ]
      }
    },
    quote: TAGLINE
  },
  
  contact: {
    email: 'kcnfoggy54@gmail.com',
    phone: '0971-700-818',
    github: 'https://github.com/Chlorophyll319',
    linkedin: 'https://www.linkedin.com/in/peng-yeh-4b35a2175/'
  },

  highlights: [
    '跨領域背景：行銷設計 → 前端工程',
    '全端開發經驗：Vue 3 + Node.js + MongoDB',
    'AI 協作專精：ChatGPT、Claude Code、GitHub Copilot',
    '獨立專案能力：從需求分析到部署上線'
  ]
}