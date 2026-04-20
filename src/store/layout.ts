export const MASTHEAD = {
  kicker: 'Personal CV',
  title: '個人履歷',
  tagline: '從設計思維到功能實現',
  est: `Est. ${new Date().getFullYear()}`,
} as const;

export const currentDate = computed(() => {
  const now = new Date();
  return now.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

export const SECTIONS = [
  { id: 'hero', name: '個人簡介', icon: 'heroicons:user' },
  { id: 'projects', name: '專案作品', icon: 'heroicons:folder' },
  { id: 'skills', name: '技能專長', icon: 'heroicons:cog-6-tooth' },
  { id: 'about', name: '關於我', icon: 'heroicons:information-circle' },
  { id: 'experience', name: '我的經歷', icon: 'heroicons:document-text' },
] as const;
