// 經歷資料結構 - 消除所有特殊情況，對齊真實履歷格式
export interface ExperienceItem {
  id: string;
  type: 'project' | 'work' | 'education' | 'training';
  title: string;
  organization: string;
  startDate: string; // YYYY/M 格式，對齊履歷
  endDate?: string; // YYYY/M 格式，對齊履歷
  description: string;
  skills?: string[];
  status: 'completed' | 'current' | 'ongoing';
  gitCommitStyle?: string; // Git commit 風格的標題
}

export const experienceMeta = {
  title: '我的經歷',
};

// 單一資料來源 - 基於真實履歷內容
export const experienceData: ExperienceItem[] = [
  {
    id: 'work-flashlink',
    type: 'work',
    title: '全端工程師',
    organization: '閃電通股份有限公司',
    startDate: '2025/11',
    endDate: '2026/4',
    description:
      '在 10 人 eSIM 新創團隊中獨立負責 Web 前端全部工作，包含主產品電商前台、內部 ERP 系統的完整開發，以及 AI 客服系統的技術規劃。主導早期技術選型（前後端、App、資料庫、GitHub 權限規範），設計 API 代理層避免後端位址暴露，路由架構預先支援台灣、日本、英文三個市場。獨立實作完整訪客購買流程：Email OTP → 優惠碼 → 電子發票 → 串接綠界 ECPay，加入防重複扣款機制。',
    skills: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Express v5',
      'API 代理層',
      'ECPay 串接',
      'AI 客服評估',
      '技術選型',
    ],
    status: 'completed',
    gitCommitStyle: 'feat(work): eSIM 新創全端工程師',
  },
  {
    id: 'work-marketing',
    type: 'work',
    title: '行銷設計助理',
    organization: '樂麵屋（太魯閣國際股份有限公司）',
    startDate: '2022/8',
    endDate: '2023/1',
    description:
      '負責樂麵屋、杓文字、坂田家三個品牌的行銷活動發想、視覺設計、社群經營。每月參與兩次完整行銷活動規劃與執行，設計會員識別系統及各式廣告素材。透過旁聽後台系統設計會議，第一次接觸程式邏輯思維。',
    skills: ['品牌社群經營', '行銷活動企劃', '會員系統視覺設計', 'FB/IG/LINE@ 經營', '視覺設計'],
    status: 'completed',
    gitCommitStyle: 'feat(marketing): 行銷設計助理',
  },
  {
    id: 'education-university',
    type: 'education',
    title: '崑山科技大學',
    organization: '公共關係暨廣告學系',
    startDate: '2017/9',
    endDate: '2022/6',
    description:
      '主修公共關係與廣告，培養需求分析、企劃書撰寫與行銷活動策劃能力，奠定日後轉職工程師的系統性思考基礎。',
    skills: ['專案企劃', '需求分析', '行銷策劃', '跨領域協作'],
    status: 'completed',
    gitCommitStyle: 'feat(education): 公關廣告學系畢業',
  },
];

// 簡單的工具函數 - 直接使用履歷格式，消除複雜轉換
export const formatExperienceDate = (startDate: string, endDate?: string): string => {
  if (!endDate) return startDate;
  return `${startDate} - ${endDate}`;
};

export const calculateDuration = (startDate: string, endDate?: string): string => {
  // 簡單解析 YYYY/M 格式
  const parseDate = (dateStr: string): { year: number; month: number } => {
    const parts = dateStr.split('/').map(Number);
    return { year: parts[0] ?? 0, month: parts[1] ?? 0 };
  };

  const start = parseDate(startDate);
  const end = endDate
    ? parseDate(endDate)
    : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };

  const diffInMonths = (end.year - start.year) * 12 + (end.month - start.month);

  if (diffInMonths === 0) return 'current';
  if (diffInMonths < 12) return `${diffInMonths}mo`;

  const years = Math.floor(diffInMonths / 12);
  const remainingMonths = diffInMonths % 12;

  if (remainingMonths === 0) return `${years}yr`;
  return `${years}yr ${remainingMonths}mo`;
};

export const getExperienceIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'project':
      return 'heroicons:code-bracket';
    case 'work':
      return 'heroicons:briefcase';
    case 'education':
      return 'heroicons:academic-cap';
    case 'training':
      return 'heroicons:cog-6-tooth';
    default:
      return 'heroicons:document';
  }
};
