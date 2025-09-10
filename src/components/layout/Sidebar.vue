<template>
  <div
    class="bg-card border-l border-border border-opacity-20 flex flex-col overflow-hidden"
    :style="{ width: `${width}px` }"
  >
    <!-- Header -->
    <div class="h-[35px] bg-primary flex items-center justify-between px-3 border-b border-primary-700">
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
          @click="$emit('refresh')"
        />
      </div>
    </div>

    <!-- File Explorer -->
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
            v-for="section in sections"
            :key="section.id"
            @click="handleSectionClick(section)"
            :class="[
              'flex items-center gap-2 px-2 py-1 cursor-pointer rounded hover:bg-primary-50 transition-colors duration-200',
              activeSection === section.id ? 'bg-primary-100' : '',
            ]"
          >
            <Icon
              :icon="section.icon"
              class="w-4 h-4"
              :style="{ color: section.color }"
            />
            <span class="text-sm">{{ section.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Resize Handle -->
    <div
      v-if="!isSidebarCollapsed"
      @mousedown="startResize"
      class="absolute right-0 top-0 w-2 h-full cursor-col-resize hover:bg-accent hover:bg-opacity-60 transition-colors duration-200 z-30 bg-transparent hidden md:block"
      title="Drag to resize sidebar"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { SECTIONS, LAYOUT_CONSTANTS } from '../../constants/layout';

interface Props {
  width: number;
  activeSection: string;
  isSidebarCollapsed: boolean;
}

interface Emits {
  (e: 'section-change', section: string): void;
  (e: 'resize', width: number): void;
  (e: 'refresh'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isFolderExpanded = ref(true);
const sections = SECTIONS;

const toggleFolder = () => {
  isFolderExpanded.value = !isFolderExpanded.value;
};

const handleSectionClick = (section: typeof SECTIONS[number]) => {
  emit('section-change', section.id);
};

const startResize = (e: MouseEvent) => {
  const startX = e.clientX;
  const startWidth = props.width;

  const handleMouseMove = (e: MouseEvent) => {
    const newWidth = startWidth - (e.clientX - startX);
    const clampedWidth = Math.min(
      Math.max(newWidth, LAYOUT_CONSTANTS.SIDEBAR_MIN_WIDTH),
      LAYOUT_CONSTANTS.SIDEBAR_MAX_WIDTH
    );
    emit('resize', clampedWidth);
  };

  const handleMouseUp = () => {
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
.absolute {
  position: absolute;
}
</style>