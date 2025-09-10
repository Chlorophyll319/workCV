<template>
  <div class="h-screen flex flex-col bg-base text-text font-sans text-sm">
    <!-- 頂部選單列 -->
    <div
      class="h-[30px] bg-primary border-b border-primary-700 flex items-center justify-between px-2"
    >
      <div class="flex items-center gap-3">
        <div class="p-1">
          <Icon icon="vscode-icons:file-type-vscode" class="w-4 h-4" />
        </div>
        <div
          class="text-xs md:text-xs text-primary-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] md:max-w-none"
        >
          <span class="hidden sm:inline">葉芃 (Evelyn) - Frontend Engineer Resume</span>
          <span class="sm:hidden">Evelyn Resume</span>
        </div>
      </div>

      <!-- 手機版漢堡選單 -->
      <button
        @click="toggleSidebar"
        class="md:hidden p-1 hover:bg-primary-600 rounded transition-colors"
        title="切換選單"
      >
        <Icon icon="heroicons:bars-3" class="w-4 h-4 text-primary-50" />
      </button>
    </div>

    <div class="flex-1 flex overflow-hidden">
      <!-- 主要編輯區域 -->
      <div class="flex-1 flex flex-col relative">
        <!-- Tab 列 -->
        <div class="h-[35px] bg-primary-100 border-b border-primary-200 flex items-stretch">
          <div
            :class="[
              'relative w-[200px] h-[35px] border-r border-primary-200 flex items-center gap-2 px-3 bg-card',
              // 特殊檔案類型樣式
              activeFile.type === '延伸模組' ? 'font-medium' : '',
            ]"
          >
            <Icon
              :icon="activeFile.icon"
              class="w-3 h-3"
              :style="{ color: getFileColor(activeFile.id) }"
            />
            <span class="text-sm truncate">{{ activeFile.displayName }}</span>
            <Icon
              icon="heroicons:lock-closed"
              class="w-3 h-3 ml-auto text-gray-400 flex-shrink-0"
              title="此分頁已鎖定"
            />
            <div
              class="absolute bottom-0 left-0 right-0 h-px"
              :style="{ backgroundColor: getFileColor(activeFile.id) }"
            ></div>
          </div>
        </div>

        <!-- 主要內容區 -->
        <main class="flex-1 bg-base p-2 sm:p-4 md:p-6 overflow-auto scroll-smooth">
          <div class="max-w-full mx-auto">
            <router-view />
          </div>
        </main>

        <!-- 拖拽調整邊界 -->
        <div
          v-if="!isSidebarCollapsed"
          @mousedown="startResize"
          :class="[
            'absolute right-0 top-0 w-2 h-full cursor-col-resize hover:bg-accent transition-colors duration-200 z-30',
            'bg-transparent hover:bg-accent hover:bg-opacity-60',
            'hidden md:block',
          ]"
          title="Drag to resize sidebar"
        ></div>
      </div>

      <!-- 側邊區域（包含面板和活動列） -->
      <div
        :class="[
          'flex transition-all duration-300 ease-in-out',
          // 桌面版 - 普通流式布局
          'md:relative',
          // 手機版 - 固定定位覆蓋層，從頂部選單下方開始
          'fixed md:static right-0 z-20 shadow-xl md:shadow-none',
          // 顯示/隱藏控制 - 手機版用 transform，桌面版用 width
          isSidebarCollapsed
            ? 'transform translate-x-full md:translate-x-0'
            : 'transform translate-x-0',
        ]"
        :style="{
          top: windowWidth < 768 ? '30px' : '0',
          height: windowWidth < 768 ? 'calc(100vh - 30px)' : '100%',
        }"
      >
        <!-- 側邊面板 -->
        <div
          :class="[
            'bg-card border-l border-border border-opacity-20 flex flex-col overflow-hidden',
            // 桌面版寬度控制
            'md:block',
          ]"
          :style="{
            width:
              windowWidth >= 768 ? (isSidebarCollapsed ? '0px' : `${sidebarWidth}px`) : '240px',
          }"
        >
          <div
            class="h-[35px] bg-primary flex items-center justify-between px-3 border-b border-primary-700"
          >
            <span class="text-xs font-bold tracking-wider text-white">EXPLORER</span>
            <div class="flex gap-1">
              <Icon
                icon="heroicons:document-plus"
                class="w-4 h-4 cursor-pointer hover:text-accent transition-colors text-white"
                title="New File"
              />
              <Icon
                icon="heroicons:folder-plus"
                class="w-4 h-4 cursor-pointer hover:text-accent transition-colors text-white"
                title="New Folder"
              />
              <Icon
                icon="heroicons:arrow-path"
                class="w-4 h-4 cursor-pointer hover:text-accent transition-colors text-white"
                title="Refresh"
                @click="refreshPage"
              />
            </div>
          </div>

          <!-- 檔案總管 -->
          <div class="flex-1 py-2">
            <div class="px-3">
              <div
                @click="toggleFolder"
                class="flex items-center gap-1 py-1 cursor-pointer hover:bg-primary-50 transition-colors"
              >
                <Icon
                  :icon="isFolderExpanded ? 'heroicons:chevron-down' : 'heroicons:chevron-right'"
                  class="w-3 h-3 text-gray-600 transition-transform"
                />
                <Icon
                  :icon="isFolderExpanded ? 'heroicons:folder-open' : 'heroicons:folder'"
                  class="w-4 h-4 text-accent"
                />
                <span class="text-sm font-medium text-text">RESUME-PROJECT</span>
              </div>
              <div v-show="isFolderExpanded" class="ml-4 transition-all duration-200">
                <!-- 檔案列表 -->
                <div
                  v-for="file in sectionsFiles"
                  :key="file.id"
                  @click="handleFileClick(file)"
                  :class="[
                    'flex items-center gap-2 px-2 py-1 cursor-pointer rounded hover:bg-primary-50 transition-colors duration-200',
                    activeFile.id === file.id ? 'bg-primary-100' : '',
                    // 延伸模組特殊樣式
                    file.type === '延伸模組' ? 'font-medium' : '',
                  ]"
                >
                  <Icon
                    :icon="file.icon"
                    class="w-4 h-4"
                    :style="{ color: getFileColor(file.id) }"
                  />
                  <span class="text-sm">{{ file.displayName }}</span>
                  <span v-if="file.type === '延伸模組'" class="text-xs text-accent ml-auto"
                    >ext</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 側邊活動列 -->
        <div
          class="w-12 bg-primary-700 border-l border-primary-800 flex flex-col justify-between py-2"
        >
          <div class="flex flex-col gap-1">
            <div
              @click="toggleSidebar"
              :class="[
                'relative w-12 h-12 flex items-center justify-center cursor-pointer text-white transition-colors',
                isSidebarCollapsed
                  ? 'hover:bg-primary-800'
                  : 'bg-accent bg-opacity-20 before:content-[\'\'] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-4 before:bg-accent',
              ]"
              title="Explorer"
            >
              <Icon icon="heroicons:folder" class="w-5 h-5" />
            </div>
            <div
              class="w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-primary-800 text-white transition-colors"
              title="Search"
            >
              <Icon icon="heroicons:magnifying-glass" class="w-5 h-5" />
            </div>
            <div
              class="w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-primary-800 text-white transition-colors"
              title="Source Control"
            >
              <Icon icon="heroicons:code-bracket" class="w-5 h-5" />
            </div>
            <div
              class="w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-primary-800 text-white transition-colors"
              title="Extensions"
            >
              <Icon icon="heroicons:squares-2x2" class="w-5 h-5" />
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <div
              class="w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-primary-800 text-white transition-colors"
              title="Settings"
            >
              <Icon icon="heroicons:cog-6-tooth" class="w-5 h-5" />
            </div>
            <div
              @click="toggleSidebar"
              :class="[
                'w-12 h-12 flex items-center justify-center cursor-pointer transition-colors text-white',
                isSidebarCollapsed ? 'hover:bg-primary-800 bg-primary-600' : 'hover:bg-primary-800',
              ]"
              :title="isSidebarCollapsed ? 'Show Panel' : 'Hide Panel'"
            >
              <Icon
                :icon="
                  isSidebarCollapsed
                    ? 'heroicons:chevron-double-left'
                    : 'heroicons:chevron-double-right'
                "
                class="w-5 h-5"
              />
            </div>
          </div>
        </div>
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
import { Icon } from '@iconify/vue';
import { ref, onMounted, onUnmounted } from 'vue';
import {
  allFiles,
  sectionsFiles,
  getFileColor,
  getActiveFile,
  type FileItem,
} from '../assets/data/fileSystem';

