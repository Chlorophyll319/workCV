<template>
  <div class="h-screen flex flex-col bg-base text-text font-sans text-sm">
    <!-- 頂部選單列 -->
    <TopBar @toggle-sidebar="toggleSidebar" />

    <div class="flex-1 flex overflow-hidden">
      <!-- 主要編輯區域 -->
      <div class="flex-1 flex flex-col relative">
        <!-- Tab 列 -->
        <div class="h-[35px] bg-primary-100 border-b border-primary-200 flex items-stretch">
          <div
            class="relative w-[200px] h-[35px] border-r border-primary-200 flex items-center gap-2 px-3 bg-card"
          >
            <Icon
              :icon="activeSection.icon"
              class="w-3 h-3"
              :style="{ color: activeSection.color }"
            />
            <span class="text-sm truncate">{{ activeSection.name }}</span>
            <Icon
              icon="heroicons:lock-closed"
              class="w-3 h-3 ml-auto text-gray-400 flex-shrink-0"
              title="此分頁已鎖定"
            />
            <div
              class="absolute bottom-0 left-0 right-0 h-px"
              :style="{ backgroundColor: activeSection.color }"
            ></div>
          </div>
        </div>

        <!-- 主要內容區 -->
        <main class="flex-1 bg-base p-2 sm:p-4 md:p-6 overflow-auto scroll-smooth">
          <div class="max-w-full mx-auto">
            <router-view />
          </div>
        </main>
      </div>

      <!-- 側邊區域 -->
      <div
        :class="[
          'flex transition-all duration-300 ease-in-out',
          isMobile ? 'fixed right-0 z-20 shadow-xl' : 'relative',
          isSidebarCollapsed && isMobile ? 'transform translate-x-full' : 'transform translate-x-0',
        ]"
        :style="{
          top: isMobile ? '30px' : '0',
          height: isMobile ? 'calc(100vh - 30px)' : '100%',
        }"
      >
        <!-- 側邊面板 -->
        <Sidebar
          v-if="!isSidebarCollapsed || !isMobile"
          :width="isMobile ? 240 : sidebarWidth"
          :active-section="currentSectionId"
          :is-sidebar-collapsed="isSidebarCollapsed"
          @section-change="handleSectionChange"
          @resize="handleSidebarResize"
          @refresh="refreshPage"
        />

        <!-- 活動列 -->
        <ActivityBar :is-sidebar-collapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
      </div>
    </div>

    <!-- 底部狀態列 -->
    <div
      class="h-[22px] bg-accent text-white flex items-center justify-between px-2 sm:px-3 text-xs"
    >
      <div class="flex items-center gap-1 sm:gap-2 overflow-hidden">
        <Icon icon="heroicons:code-bracket" class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
        <span class="hidden sm:inline">TypeScript</span>
        <span class="sm:hidden">TS</span>
        <span class="text-white/60 hidden sm:inline">|</span>
        <span class="hidden md:inline">UTF-8</span>
        <span class="text-white/60 hidden md:inline">|</span>
        <span class="hidden md:inline">LF</span>
      </div>
      <div class="flex items-center gap-1 sm:gap-2 overflow-hidden">
        <span class="hidden sm:inline">Ln 1, Col 1</span>
        <span class="sm:hidden">1:1</span>
        <span class="text-white/60 hidden sm:inline">|</span>
        <Icon
          icon="heroicons:check-circle"
          class="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0"
        />
        <span>Ready</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Icon } from '@iconify/vue';
import TopBar from '../components/layout/TopBar.vue';
import Sidebar from '../components/layout/Sidebar.vue';
import ActivityBar from '../components/layout/ActivityBar.vue';
import { SECTIONS, LAYOUT_CONSTANTS } from '../store/layout';

const isSidebarCollapsed = ref(false);
const sidebarWidth = ref(LAYOUT_CONSTANTS.SIDEBAR_DEFAULT_WIDTH);
const windowWidth = ref(window.innerWidth);
const currentSectionId = ref('hero');

const isMobile = computed(() => windowWidth.value < LAYOUT_CONSTANTS.BREAKPOINT_MD);
const activeSection = computed(
  () => SECTIONS.find((s) => s.id === currentSectionId.value) || SECTIONS[0],
);

onMounted(() => {
  if (isMobile.value) {
    isSidebarCollapsed.value = true;
  }

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    if (isMobile.value) {
      isSidebarCollapsed.value = true;
    }
    if (sidebarWidth.value > window.innerWidth * 0.6) {
      sidebarWidth.value = Math.min(LAYOUT_CONSTANTS.SIDEBAR_MAX_WIDTH, window.innerWidth * 0.4);
    }
  };

  window.addEventListener('resize', handleResize);

  setTimeout(() => {
    navigateToSection('hero');
  }, 100);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
});

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

const refreshPage = () => {
  window.location.reload();
};

const navigateToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    const scrollContainer = document.querySelector('main');
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const relativeTop = elementRect.top - containerRect.top + scrollContainer.scrollTop;
      const headerOffset = 20;

      scrollContainer.scrollTo({
        top: Math.max(0, relativeTop - headerOffset),
        behavior: 'smooth',
      });
    }
  }
};

const handleSectionChange = (sectionId: string) => {
  currentSectionId.value = sectionId;
  navigateToSection(sectionId);
};

const handleSidebarResize = (width: number) => {
  sidebarWidth.value = width;
};
</script>
