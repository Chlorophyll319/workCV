# Tab 組件重構對話紀錄

**日期時間：** 2025-09-09 18:47:14

## 任務目標

將各個 Section 中重複的 VSCode File Tab 設計拆分成可重用的 `Tab.vue` 組件，並根據 `fileSystem.ts` 配置動態顯示檔案名稱和圖示。

## 完成內容

### 1. 創建可重用的 Tab 組件

**檔案：** `src/components/Tab.vue`

- 接受 `FileItem` 作為 prop
- 動態顯示檔案名 (`displayName`) 和圖示 (`icon`)
- 支援關閉事件 (`@close`)
- 使用 TypeScript 介面定義

```vue
<template>
  <div class="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-primary">
    <div class="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-t-lg bg-primary text-white">
      <Icon :icon="file.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
      <span class="font-mono text-sm sm:text-base font-semibold">{{ file.displayName }}</span>
      <Icon
        icon="heroicons:x-mark"
        class="w-3 h-3 sm:w-4 sm:h-4 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors"
        @click="handleClose"
      />
    </div>
  </div>
</template>
```

### 2. 修改各個 Section 使用新的 Tab 組件

#### AboutSection.vue 修改：
- 引入 `Tab.vue` 組件和 `fileSystem.ts`
- 使用 `computed` 找到對應的 `about` 檔案配置
- 替換原有的硬編碼 tab 結構
- 顯示：`about-me.md` + `heroicons:user` 圖示

#### ProjectsSection.vue 修改：
- 引入 `Tab.vue` 組件和 `fileSystem.ts`
- 使用 `computed` 找到對應的 `projects` 檔案配置
- 替換原有的硬編碼 tab 結構
- 顯示：`projects.ts` + `heroicons:rocket-launch` 圖示

#### SkillsSection.vue 修改：
- 引入 `Tab.vue` 組件和 `fileSystem.ts`
- 使用 `computed` 找到對應的 `skills` 檔案配置
- 替換原有的硬編碼 tab 結構
- 顯示：`skills-config.yaml` + `heroicons:cog-6-tooth` 圖示

### 3. fileSystem.ts 配置利用

現有的 `fileSystem.ts` 提供完整的檔案系統配置：

```typescript
export const sectionsFiles: FileItem[] = [
  {
    id: 'about',
    name: 'AboutSection.vue',
    displayName: 'about-me.md',
    icon: 'heroicons:user',
    section: 'about'
  },
  {
    id: 'projects',
    name: 'ProjectsSection.vue', 
    displayName: 'projects.ts',
    icon: 'heroicons:rocket-launch',
    section: 'projects'
  },
  {
    id: 'skills',
    name: 'SkillsSection.vue',
    displayName: 'skills-config.yaml',
    icon: 'heroicons:cog-6-tooth',
    section: 'skills'
  }
]
```

## 技術實現細節

### 動態檔案查找邏輯：

```typescript
const aboutFile = computed(() => {
  return sectionsFiles.find(file => file.section === 'about') || sectionsFiles[1]
})
```

### 關閉事件處理：

```typescript
const handleTabClose = () => {
  console.log('Tab closed')
}
```

## 成果效益

1. **程式碼復用性**：單一 Tab 組件可供所有 Section 使用
2. **統一管理**：所有檔案資訊集中在 `fileSystem.ts` 管理
3. **型別安全**：使用 TypeScript 介面確保資料結構一致
4. **易於擴展**：新增 Section 只需在 `fileSystem.ts` 添加配置
5. **維護便利**：Tab 樣式修改只需改一個檔案

## 檔案異動清單

**新增檔案：**
- `src/components/Tab.vue`

**修改檔案：**
- `src/components/sections/AboutSection.vue`
- `src/components/sections/ProjectsSection.vue` 
- `src/components/sections/SkillsSection.vue`

**利用現有檔案：**
- `src/assets/data/fileSystem.ts`

## 後續可擴展功能

1. 支援多個 Tab 顯示
2. Tab 間的切換功能
3. Tab 拖拽重排序
4. 檔案狀態指示（已修改、未儲存等）

---

**任務狀態：** ✅ 完成  
**協作方式：** Claude Code + 使用者互動  
**程式語言：** Vue 3 + TypeScript + Tailwind CSS