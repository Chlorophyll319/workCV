<template>
  <nav
    :class="[
      'bg-surface border-b border-outline-variant sticky top-0 z-50 w-full transition-shadow duration-300',
      scrolled ? 'shadow-md' : 'shadow-none',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex justify-between items-center h-14 md:h-16">
        <!-- 左：品牌 -->
        <button
          class="select-none cursor-pointer flex items-center gap-2"
          @click="scrollToSection('hero')"
        >
          <img src="/logo-color.svg" alt="logo" class="h-8 w-auto" />
        </button>

        <!-- Desktop：導覽連結 -->
        <div class="hidden md:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="linkClass(item.id)"
          >
            <Icon :name="item.icon" class="size-3.5 shrink-0" />
            <span>{{ item.label }}</span>
          </button>
        </div>

        <!-- Mobile/Tablet：漢堡按鈕 -->
        <button
          class="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-on-surface/60 hover:text-on-surface hover:bg-surface-variant transition-colors"
          @click="drawerOpen = true"
          aria-label="開啟選單"
        >
          <Icon name="heroicons:bars-3" class="size-5" />
        </button>
      </div>
    </div>
  </nav>

  <!-- 抽屜遮罩 -->
  <Transition name="fade">
    <div
      v-if="drawerOpen"
      class="fixed inset-0 z-[60] bg-black/40 md:hidden"
      @click="drawerOpen = false"
    />
  </Transition>

  <!-- 抽屜本體 -->
  <Transition name="slide">
    <div
      v-if="drawerOpen"
      class="fixed top-0 right-0 z-[70] h-full w-64 bg-surface shadow-xl flex flex-col md:hidden"
    >
      <!-- 抽屜標頭 -->
      <div class="flex items-center justify-between px-5 h-14 border-b border-outline-variant">
        <img src="/logo-color.svg" alt="logo" class="h-7 w-auto" />
        <button
          class="flex items-center justify-center w-8 h-8 rounded-lg text-on-surface/60 hover:text-on-surface hover:bg-surface-variant transition-colors"
          @click="drawerOpen = false"
          aria-label="關閉選單"
        >
          <Icon name="heroicons:x-mark" class="size-5" />
        </button>
      </div>

      <!-- 導覽項目 -->
      <nav class="flex flex-col gap-1 p-4">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="handleDrawerNav(item.id)"
          :class="drawerLinkClass(item.id)"
        >
          <Icon :name="item.icon" class="size-4 shrink-0" />
          <span>{{ item.label }}</span>
        </button>
      </nav>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { SECTIONS } from '@/store/layout';

const navItems = SECTIONS.map((s) => ({ id: s.id, label: s.name, icon: s.icon }));
const activeId = ref<string>(SECTIONS[0].id);
const scrolled = ref(false);

const drawerOpen = ref(false);

const linkClass = (id: string) => [
  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-label tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap',
  activeId.value === id
    ? 'bg-primary/10 text-primary font-semibold'
    : 'text-on-surface/60 hover:text-on-surface hover:bg-surface-variant',
];

const drawerLinkClass = (id: string) => [
  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-label tracking-wider uppercase transition-all duration-200 cursor-pointer w-full',
  activeId.value === id
    ? 'bg-primary/10 text-primary font-semibold'
    : 'text-on-surface/60 hover:text-on-surface hover:bg-surface-variant',
];

const handleDrawerNav = (id: string) => {
  drawerOpen.value = false;
  scrollToSection(id);
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 8;

  const anchor = window.scrollY + window.innerHeight * 0.25;
  let current: string = SECTIONS[0].id;
  for (const { id } of SECTIONS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= anchor) current = id;
  }
  activeId.value = current;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = (id: string) => {
  activeId.value = id;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
