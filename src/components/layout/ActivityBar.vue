<template>
  <div class="w-12 bg-primary-700 border-l border-primary-800 flex flex-col justify-between py-2">
    <div class="flex flex-col gap-1">
      <div
        @click="$emit('toggle-sidebar')"
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
        @click="$emit('toggle-sidebar')"
        :class="[
          'w-12 h-12 flex items-center justify-center cursor-pointer transition-colors text-white',
          isSidebarCollapsed ? 'hover:bg-primary-800 bg-primary-600' : 'hover:bg-primary-800',
        ]"
        :title="isSidebarCollapsed ? 'Show Panel' : 'Hide Panel'"
      >
        <Icon
          :icon="isSidebarCollapsed ? 'heroicons:chevron-double-left' : 'heroicons:chevron-double-right'"
          class="w-5 h-5"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  isSidebarCollapsed: boolean;
}

defineProps<Props>();

defineEmits<{
  'toggle-sidebar': []
}>();
</script>