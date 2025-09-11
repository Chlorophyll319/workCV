# CSS 重構：將自訂 CSS 轉換為 Tailwind 語法

## 任務概述
將 `src/assets/main.css` 中的自訂 CSS 類別轉換為 Tailwind 語法，並直接應用到相關組件中，保留基礎設定部分。

## 執行步驟

### 1. 保留 main.css 基礎設定 (1-55 行)
- 保留 `@import` 和 `@theme` 設定
- 保留全域樣式設定（body, *, 字體設定等）
- 保留顏色變數定義

### 2. 分析現有組件中使用的 CSS 類別
發現以下自訂類別：
- `extension-card` - 卡片樣式
- `extension-icon` - 圖示容器
- `install-btn`, `details-btn` - 按鈕樣式
- `category-frontend`, `category-backend`, `category-database`, `category-ai` - 分類標籤
- `skill-vue`, `skill-ts`, `skill-js`, `skill-node`, `skill-db`, `skill-ai` - 技能標籤
- `category-header` - 空的類別（已移除）

### 3. 轉換 CSS 為 Tailwind 語法

#### HeroSection.vue 轉換詳細：

**extension-card**
```css
/* 原本 */
.extension-card {
  @apply border border-gray-200 rounded-lg p-4 sm:p-6;
  @apply transition-all duration-200;
}
.extension-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* 轉換為 */
class="border border-gray-200 rounded-lg p-4 sm:p-6 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 animate-[slideInUp_0.5s_ease-out]"
```

**extension-icon**
```css
/* 原本 */
.extension-icon {
  @apply w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20;
  @apply bg-gradient-to-br from-primary to-accent;
  @apply rounded-lg flex items-center justify-center;
  @apply text-white text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0;
}

/* 轉換為 */
class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0"
```

**按鈕樣式**
```css
/* install-btn */
class="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto px-6 py-2 text-sm bg-primary text-white hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:bg-primary-800"

/* details-btn */
class="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto px-6 py-2 text-sm border-2 border-accent text-accent bg-transparent hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:-translate-y-1"
```

**分類標籤**
```css
/* category-frontend */
class="px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-blue-50 text-blue-700 border-blue-200"

/* category-backend */
class="px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-green-50 text-green-700 border-green-200"

/* category-database */
class="px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-orange-50 text-orange-700 border-orange-200"

/* category-ai */
class="px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-purple-50 text-purple-700 border-purple-200"
```

**技能標籤**
```css
/* skill-vue */
class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-blue-100 text-blue-800"

/* skill-ts */
class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-indigo-100 text-indigo-800"

/* skill-js */
class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-green-100 text-green-800"

/* skill-node */
class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-purple-100 text-purple-800"

/* skill-db */
class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-yellow-100 text-yellow-800"

/* skill-ai */
class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-pink-100 text-pink-800"
```

### 4. 清理 main.css 檔案

**保留的內容：**
- 第 1-55 行：基礎設定、字體、顏色變數、全域樣式
- 第 57-67 行：slideInUp 動畫定義（因為 Tailwind 需要這個 @keyframes）

**移除的內容：**
- 所有自訂 CSS 類別定義
- 響應式設計覆寫（已用 Tailwind 響應式類別取代）
- 重複的按鈕和元件樣式

## 效果與優勢

1. **程式碼一致性**：所有樣式現在都使用 Tailwind 語法
2. **易於維護**：樣式直接在組件中，更容易理解和修改
3. **效能提升**：移除了大量未使用的 CSS 規則
4. **響應式設計**：使用 Tailwind 的響應式前綴更加直觀
5. **主題一致**：仍保留自訂顏色變數，確保品牌一致性

## 檔案異動

### 修改的檔案：
- `src/assets/main.css` - 大幅精簡，保留基礎設定
- `src/components/sections/HeroSection.vue` - 所有自訂類別轉換為 Tailwind
- `src/components/sections/SkillsSection.vue` - 移除空的 category-header 類別

### 保留的功能：
- 所有視覺效果和動畫
- 響應式設計
- hover 效果
- 自訂顏色主題
- 字體設定

## 總結
成功將專案從混合式 CSS（自訂類別 + Tailwind）轉換為純 Tailwind 語法，提升了程式碼的一致性和可維護性，同時保持了所有原有的視覺效果和功能。