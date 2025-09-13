// 顏色系統 - 與 main.css 保持同步
export const THEME_COLORS = {
  PRIMARY: '#2196f3',
  PRIMARY_700: '#1976d2',
  ACCENT: '#ff9800',
  ACCENT_700: '#f57c00'
} as const

export const LAYOUT_CONSTANTS = {
  BREAKPOINT_MD: 768,
  TOPBAR_HEIGHT: 30,
  STATUSBAR_HEIGHT: 22,
  TAB_HEIGHT: 35,
  SIDEBAR_MIN_WIDTH: 180,
  SIDEBAR_MAX_WIDTH: 400,
  SIDEBAR_DEFAULT_WIDTH: 240,
  ACTIVITY_BAR_WIDTH: 48
}

export const SECTIONS = [
  { id: 'hero', name: '個人簡介', icon: 'heroicons:user', color: THEME_COLORS.PRIMARY },
  { id: 'about', name: '關於我', icon: 'heroicons:information-circle', color: THEME_COLORS.PRIMARY_700 },
  { id: 'projects', name: '專案作品', icon: 'heroicons:folder', color: THEME_COLORS.ACCENT_700 },
  { id: 'skills', name: '技能專長', icon: 'heroicons:cog-6-tooth', color: THEME_COLORS.ACCENT },
  { id: 'footer', name: '聯絡資訊', icon: 'heroicons:envelope', color: THEME_COLORS.PRIMARY },
] as const
