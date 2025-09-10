<template>
  <div class="h-[30px] bg-primary border-b border-primary-700 flex items-center justify-between px-2">
    <div class="flex items-center gap-3">
      <div class="p-1">
        <Icon icon="heroicons:user" class="w-4 h-4 text-primary-50" />
      </div>
      <div class="text-xs text-primary-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] md:max-w-none">
        <span class="hidden sm:inline">葉芃 (Evelyn) - Frontend Engineer Resume</span>
        <span class="sm:hidden">Evelyn Resume</span>
      </div>
    </div>

    <button
      @click="$emit('toggle-sidebar')"
      class="md:hidden p-1 hover:bg-primary-600 rounded transition-colors"
      title="切換選單"
    >
      <Icon icon="heroicons:bars-3" class="w-4 h-4 text-primary-50" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineEmits<{
  'toggle-sidebar': []
}>();
</script>