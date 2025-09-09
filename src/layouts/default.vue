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
        <!-- 行動裝置漢堡選單按鈕 -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-1 hover:bg-primary-700 rounded transition-colors"
          :title="isMobileMenuExpanded ? 'Hide Menu' : 'Show Menu'"
        >
          <Icon
            :icon="isMobileMenuExpanded ? 'heroicons:x-mark' : 'heroicons:bars-3'"
            class="w-4 h-4 text-white"
          />
        </button>
        <!-- 桌面版選單 -->
        <div class="hidden md:flex gap-4">
          <span
            class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Design</span
          >
          <span
            class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Code</span
          >
          <span
            class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >AI-Powered</span
          >
          <span
            class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Projects</span
          >
          <span
            class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Marketing</span
          >
          <span
            class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Connect</span
          >
        </div>
      </div>
      <div
        class="absolute left-1/2 transform -translate-x-1/2 text-xs md:text-xs text-primary-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] md:max-w-none"
      >
        <span class="hidden sm:inline">葉芃 (Evelyn) - Frontend Engineer Resume</span>
        <span class="sm:hidden">Evelyn Resume</span>
      </div>
    </div>
    
    <!-- 手機版選單下拉 -->
    <div 
      v-show="isMobileMenuExpanded"
      class="md:hidden absolute top-[30px] left-2 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 min-w-[160px]"
    >
      <span
        class="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors text-sm"
        @click="isMobileMenuExpanded = false"
        >Design</span
      >
      <span
        class="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors text-sm"
        @click="isMobileMenuExpanded = false"
        >Code</span
      >
      <span
        class="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors text-sm"
        @click="isMobileMenuExpanded = false"
        >AI-Powered</span
      >
      <span
        class="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors text-sm"
        @click="isMobileMenuExpanded = false"
        >Projects</span
      >
      <span
        class="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors text-sm"
        @click="isMobileMenuExpanded = false"
        >Marketing</span
      >
      <span
        class="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors text-sm"
        @click="isMobileMenuExpanded = false"
        >Connect</span
      >
    </div>

    <div class="flex-1 flex overflow-hidden">
      <!-- 側邊活動列 -->
      <div
        class="w-12 bg-primary-700 border-r border-primary-800 flex flex-col justify-between py-2"
      >
        <div class="flex flex-col gap-1">
          <div
            @click="toggleSidebar"
            :class="[
              'relative w-12 h-12 flex items-center justify-center cursor-pointer text-white transition-colors',
              isSidebarCollapsed
                ? 'hover:bg-primary-800'
                : 'bg-accent bg-opacity-20 before:content-[\'\'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-4 before:bg-accent',
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
                  ? 'heroicons:chevron-double-right'
                  : 'heroicons:chevron-double-left'
              "
              class="w-5 h-5"
            />
          </div>
        </div>
      </div>

      <!-- 側邊面板 -->
      <div
        :class="[
          'bg-card border-r border-border border-opacity-20 flex flex-col overflow-hidden transition-all duration-300 ease-in-out',
          // 桌面版
          'md:relative',
          // 手機版 - 絕對定位覆蓋層
          'absolute md:static top-0 left-12 h-full z-20 shadow-lg md:shadow-none',
          // 顯示/隱藏控制
          isSidebarCollapsed ? 'hidden md:block md:w-0' : 'block'
        ]"
        :style="{
          width: isSidebarCollapsed ? '0px' : `${sidebarWidth}px`
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
              <div
                v-for="file in allFiles"
                :key="file.id"
                @click="handleFileClick(file)"
                :class="[
                  'flex items-center gap-1.5 px-2 py-0.5 cursor-pointer rounded hover:bg-primary-50 transition-colors',
                  activeFile.id === file.id ? 'bg-primary-100' : ''
                ]"
              >
                <Icon :icon="file.icon" class="w-4 h-4" :style="{ color: getFileColor(file.id) }" />
                <span class="text-sm">{{ file.displayName }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 拖拽調整邊界 -->
        <div
          v-if="!isSidebarCollapsed"
          @mousedown="startResize"
          :class="[
            'absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-accent transition-colors z-10',
            'hidden md:block'
          ]"
          title="Drag to resize sidebar"
        ></div>
      </div>

      <!-- 主要編輯區域 -->
      <div class="flex-1 flex flex-col">
        <!-- Tab 列 -->
        <div class="h-[35px] bg-primary-100 border-b border-primary-200 flex items-stretch overflow-x-auto">
          <div
            v-for="(tab, index) in openTabs"
            :key="tab.id"
            @click="setActiveTab(tab)"
            :class="[
              'relative min-w-[120px] max-w-[200px] h-[35px] border-r border-primary-200 flex items-center gap-1.5 px-3 cursor-pointer transition-colors flex-shrink-0',
              activeFile.id === tab.id 
                ? 'bg-card' 
                : 'bg-primary-100 hover:bg-primary-50'
            ]"
          >
            <Icon :icon="tab.icon" class="w-3 h-3" :style="{ color: activeFile.id === tab.id ? getFileColor(tab.id) : 'var(--color-primary)' }" />
            <span class="text-sm truncate">{{ tab.displayName }}</span>
            <Icon
              icon="heroicons:x-mark"
              class="w-3 h-3 ml-auto p-0.5 rounded hover:bg-primary-200 transition-colors flex-shrink-0"
              @click.stop="closeTab(tab)"
            />
            <div 
              v-if="activeFile.id === tab.id"
              class="absolute bottom-0 left-0 right-0 h-px"
              :style="{ backgroundColor: getFileColor(tab.id) }"
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
    </div>

    <!-- 底部狀態列 -->
    <div class="h-[22px] bg-accent text-white flex items-center justify-between px-2 sm:px-3 text-xs">
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
        <Icon icon="heroicons:check-circle" class="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
        <span>Ready</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';
