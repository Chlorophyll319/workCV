# 履歷網站規格文件（Vue 3 + Vite + TypeScript + Tailwind + Nuxt UI Vue）

> **最新狀態 (2025-09-07 晚間)**：已完成排版重構，從 Bento Grid 並排改為垂直佈局系統

## 🎨 整體設計風格
- 主題風格：**VSCode 主題風**（暗色背景 + 語法高亮點綴）
- 與專題網站的呼應/反差：
  - **專題網站**：米色基底 + RGB 點綴（隱喻「從平面 CMYK → 前端 RGB 的轉換」）
  - **履歷網站**：暗色 VSCode 主題（象徵工程師日常、程式碼世界）
  - **呼應**：專題講「轉職故事」，履歷站表現「工程師定位」
- 背景：深灰 `#1E1E1E`，卡片背景 `#252526`，邊框 `#3C3C3C`
- 文字：主要 `#D4D4D4`，標題白色，次要文字 `#9CA3AF`
- 點綴色（VSCode 語法高亮感）：  
  - 藍 `#569CD6`（關鍵字）  
  - 綠 `#6A9955`（字串）  
  - 黃 `#DCDCAA`（常數/變數）  
  - 紫 `#C586C0`（function）
- 卡片：`rounded-[12px]`，陰影柔和

> 以上僅供參考，請根據 monkai 或其他 vscode 主題修改

- 動效：卡片 hover → accent 色邊框或 glow，進場淡入
- **強調良好的 RWD 體驗**：響應式垂直佈局，所有螢幕尺寸都保持清晰的資訊層次

---

## 📂 頁面區塊（垂直佈局系統）

> **2025-09-07 更新**：已從 Bento Grid 並排改為垂直佈局，提升資訊清晰度

### 現有佈局架構（已實作 ✅）

#### 1. Hero Section - 全寬頂部區塊 ✅
- 姓名、職稱（Frontend Engineer / Aspiring Backend）
- 一句標語（功能導向、資料流思維）
- Terminal 互動設計：`whoami` 和 `ls skills/` 命令模擬
- 兩個 CTA 按鈕（GitHub / 聯絡我）
- 偽 Terminal 視窗設計（左上角紅黃綠點）

#### 2. About Me Section - 獨立全寬區塊 ✅
- **完整個人介紹**：背景轉換、開發理念、目前專注、核心優勢
- **4欄響應式網格**：桌機4欄 → 平板2欄 → 手機1欄
- **VSCode 檔案標籤設計**：`about-me.md` 風格
- **底部 Slogan**：設計思維引用

#### 3. Projects Section - 獨立全寬區塊 ✅ 
- **3個專案展示**：職訓網站、履歷網站、PayMock 模擬器
- **3欄響應式網格**：桌機3欄 → 平板2欄 → 手機1欄
- 每張卡片包含：
  - 專案名稱與類型
  - 簡短描述
  - 技術標籤
  - 效能指標 (Lighthouse、載入時間等)
  - 專案亮點列表
  - Demo / GitHub 按鈕
- 每張卡用不同 accent 色呼應語法高亮（藍/綠/黃）

#### 4. Skills Section - 獨立全寬區塊 ✅
- **4個技能分類**：Frontend / Backend / 開發工具 / AI 協作
- **4欄響應式網格**：桌機4欄 → 平板3欄 → 手機1欄
- 每個技能附一句描述（不是 logo 牆）
- 技能 tag 邊框用 VSCode 語法高亮色（藍/綠/黃/紫）
- **完全 Tailwind utility-first**：0 行自定義 CSS
- **圖示統一性**：官方 logo + 語意化圖示完美結合
- **閱讀體驗最佳化**：文字排版符合從左到右的閱讀習慣
- **分類圖示語意化**：Frontend (`i-ph-monitor`) 避免與技能圖示重複

---

## 🖋️ 字體要求
- 中文：**jf-openhuninn 粉圓體**  
  - 字體檔會手動放在 `vite-project/src/assets/font/`  
  - 請在專案中設定 `@font-face` 並整合進 Tailwind `fontFamily`
- 英文 & 程式碼：**Fira Code**  
  - 請透過 Google Fonts `<link>` 引入  
  - 英文字與程式碼區塊使用 Fira Code

---

## 🔧 開發注意事項
- 使用 **Nuxt UI Vue 版**（`@nuxt/ui` with Vite plugin）
- Icons：使用 `@iconify/vue`（已精簡，支援多套圖示庫按需載入）
- SEO/Meta：使用 `@vueuse/head`（已安裝，輕量且與 @vueuse 生態整合）
- 動效：使用純 Tailwind transition（保持輕量，符合 VSCode 簡潔風格）
- 保持簡潔，不要過度依賴套件，避免增加維護負擔

---

## ✅ 驗收標準

### 已達成標準 ✅
- `npm install && npm run dev` 可以直接跑起來
- Hero 區有 VSCode 偽 Terminal 條完整互動
- **垂直佈局系統**清晰，每個區塊獨立展示
- 卡片 hover 有 accent 高亮效果
- Projects 區有完整資料（3 筆專案，含 metrics 和亮點）
- 在手機、平板、桌機都有良好的 **RWD 體驗**
- 中文字體顯示粉圓體，英文/程式碼顯示 Fira Code
- **About Me 區塊**有完整的個人資訊展示
- **響應式網格系統**運作良好

### 待完成標準 ⏳
- 無（已全部完成）

---

## 🚀 目前專案狀態 (2025-09-07)

### 開發環境
- **開發伺服器**：`http://localhost:3002` ✅ 正常運行
- **編譯狀態**：✅ 無錯誤，熱重載正常
- **套件狀態**：✅ 已精簡優化，無冗餘依賴

### 完成度
- **Hero Section**: 100% ✅
- **About Me Section**: 100% ✅  
- **Projects Section**: 100% ✅
- **Skills Section**: 100% ✅

### 技術架構
- **排版系統**：垂直佈局 (已從 Bento Grid 重構)
- **響應式設計**：Mobile-first 策略
- **VSCode 主題**：完整色彩系統與字體配置
- **SEO 優化**：@vueuse/head 完整設定