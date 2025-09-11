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
  { id: 'hero', name: '個人簡介', icon: 'heroicons:user', color: '#007ACC' },
  { id: 'about', name: '關於我', icon: 'heroicons:information-circle', color: '#C5C5C5' },
  { id: 'skills', name: '技能專長', icon: 'heroicons:cog-6-tooth', color: '#F1FA8C' },
  { id: 'projects', name: '專案作品', icon: 'heroicons:folder', color: '#FF79C6' }
] as const