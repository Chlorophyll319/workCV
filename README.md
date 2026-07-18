# 📰 workCV - 個人履歷網站

> 報紙編輯風格的單頁個人履歷網站，以 Nuxt 4 打造

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://chlorophyll319.github.io/workCV/)
[![Nuxt 4](https://img.shields.io/badge/Nuxt-4-00DC82.svg)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4.svg)](https://tailwindcss.com/)

## 專案概述

求職用個人履歷網站，採用報紙（editorial）視覺風格：Masthead 刊頭、kicker 標語、dateline 日期列，搭配 Playfair Display / Noto Serif TC 襯線字型與米白紙感配色。單頁式佈局，內容依序為 Hero、About、Experience、Projects、Skills 五個區塊。

## 技術棧

| 分類     | 技術                                          |
| -------- | --------------------------------------------- |
| 框架     | Nuxt 4 + Vue 3（Composition API、`<script setup>`，SPA 模式） |
| 語言     | TypeScript 5.8                                |
| 樣式     | Tailwind CSS v4 + @nuxt/ui 3                  |
| 狀態管理 | Pinia（含 pinia-plugin-persistedstate）       |
| 工具     | @vueuse/core、@iconify/vue、unplugin-fonts    |
| 程式品質 | ESLint 9 + Prettier                           |

## 專案結構

```
src/
├── assets/          # 全域 CSS（main.css、typography.css）
├── components/
│   ├── layout/      # 版面骨架（NewsMasthead、NewsNavBar、PageFooter）
│   └── sections/    # 頁面區塊（Hero、About、Experience、Projects、Skills）
├── composables/     # useLazyLoad、useMainContainerRWD、useResizable
├── layouts/         # Nuxt layout（default.vue）
├── pages/           # 路由頁面（index.vue）
├── store/
│   ├── data/        # 靜態履歷資料（profile、about、experience、projects、skills）
│   └── layout.ts    # 版面狀態
└── types/           # 全域型別宣告
```

## 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器（http://localhost:3000）
npm run dev

# 建構生產版本
npm run build

# 產生靜態網站
npm run generate

# 預覽建構結果
npm run preview
```

## 內容修改

所有履歷內容為靜態資料，集中在 `src/store/data/`：

- `profile.ts` - 基本資料、聯絡方式
- `about.ts` - 個人介紹
- `experience.ts` - 工作經歷
- `projects.ts` - 專案作品
- `skills.ts` - 技術能力

## 部署

部署於 GitHub Pages，生產環境 `baseURL` 為 `/workCV/`（見 `nuxt.config.ts`）。

## 聯絡方式

👤 **葉芃 (Evelyn)** - 全端工程師
🌐 **Live Demo**: [chlorophyll319.github.io/workCV](https://chlorophyll319.github.io/workCV/)
💼 **GitHub**: [@Chlorophyll319](https://github.com/Chlorophyll319)
📧 **Email**: kcnfoggy54@gmail.com
