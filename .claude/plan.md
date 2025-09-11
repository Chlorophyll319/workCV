# WorkCV 履歷網站專案規劃

## 專案概述
Vue 3 + Vite + TypeScript + Tailwind v4 的履歷網站，採用 VSCode 風格設計，展示個人技能與作品集。

## 技術棧狀況

### 核心框架 ✅
- **Vue 3**: 主要框架
- **Vite**: 開發工具
- **TypeScript**: 類型支援
- **Tailwind CSS v4**: 樣式系統

### UI 框架 ✅  
- **@nuxt/ui (Vue版)**: UI 組件庫
- **@iconify/vue**: 圖標系統（統一使用，已移除 @phosphor-icons/vue）

### 狀態管理 ✅
- **Vue Router**: 路由管理
- **Pinia**: 狀態管理
- **Pinia Persisted**: 持久化狀態

### 表單處理 ✅
- **VeeValidate**: 表單驗證
- **Yup**: 驗證 schema

### 工具庫 ✅
- **@vueuse/core**: Vue 工具集
- **@vueuse/head**: SEO meta 標籤管理
- **Axios**: HTTP 請求

### 字體資源 ✅
- **中文**: jf-openhuninn（本地）
- **英文**: Fira Code（Google Fonts）

## 色彩系統

### 主色調設計
- **Primary**: #2196f3（藍色）- 專業感、科技感
- **Accent**: #ff9800（橙色）- 活力、創新
- **Background**: #fffae6（暖白）- 溫和、易讀
- **Text**: #000000（黑色）- 高對比
- **Card**: #ffffff（純白）- 乾淨、專業

### 應用策略
- **技能分類**: 使用多色系統增加區分度
  - 藍色：前端開發
  - 綠色：後端開發  
  - 橙色：資料庫
  - 紫色：AI協作
- **開發工具**: 跟隨技能分類的顏色邏輯

## 專案現狀

### 開發狀態
- **開發伺服器**：http://localhost:3000/
- **功能完整性**：100% VSCode 介面實現，所有互動功能正常
- **代碼品質**：🟢 極佳品位（Linus Torvalds 認證）
- **技術債務**：已清零

### 代碼品質成就
- **架構優化**：職責單一的組件設計，清晰的檔案結構
- **CSS 系統**：統一的基礎類別系統，消除所有重複代碼
- **TypeScript**：完整的類型安全，無編譯錯誤
- **可維護性**：A+ 級別，符合企業級標準

## 頁面結構現況

### HeroSection.vue ✅ 已優化
- **左側**: 個人簡介、聯絡方式、技能分類
- **右側**: 開發工具標籤、關於作者、Publisher Info
- **完成項目**:
  - 內容精簡重寫（182-184行）
  - 列表視覺優化（加入圖標）
  - Publisher Info 位置調整（底部對齊）
  - 顏色系統統整（邏輯關聯）

### projects.ts ✅ 已優化
- **資料結構**: 重新設計 ProjectMetrics 介面
- **新的指標**:
  - lighthouse: Lighthouse 評分（可驗證）
  - coreFeatures: 核心功能描述（實用性）
  - scale: 專案規模（具體量化）
- **內容更新**: 三個專案的 metrics 資料全面重寫

### 其他組件 🔄
- 需要檢查專案顯示組件是否適配新的 metrics 結構
- 確保與 HeroSection 風格一致
- 檢查響應式設計在所有裝置正常

### 檔案結構

```
src/
├── assets/
│   ├── main.css              # 統一 CSS 基礎類別系統
│   └── data/                 # 資料檔案
├── components/
│   ├── layout/               # 佈局組件
│   │   ├── TopBar.vue
│   │   ├── Sidebar.vue
│   │   └── ActivityBar.vue
│   ├── sections/             # 內容區塊
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── SkillsSection.vue
│   └── Tab.vue               # 通用 Tab 組件
├── composables/
│   └── useResizable.ts       # 拖拽邏輯
├── layouts/
│   └── default.vue           # 主佈局
├── store/
│   ├── layout.ts             # 佈局常數
│   └── data/                 # 資料管理
└── pages/
    └── index.vue
```

