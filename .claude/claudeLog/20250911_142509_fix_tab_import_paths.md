# 修復 Tab.vue 檔案引用路徑錯誤 - 2025/09/11 14:25

## 問題描述

執行 `npm run build` 時出現以下錯誤：
```
Could not resolve "../../composables/Tab.vue" from "src/components/sections/SkillsSection.vue?vue&type=script&setup=true&lang.ts"
```

## 問題分析

- Tab.vue 檔案實際位置：`src/components/Tab.vue`
- 但多個 section 檔案卻引用了錯誤的路徑：`../../composables/Tab.vue`
- 受影響的檔案：
  - `src/components/sections/SkillsSection.vue`
  - `src/components/sections/AboutSection.vue`
  - `src/components/sections/ProjectsSection.vue`

## 解決方案

### 1. 檢查 Tab.vue 實際位置
使用 `Glob` 工具確認 Tab.vue 檔案位於 `src/components/Tab.vue`

### 2. 修正所有錯誤的 import 路徑

**修正前：**
```typescript
import Tab from '../../composables/Tab.vue';
```

**修正後：**
```typescript
import Tab from '../Tab.vue';
```

### 3. 修正的檔案清單
- ✅ `src/components/sections/SkillsSection.vue`
- ✅ `src/components/sections/AboutSection.vue` 
- ✅ `src/components/sections/ProjectsSection.vue`

## 驗證結果

執行 `npm run build` 成功：
```
✓ built in 4.76s
```

建置產生的檔案：
- dist/index.html (1.43 kB)
- 各種 CSS 和 JS 檔案正常產生
- 總 bundle size 約 260KB (gzip 89.50 kB)

## 總結

成功修復了所有 Tab.vue 檔案的引用路徑問題，專案現在可以正常建置。問題的根本原因是檔案搬移後沒有更新相對路徑的引用。