// 側邊面板收合狀態
const isSidebarCollapsed = ref(false);
// 側邊欄寬度狀態
const sidebarWidth = ref(240); // 預設 240px
const minSidebarWidth = 180;
const maxSidebarWidth = 400;
// 響應式寬度檢測
const windowWidth = ref(window.innerWidth);

// 拖拽相關狀態
const isResizing = ref(false);

// 資料夾展開狀態
const isFolderExpanded = ref(true);

// 檔案管理狀態
const activeFile = ref<FileItem>(getActiveFile());

// 初始化預設檔案
const initializeActiveFile = () => {
  // 預設設定 Hero 為活躍檔案
  activeFile.value = sectionsFiles[0]; // hero 是第一個
  // 頁面載入後導航到 Hero 區域
  setTimeout(() => {
    navigateToSection('hero');
  }, 100);
};

// 在行動裝置上預設收合
onMounted(() => {
  // 初始化檔案狀態
  initializeActiveFile();

  if (window.innerWidth < 768) {
    isSidebarCollapsed.value = true;
  }

  // 監聽視窗大小變化
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    if (window.innerWidth < 768) {
      // 行動裝置自動收合
      isSidebarCollapsed.value = true;
    }
    // 確保拖拽寬度在合理範圍內
    if (sidebarWidth.value > window.innerWidth * 0.6) {
      sidebarWidth.value = Math.min(maxSidebarWidth, window.innerWidth * 0.4);
    }
  };

  window.addEventListener('resize', handleResize);

  // 組件銷毀時清除監聽器
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});