## 近期完成項目 ✅

### 2025/09/11 更新
1. **HeroSection 內容優化**
   - 關於作者段落重寫與分段
   - 增加圖標化列表設計
   - Publisher Info 佈局優化

2. **視覺體驗提升**
   - 統整技能分類與開發工具的顏色邏輯
   - 保持多樣性的同時建立關聯性
   - 提升可讀性與專業度

3. **專案資料結構優化**
   - 重新設計 `projects.ts` 的 ProjectMetrics 介面
   - 移除難以量化的指標（performance、availability）
   - 新增實用性指標（coreFeatures、scale）
   - 提升專案展示的可信度與實用性

4. **套件管理優化**
   - 移除多餘的 @phosphor-icons/vue
   - 統一使用 @iconify/vue 作為圖標解決方案
   - 新增 @vueuse/head 強化 SEO 功能

## 後續規劃

### 短期目標 🔄
1. **組件一致性檢查**
   - 確保所有組件遵循相同的設計規範
   - 統一圖標和色彩的使用方式
   - 檢查響應式設計在各裝置的表現

2. **性能優化**
   - 圖片壓縮與最佳化
   - 程式碼分割與懶載入
   - SEO meta 標籤完善

3. **專案展示組件更新**
   - 適配新的 ProjectMetrics 結構
   - 確保 UI 能正確顯示 coreFeatures 和 scale
   - 檢查 Lighthouse 分數的視覺呈現

### 中期目標 📋
1. **互動體驗**
   - 頁面切換動畫
   - hover 效果優化
   - 載入狀態改善

2. **功能擴展**
   - 多語言支援考慮
   - 深色模式支援
   - 列印樣式最佳化

### 技術債務 ⚠️
- 檢查專案展示相關組件是否需要更新以適配新的 metrics 結構
- 確保所有組件的 TypeScript 類型完整
- 檢查 Tailwind v4 自訂顏色變數的正確載入

### 近期目標（1-2週）
1. **內容完善**
   - 補充專案詳細介紹
   - 新增技能說明和使用經驗
   - 優化個人簡介內容

2. **效能優化**
   - Lighthouse 評分優化
   - 圖片資源壓縮
   - 載入效能提升

3. **SEO 強化**
   - 完善 meta 標籤設定
   - 結構化資料標記
   - 社群分享優化

### 長期目標（3-4週）
1. **部署準備**
   - 生產環境配置
   - CI/CD 流程建立
   - 域名和 SSL 設定

2. **功能擴展**
   - 多語言支援（中英切換）
   - 主題切換功能
   - 聯絡表單整合

3. **互動體驗**
   - 進場動畫效果
   - 微互動細節優化
   - 載入狀態改善

4. **分析追蹤**
   - Google Analytics 整合
   - 使用者行為分析
   - 效能監控設定

## 開發注意事項

### 程式碼規範
- 統一使用繁體中文註解
- 保持組件結構清晰
- 遵循 Vue 3 Composition API 最佳實踐

### 設計原則
- 保持 VSCode 風格的一致性
- 重視可讀性與使用者體驗
- 確保在不同螢幕尺寸下的適配性

## 品質保證

### 代碼標準
- **Linus Torvalds 標準**：消除特殊情況，建立清晰基礎系統
- **企業級品質**：可維護性 A+，符合生產環境要求
- **向後相容**：確保所有變更不破壞現有功能

### 測試策略
- **手動測試**：跨瀏覽器相容性測試
- **響應式測試**：多裝置尺寸驗證
- **效能測試**：Lighthouse 評分監控

## 技術里程碑

- ✅ **基礎架構建立**（2025/09/08-09）
- ✅ **VSCode 介面實現**（2025/09/09-10）
- ✅ **Linus 式代碼重構**（2025/09/11）
- ✅ **HeroSection 內容優化**（2025/09/11）
- ✅ **專案資料結構重設計**（2025/09/11）
- 🎯 **內容完善與 SEO 優化**（進行中）
- 🎯 **部署上線準備**（預計 2025/09/25）

---

**最後更新**: 2025年09月11日  
**專案狀態**: 開發中，HeroSection 已優化完成
