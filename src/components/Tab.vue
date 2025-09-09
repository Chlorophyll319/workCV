<template>
  <div class="flex items-center gap-2 mb-6 pb-4 border-b-2 border-primary">
    <div class="flex items-center gap-2 px-4 py-2 rounded-t-lg bg-primary text-white">
      <Icon :icon="file.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
      <span class="font-mono text-sm sm:text-base font-semibold">{{ file.displayName }}</span>
      <Icon
        icon="heroicons:x-mark"
        class="w-4 h-4 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors duration-200"
        @click="handleClose"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { FileItem } from '../assets/data/fileSystem';

interface Props {
  file: FileItem;
}

interface Emits {
  (e: 'close'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleClose = () => {
  emit('close');
};
</script>