// 切換側邊欄收合狀態
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

// 重新整理頁面
const refreshPage = () => {
  window.location.reload();
};

// 切換資料夾展開狀態
const toggleFolder = () => {
  isFolderExpanded.value = !isFolderExpanded.value;
};

// 導航到指定區域的函數
const navigateToSection = (section?: string) => {
  if (section) {
    const element = document.getElementById(section);
    if (element) {
      // 找到滾動容器 (main 元素)
      const scrollContainer = document.querySelector('main');
      if (scrollContainer) {
        // 計算元素相對於容器的位置
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const relativeTop = elementRect.top - containerRect.top + scrollContainer.scrollTop;

        // 計算偏移量：減去一些空間讓元素不會貼頂部
        const headerOffset = 20;

        scrollContainer.scrollTo({
          top: Math.max(0, relativeTop - headerOffset),
          behavior: 'smooth',
        });
      }
    }
  }
};

// 檔案管理函數
const handleFileClick = (file: FileItem) => {
  activeFile.value = file;
  // 導航到對應的區域
  navigateToSection(file.section);
};

// 拖拽調整寬度功能
const startResize = (e: MouseEvent) => {
  if (isSidebarCollapsed.value) return;

  isResizing.value = true;
  const startX = e.clientX;
  const startWidth = sidebarWidth.value;

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing.value) return;

    // 修正算法：側邊欄在右側，往左拖應該變小，往右拖應該變大
    const newWidth = startWidth - (e.clientX - startX);
    sidebarWidth.value = Math.min(Math.max(newWidth, minSidebarWidth), maxSidebarWidth);
  };

  const handleMouseUp = () => {
    isResizing.value = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
};
</script>

<style scoped>
.tab-container {
  /* 隱藏捲動軸 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  /* 確保不會超出容器 */
  flex: 1;
  min-width: 0; /* 允許彈性收縮 */
}

.tab-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
