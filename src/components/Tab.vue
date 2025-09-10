<template>
  <div class="flex items-center gap-2 mb-6 pb-4 border-b-2 border-primary">
    <div class="flex items-center gap-2 px-4 py-2 rounded-t-lg bg-primary text-white">
      <Icon :icon="file.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
      <span class="font-mono text-sm sm:text-base font-semibold">{{ file.displayName }}</span>
      <Icon
        icon="heroicons:x-mark"
        class="w-4 h-4 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors duration-200"
        @click="emit('close')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

// Linus 風格：內聯類型定義，簡潔直接
defineProps<{
  file: {
    icon: string;
    displayName: string;
  };
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
