// 統一檔案系統配置管理
// 基於 src/components/sections 資料夾內的實際檔案

export interface FileItem {
  id: string
  name: string
  displayName: string
  icon: string
  type: 'vue' | 'js' | 'ts' | 'json' | '延伸模組' | 'md' | 'yaml'
  path: string
  isActive?: boolean
  section?: string
}

// 基於實際 sections 檔案的配置
export const sectionsFiles: FileItem[] = [
  {
    id: 'hero',
    name: 'HeroSectionNew.vue',
    displayName: 'YEH,PENG',
    icon: 'heroicons:puzzle-piece',
    type: '延伸模組',
    path: '/src/components/sections/HeroSectionNew.vue',
    section: 'hero'
  },
  {
    id: 'about',
    name: 'AboutSection.vue',
    displayName: 'about-me.md',
    icon: 'heroicons:user',
    type: 'vue',
    path: '/src/components/sections/AboutSection.vue',
    section: 'about'
  },
  {
    id: 'projects',
    name: 'ProjectsSection.vue',
    displayName: 'projects.ts',
    icon: 'heroicons:rocket-launch',
    type: 'vue',
    path: '/src/components/sections/ProjectsSection.vue',
    section: 'projects'
  },
  {
    id: 'skills',
    name: 'SkillsSection.vue',
    displayName: 'skills-config.yaml',
    icon: 'heroicons:cog-6-tooth',
    type: 'vue',
    path: '/src/components/sections/SkillsSection.vue',
    section: 'skills'
  }
]

// 其他相關檔案（顯示在檔案總管中）
export const otherFiles: FileItem[] = [
  {
    id: 'experience',
    name: 'experience.json',
    displayName: 'experience.json',
    icon: 'heroicons:briefcase',
    type: 'json',
    path: '/src/data/experience.json'
  },
  {
    id: 'contact',
    name: 'contact.json',
    displayName: 'contact.json',
    icon: 'heroicons:envelope',
    type: 'json',
    path: '/src/data/contact.json'
  }
]

// 合併所有檔案
export const allFiles = [...sectionsFiles, ...otherFiles]

// 取得當前活躍的檔案
export const getActiveFile = (): FileItem => {
  // 預設第一個檔案為活躍狀態（about-me.md）
  return sectionsFiles[1] // AboutSection 對應 about-me.md
}

// 取得檔案圖示對應
export const getFileIcon = (fileType: string): string => {
  const iconMap: Record<string, string> = {
    'vue': 'heroicons:document-text',
    'js': 'heroicons:code-bracket',
    'ts': 'heroicons:code-bracket',
    'json': 'heroicons:document-text',
    'md': 'heroicons:document-text',
    'yaml': 'heroicons:cog-6-tooth'
  }
  return iconMap[fileType] || 'heroicons:document-text'
}

// 取得檔案對應的顏色主題
export const getFileColor = (fileId: string): string => {
  const colorMap: Record<string, string> = {
    'hero': 'var(--color-accent)',
    'about': 'var(--color-primary)', 
    'projects': 'var(--color-primary)',
    'skills': 'var(--color-primary)',
    'experience': 'var(--color-primary)',
    'contact': 'var(--color-primary)'
  }
  return colorMap[fileId] || 'var(--color-primary)'
}