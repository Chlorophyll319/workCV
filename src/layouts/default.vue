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
        <div class="hidden md:flex gap-4">
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >File</span
          >
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Edit</span
          >
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >View</span
          >
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Go</span
          >
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Run</span
          >
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Terminal</span
          >
          <span class="px-2 py-1 cursor-pointer rounded hover:bg-primary-700 hover:text-white transition-colors text-white"
            >Help</span
          >
        </div>
      </div>
      <div
        class="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-xs text-gray-400"
      >
        葉芃 (Evelyn) - Frontend Engineer Resume
      </div>
      <div class="flex">
        <div
          class="w-[45px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-[#3c3c3c] transition-colors"
        >
          <Icon icon="heroicons:minus" class="w-4 h-4" />
        </div>
        <div
          class="w-[45px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-[#3c3c3c] transition-colors"
        >
          <Icon icon="heroicons:rectangle-stack" class="w-4 h-4" />
        </div>
        <div
          class="w-[45px] h-[30px] flex items-center justify-center cursor-pointer hover:bg-[#e81123] hover:text-white transition-colors"
        >
          <Icon icon="heroicons:x-mark" class="w-4 h-4" />
        </div>
      </div>
    </div>

    <div class="flex-1 flex overflow-hidden">
      <!-- 側邊活動列 -->
      <div class="w-12 bg-primary-700 border-r border-primary-800 flex flex-col justify-between py-2">
        <div class="flex flex-col gap-1">
          <div
            class="relative w-12 h-12 flex items-center justify-center cursor-pointer text-accent bg-accent bg-opacity-20 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-4 before:bg-accent"
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
        </div>
      </div>

      <!-- 側邊面板 -->
      <div class="w-60 bg-card border-r border-border border-opacity-20 flex flex-col">
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
            />
          </div>
        </div>

        <!-- 檔案總管 -->
        <div class="flex-1 py-2">
          <div class="px-3">
            <div
              class="flex items-center gap-1 py-1 cursor-pointer hover:bg-primary-50 transition-colors"
            >
              <Icon icon="heroicons:chevron-down" class="w-3 h-3 text-gray-600" />
              <Icon icon="heroicons:folder-open" class="w-4 h-4 text-accent" />
              <span class="text-sm font-medium text-text">RESUME-PROJECT</span>
            </div>
            <div class="ml-4">
              <div
                class="flex items-center gap-1.5 px-2 py-0.5 cursor-pointer rounded hover:bg-primary-50 transition-colors"
              >
                <Icon icon="heroicons:document-text" class="w-4 h-4 text-primary" />
                <span class="text-sm">about-me.md</span>
              </div>
              <div
                class="flex items-center gap-1.5 px-2 py-0.5 cursor-pointer rounded hover:bg-primary-50 transition-colors"
              >
                <Icon icon="heroicons:document-text" class="w-4 h-4 text-primary" />
                <span class="text-sm">experience.json</span>
              </div>
              <div
                class="flex items-center gap-1.5 px-2 py-0.5 cursor-pointer rounded hover:bg-primary-50 transition-colors"
              >
                <Icon icon="heroicons:document-text" class="w-4 h-4 text-primary" />
                <span class="text-sm">projects.ts</span>
              </div>
              <div
                class="flex items-center gap-1.5 px-2 py-0.5 cursor-pointer rounded hover:bg-primary-50 transition-colors"
              >
                <Icon icon="heroicons:document-text" class="w-4 h-4 text-primary" />
                <span class="text-sm">skills.yml</span>
              </div>
              <div
                class="flex items-center gap-1.5 px-2 py-0.5 cursor-pointer rounded hover:bg-primary-50 transition-colors"
              >
                <Icon icon="heroicons:document-text" class="w-4 h-4 text-primary" />
                <span class="text-sm">contact.json</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主要編輯區域 -->
      <div class="flex-1 flex flex-col">
        <!-- Tab 列 -->
        <div class="h-[35px] bg-primary-100 border-b border-primary-200 flex items-stretch">
          <div
            class="relative min-w-[120px] max-w-[200px] h-[35px] bg-card border-r border-primary-200 flex items-center gap-1.5 px-3 cursor-pointer"
          >
            <Icon icon="heroicons:user" class="w-3 h-3 text-accent" />
            <span class="text-sm">about-me.md</span>
            <Icon
              icon="heroicons:x-mark"
              class="w-3 h-3 ml-auto p-0.5 rounded hover:bg-primary-100 transition-colors"
            />
            <div class="absolute bottom-0 left-0 right-0 h-px bg-accent"></div>
          </div>
          <div
            class="min-w-[120px] max-w-[200px] h-[35px] bg-primary-100 border-r border-primary-200 flex items-center gap-1.5 px-3 cursor-pointer hover:bg-primary-50 transition-colors"
          >
            <Icon icon="heroicons:briefcase" class="w-3 h-3 text-primary" />
            <span class="text-sm">experience.json</span>
            <Icon
              icon="heroicons:x-mark"
              class="w-3 h-3 ml-auto p-0.5 rounded hover:bg-[var(--color-primary-200)] transition-colors"
            />
          </div>
          <div
            class="min-w-[120px] max-w-[200px] h-[35px] bg-primary-100 border-r border-primary-200 flex items-center gap-1.5 px-3 cursor-pointer hover:bg-primary-50 transition-colors"
          >
            <Icon icon="heroicons:rocket-launch" class="w-3 h-3 text-primary" />
            <span class="text-sm">projects.ts</span>
            <Icon
              icon="heroicons:x-mark"
              class="w-3 h-3 ml-auto p-0.5 rounded hover:bg-[var(--color-primary-200)] transition-colors"
            />
          </div>
        </div>

        <!-- 主要內容區 -->
        <main class="flex-1 bg-base p-4 overflow-auto">
          <router-view />
        </main>
      </div>
    </div>

    <!-- 底部狀態列 -->
    <div class="h-[22px] bg-accent text-white flex items-center justify-between px-3 text-xs">
      <div class="flex items-center gap-2">
        <Icon icon="heroicons:code-bracket" class="w-4 h-4" />
        <span>TypeScript</span>
        <span class="text-white/60">|</span>
        <span>UTF-8</span>
        <span class="text-white/60">|</span>
        <span>LF</span>
      </div>
      <div class="flex items-center gap-2">
        <span>Ln 1, Col 1</span>
        <span class="text-white/60">|</span>
        <Icon icon="heroicons:check-circle" class="w-4 h-4 text-primary" />
        <span>Ready</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