import { allFiles, getFileColor, type FileItem } from '../assets/data/fileSystem';

// 側邊面板收合狀態
const isSidebarCollapsed = ref(false);
// 側邊欄寬度狀態
const sidebarWidth = ref(240); // 預設 240px
const minSidebarWidth = 180;
const maxSidebarWidth = 400;

// 拖拽相關狀態
const isResizing = ref(false);

// 資料夾展開狀態
const isFolderExpanded = ref(true);

// 手機版頂部選單展開狀態
const isMobileMenuExpanded = ref(false);

// 檔案管理狀態
const activeFile = ref<FileItem>(allFiles[1]); // 預設為 about-me.md
const openTabs = ref<FileItem[]>([allFiles[1], allFiles[4], allFiles[2]]); // 預設開啟幾個 tab

// 在行動裝置上預設收合
onMounted(() => {
  if (window.innerWidth < 768) {
    isSidebarCollapsed.value = true;
  }
  
  // 監聽視窗大小變化
  const handleResize = () => {
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

// 切換手機版選單展開狀態
const toggleMobileMenu = () => {
  isMobileMenuExpanded.value = !isMobileMenuExpanded.value;
};

// 檔案管理函數
const handleFileClick = (file: FileItem) => {
  // 設置為活躍檔案
  activeFile.value = file;
  
  // 如果檔案不在 openTabs 中，則新增
  if (!openTabs.value.find(tab => tab.id === file.id)) {
    openTabs.value.push(file);
  }
};

const setActiveTab = (tab: FileItem) => {
  activeFile.value = tab;
};

const closeTab = (tab: FileItem) => {
  const index = openTabs.value.findIndex(t => t.id === tab.id);
  if (index > -1) {
    openTabs.value.splice(index, 1);
    
    // 如果關閉的是當前活躍的 tab，切換到其他 tab
    if (activeFile.value.id === tab.id && openTabs.value.length > 0) {
      activeFile.value = openTabs.value[Math.max(0, index - 1)];
    }
  }
};

// 拖拽調整寬度功能
const startResize = (e: MouseEvent) => {
  if (isSidebarCollapsed.value) return;
  
  isResizing.value = true;
  const startX = e.clientX;
  const startWidth = sidebarWidth.value;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing.value) return;
    
    const newWidth = startWidth + (e.clientX - startX);
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
