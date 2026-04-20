import { about } from '@/store/data/about';

export const profile = {
  name: '葉芃',
  englishName: 'Evelyn',
  title: '全端工程師',
  subtitle: 'Full-Stack Engineer',
  kicker: '設計思維 × 工程執行力 · 非本科轉職全端',
  dateline: '積極求職中',
  tagline: '從需求拆解、技術選型到系統設計，具備完整工程經驗',
  description:
    '從行銷設計背景轉職工程師，職訓局課程一個月內獨立完成全端個人專題。在 10 人 eSIM 新創擔任全端工程師期間，獨立負責主產品電商前台開發、主導 AI 客服技術評估、並開發內部 ERP 系統。具備從需求拆解、技術選型到系統設計的完整工程經驗，善用 AI 工具加速開發與問題排查。',
  contact: {
    phone: {
      href: 'tel:0971-700-818',
      label: '0971-700-818',
      icon: 'mdi:phone',
      external: false,
    },
    github: {
      href: 'https://github.com/Chlorophyll319',
      label: 'GitHub',
      buttonLabel: '查看 GitHub',
      icon: 'simple-icons:github',
      external: true,
    },
    email: {
      href: 'mailto:kcnfoggy54@gmail.com',
      label: 'kcnfoggy54@gmail.com',
      buttonLabel: '聯絡方式',
      icon: 'simple-icons:gmail',
      external: false,
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/peng-yeh-4b35a2175/',
      label: 'LinkedIn',
      buttonLabel: 'LinkedIn',
      icon: 'simple-icons:linkedin',
      external: true,
    },
  },

  location: '台北市',
  remoteAvailable: true,
  status: 'Ready to work',

  highlightsTitle: '轉職亮點',
  highlights: [
    '設計出身，懂得從使用者需求逆推技術實作',
    '職訓一個月獨立完成全端專題，快速上手陌生技術',
    '新創全端獨挑大樑，電商前台到內部 ERP 全包',
    '主導 AI 客服技術評估，具備選型與落地能力',
  ],
};
