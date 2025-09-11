# 🌱 Evenly 個人履歷網站

> VSCode 主題風格的個人履歷網站，展示前端開發技能與作品集

## 🎯 專案簡介

這是一個採用 VSCode Extension Marketplace 風格設計的個人履歷網站，專注於優秀的使用者體驗與 SEO 最佳化。網站採用一頁式設計，包含個人簡介、技能展示、作品集與聯絡資訊。

### ✨ 特色功能

- 🎨 **VSCode 主題設計** - 以 Extensions Marketplace 為靈感的介面設計
- 📱 **響應式設計** - 完整支援桌機、平板與手機裝置
- ⚡ **效能最佳化** - Lazy loading、Code splitting、字體預載入
- 🔍 **SEO 友善** - 完整 meta 設定、Open Graph、Twitter Cards
- 🚀 **現代技術棧** - Vue 3、TypeScript、Tailwind v4
- 📦 **模組化架構** - 組件化開發、可復用設計

### 🎉 有趣互動特效

- 🌊 **懸浮動畫** - 所有卡片都有優雅的 hover 上浮效果 (`hover:-translate-y-1`)
- ✨ **漸變邊框動畫** - About 區塊的焦點卡片有跑馬燈式的漸變邊框
- 🎯 **技能標籤互動** - 技能標籤支援 hover 縮放效果 (`hover:scale-105`)
- 🎪 **按鈕懸浮特效** - 行動按鈕有立體陰影與上浮動畫
- 📄 **Tab 關閉動畫** - VSCode 風格的檔案 Tab 可以點擊關閉
- 💫 **載入動畫** - 區塊載入時的脈衝呼吸效果 (`animate-pulse`)
- 🎨 **進場動畫** - Hero 區塊有從下往上的滑入動效 (`slideInUp`)
- 🌈 **顏色過渡** - 所有互動元素都有流暢的顏色與陰影過渡

## 🛠️ 技術棧

### 核心技術
- **Vue 3** - 漸進式 JavaScript 框架
- **TypeScript** - 類型安全的 JavaScript 超集
- **Vite** - 快速建構工具
- **Tailwind CSS v4** - 實用優先的 CSS 框架

### UI 與樣式
- **@nuxt/ui** - Vue 3 組件庫
- **@iconify/vue** - 豐富的圖示系統
- **unplugin-fonts** - 字體最佳化載入

### 開發工具
- **unplugin-vue-router** - 自動路由生成
- **vite-plugin-vue-layouts-next** - 佈局系統
- **@vueuse/head** - 文件 head 管理
- **@vueuse/core** - Vue 組合式 API 工具集

### 程式碼品質
- **ESLint** - 程式碼檢查
- **Prettier** - 程式碼格式化
- **TypeScript** - 靜態類型檢查

## 📁 專案結構

```
workCV/
├── src/
│   ├── components/          # 可復用組件
│   │   ├── common/         # 通用組件 (Tab, Card 等)
│   │   └── sections/       # 區塊組件 (Hero, About, Projects, Skills)
│   ├── composables/        # 組合式函數
│   ├── layouts/            # 頁面佈局
│   ├── pages/              # 路由頁面
│   ├── store/              # 狀態管理
│   │   └── data/          # 資料模型與常數
│   ├── types/              # TypeScript 類型定義
│   └── assets/             # 靜態資源
├── public/                 # 公共資源
└── dist/                   # 建構輸出
```

## 🚀 快速開始

### 環境要求

- Node.js 16.0 以上版本
- npm 或 yarn 包管理器

### 安裝與執行

```bash
# 複製專案
git clone https://github.com/Chlorophyll319/workCV.git
cd workCV

# 安裝依賴
npm install

# 開發模式
npm run dev

# 建構專案
npm run build

# 預覽建構結果
npm run preview
```

## 📋 可用腳本

| 指令 | 功能說明 |
|------|----------|
| `npm run dev` | 啟動開發伺服器 (預設 http://localhost:3000) |
| `npm run build` | 建構生產版本 |
| `npm run preview` | 預覽建構後的網站 |

## 🎨 設計理念

### VSCode 主題風格
- 採用 Extensions Marketplace 的卡片式設計
- 保持一致的色彩系統與間距
- 模擬擴充套件安裝頁面的佈局結構

### 使用者體驗
- **Lazy Loading** - 區塊進入視窗時才載入內容
- **Code Splitting** - 按需載入組件，減少初始載入時間
- **字體最佳化** - 預載入關鍵字體，避免 FOIT/FOUT
- **響應式設計** - 適配各種螢幕尺寸

### SEO 最佳化
- 完整的 meta 標籤設定
- Open Graph 與 Twitter Cards 支援
- 語義化 HTML 結構
- 結構化資料標記

## 🔧 自訂設定

### 個人資料修改
編輯 `src/store/data/` 目錄下的資料檔案：
- `profile.ts` - 個人基本資訊
- `projects.ts` - 專案作品資料
- `skills.ts` - 技能與專長

### 樣式自訂
- Tailwind 設定：`tailwind.config.js`
- 全域樣式：`src/style.css`
- 組件樣式：各組件內的 `<style>` 區塊

### 部署設定
專案已設定 GitHub Pages 部署：
- 建構輸出：`dist/` 目錄
- 基礎路徑：`./`（適用於 GitHub Pages）

## 📈 效能最佳化

### 載入策略
- **立即載入** - Hero Section（LCP 關鍵內容）
- **Lazy Loading** - About、Projects、Skills 區塊
- **Code Splitting** - 非關鍵組件動態載入

### 資源最佳化
- 字體預載入與 fallback 策略
- 圖示按需載入（@iconify/vue）
- DNS prefetch 外部資源

### 建構最佳化
- Terser 壓縮
- 樹搖（Tree Shaking）
- 靜態資源快取策略

## 🤝 貢獻指南

歡迎提交 Issue 或 Pull Request 來改善這個專案！

### 開發規範
- 使用 TypeScript 進行類型安全開發
- 遵循 ESLint 與 Prettier 程式碼規範
- 組件命名採用 PascalCase
- 檔案命名採用 kebab-case

## 📄 授權協議

MIT License - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡方式

- **作者**: 葉芃 (Evelyn)
- **GitHub**: [@Chlorophyll319](https://github.com/Chlorophyll319)
- **網站**: [evenly-resume.dev](https://chlorophyll319.github.io/workCV/#/)

---

⭐ 如果這個專案對你有幫助，請給它一個星星！
