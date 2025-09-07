# 履歷網站規格文件（Vue 3 + Vite + TypeScript + Tailwind + Nuxt UI Vue）

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
- **強調良好的 RWD 體驗**：手機單欄、平板/桌機 2–3 欄，排版不亂

---

## 📂 頁面區塊（Bento Grid 排版）

### 1. Hero
- 姓名、職稱（Frontend Engineer / Aspiring Backend）
- 一句標語（功能導向、資料流思維）
- 兩個 CTA 按鈕（GitHub / 聯絡我）
- 偽 Terminal 視窗設計（左上角紅黃綠點）

### 2. About Me
- 短版自我介紹（2–3 句）：背景轉職、功能導向、AI 協作
- 放在一張卡片中

### 3. Projects
- 三張卡片（專題網站、履歷站、PayMock）
- 每張卡包含：  
  - 專案名稱  
  - 簡短描述（一句用途 + 技術重點）  
  - 技術 Tag  
  - Demo / GitHub 按鈕  
  - 額外 metrics（如 Lighthouse 分數、API 延遲）
- 每張卡用不同 accent 色呼應語法高亮（藍/綠/黃）

### 4. Skills
- 卡片格子，分成分類：Frontend / Backend / Database / Tools / AI 協作
- 每個技能附一句描述（不是 logo 牆）
- 技能 tag 邊框用 accent 色

### 5. Contact
- Email / GitHub / LinkedIn → 三顆大按鈕
- 簡單表單（展示表單驗證）
- 按鈕可用藍/紫漸層，模仿 VSCode 酷炫感

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
- `npm install && npm run dev` 可以直接跑起來
- Hero 區有 VSCode 偽 Terminal 條
- Bento Grid 格式清晰，md 以上 2–3 欄，手機單欄
- 卡片 hover 有 accent 高亮效果
- Projects 區有假資料（3 筆，含 metrics）
- Skills 區塊用 accent 色標註不同分類
- 在手機、平板、桌機都有良好的 **RWD 體驗**
- 中文字體顯示粉圓體，英文/程式碼顯示 Fira Code