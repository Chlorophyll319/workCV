# 🌟 Evenly - 個人履歷網站

> 靈感來自 VSCode Extension Marketplace 的現代化履歷網站，展現前端開發專業與創新思維

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://chlorophyll319.github.io/workCV/#/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4.svg)](https://tailwindcss.com/)

## 🎯 專案概述

這是一個以 **VSCode Extension Marketplace** 為設計靈感的個人履歷網站，採用現代化的一頁式佈局，完美融合了開發者工具的美學與專業履歷的功能性。網站展示了完整的前端技能棧，包含個人簡介、技能展示、專案作品集與詳細的職涯經歷。

### ✨ 核心特色

- 🎨 **VSCode 主題設計** - 完美還原 Extensions Marketplace 的視覺風格
- 📱 **全響應式體驗** - 支援桌機、平板、手機的完美適配
- ⚡ **效能極致最佳化** - Vite 構建 + 懶載入 + 代碼分割
- 🔍 **SEO 全面優化** - 完整 meta 標籤、Open Graph、結構化資料
- 🌊 **流暢互動動效** - 卡片懸浮、按鈕動畫、進場特效
- 📂 **VSCode Tab 系統** - 可關閉的檔案標籤頁互動體驗
- ⏱️ **職涯時間線** - GitLens 風格的經歷展示（Footer 區塊）

### 🎪 互動體驗亮點

- **懸浮上浮動畫** - 所有卡片具備優雅的 `hover:-translate-y-1` 效果
- **漸變邊框特效** - About 區塊焦點卡片的跑馬燈式邊框動畫
- **技能標籤縮放** - 技能項目支援 `hover:scale-105` 互動回饋
- **立體按鈕效果** - 行動按鈕具備陰影與上浮的立體感
- **Tab 關閉動畫** - VSCode 風格的可關閉檔案標籤
- **進場滑入效果** - Hero 區塊的 `slideInUp` 動畫
- **脈衝載入動畫** - 區塊載入時的 `animate-pulse` 呼吸效果

## 🛠️ 技術架構

### 核心框架
```json
{
  "frontend": "Vue 3.5.18 + TypeScript 5.8",
  "build": "Vite 7.1 + Terser",
  "styling": "Tailwind CSS v4.1",
  "state": "Pinia + 持久化存儲"
}
```

### UI 與體驗
- **@nuxt/ui 3.3** - Vue 3 專用組件庫
- **@iconify/vue 5.0** - 豐富圖示系統（100+ 圖示集）
- **@vueuse/head 2.0** - SEO 與 meta 標籤管理
- **@vueuse/core 13.9** - Vue 組合式 API 工具集

### 開發工具鏈
- **unplugin-vue-router** - 自動化路由生成
- **vite-plugin-vue-layouts-next** - 佈局系統
- **unplugin-fonts** - 字體載入最佳化
- **ESLint + Prettier** - 程式碼品質保證

### 表單與驗證
- **vee-validate 4.15** - 表單驗證框架
- **yup 1.7** - Schema 驗證
- **axios 1.11** - HTTP 客戶端

## 📁 專案結構

```
workCV/
├── src/
│   ├── components/
│   │   ├── common/           # 通用組件
│   │   │   ├── Tab.vue      # VSCode 風格檔案標籤
│   │   │   └── Card.vue     # 卡片組件
│   │   └── sections/         # 頁面區塊
│   │       ├── HeroSection.vue      # 首頁英雄區
│   │       ├── AboutSection.vue     # 關於我
│   │       ├── ProjectsSection.vue  # 專案作品集
│   │       ├── SkillsSection.vue    # 技能展示
│   │       └── FooterSection.vue    # 職涯時間線
│   ├── composables/          # Vue 組合式函數
│   ├── store/
│   │   └── data/            # 資料模型
│   │       ├── profile.ts   # 個人資訊
│   │       ├── projects.ts  # 專案資料
│   │       └── skills.ts    # 技能資料
│   ├── types/               # TypeScript 類型定義
│   ├── assets/              # 靜態資源
│   │   └── typography.css   # 文字系統
│   └── layouts/             # 頁面佈局
├── public/                  # 公共資源
└── .claude/                # Claude Code 協作配置
```

## 🚀 快速開始

### 環境需求
- **Node.js** >= 16.0
- **npm** 或 **yarn**

### 本地開發

```bash
# 克隆專案
git clone https://github.com/Chlorophyll319/workCV.git
cd workCV

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
# 🌐 預設運行在 http://localhost:5173

# 建構生產版本
npm run build

# 預覽建構結果
npm run preview
```

### 🎯 自訂化指南

#### 個人資料修改
更新 `src/store/data/` 目錄下的配置：

```typescript
// profile.ts - 基本資訊
export const profile = {
  name: "你的姓名",
  title: "職位",
  email: "your@email.com"
}

// projects.ts - 專案作品
export const projects = [
  {
    title: "專案名稱",
    description: "專案描述",
    tech: ["Vue", "TypeScript"]
  }
]

// skills.ts - 技能標籤
export const skills = {
  frontend: ["Vue", "React", "TypeScript"],
  backend: ["Node.js", "Python"]
}
```

#### 樣式客製化
- **全域樣式**: `src/assets/typography.css`
- **Tailwind 配置**: `tailwind.config.js`
- **組件樣式**: 各 `.vue` 檔案內的 `<style>` 區塊

## 📊 效能與 SEO

### 載入策略
- **Critical Path**: Hero Section 立即載入（LCP 最佳化）
- **Lazy Loading**: About、Projects、Skills 區塊按需載入
- **Code Splitting**: 非關鍵組件動態載入

### SEO 最佳化
- ✅ 語義化 HTML 結構
- ✅ 完整的 meta 標籤與 Open Graph
- ✅ Twitter Cards 支援
- ✅ 結構化資料標記
- ✅ 字體預載入策略

### 建構最佳化
- **Vite 7** 極速建構與熱更新
- **Terser** 壓縮與混淆
- **Tree Shaking** 移除未使用代碼
- **Tailwind Purge** CSS 最佳化

## 🎨 設計系統

### 色彩與主題
採用 VSCode Dark+ 主題的配色方案：
- **背景**: `#1e1e1e` 深色背景
- **卡片**: `#2d2d30` 次要背景
- **邊框**: `#3e3e42` 分割線
- **強調色**: `#007acc` VSCode 藍

### 文字階層
統一的 typography 系統 (`assets/typography.css`)：
```css
.text-hero     /* 主標題 */
.text-section  /* 區塊標題 */
.text-card     /* 卡片標題 */
.text-body     /* 內文 */
.text-caption  /* 說明文字 */
.text-tag      /* 標籤 */
```

## 🤝 貢獻與開發

### 程式碼規範
- **TypeScript** 嚴格模式
- **ESLint + Prettier** 自動格式化
- **組件命名**: PascalCase (`HeroSection.vue`)
- **檔案命名**: kebab-case (`hero-section.ts`)
- **提交訊息**: Conventional Commits

## 📞 聯絡方式

👤 **葉芃 (Evelyn Ye)**
🌐 **作品網站**: [evenly-resume.dev](https://chlorophyll319.github.io/workCV/#/)
💼 **GitHub**: [@Chlorophyll319](https://github.com/Chlorophyll319)
📧 **聯絡信箱**: kcnfoggy54@gmail.com
