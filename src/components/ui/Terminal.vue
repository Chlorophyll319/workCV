<template>
  <div class="terminal-window bg-vscode-card rounded-vscode overflow-hidden shadow-vscode">
    <!-- Terminal Header -->
    <div class="terminal-header bg-vscode-border flex items-center justify-between px-3 md:px-4 py-2 md:py-3">
      <!-- Terminal Dots -->
      <div class="terminal-dots">
        <div class="terminal-dot dot-close"></div>
        <div class="terminal-dot dot-minimize"></div>
        <div class="terminal-dot dot-maximize"></div>
      </div>
      
      <!-- Terminal Title -->
      <div class="font-code text-xs md:text-sm text-vscode-text-secondary">
        {{ title }}
      </div>
      
      <!-- Empty space for balance -->
      <div class="w-12 md:w-16"></div>
    </div>

    <!-- Terminal Content -->
    <div class="terminal-content p-4 md:p-6 font-code text-xs md:text-sm leading-relaxed">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'bash'
})
</script>

<style scoped>
.terminal-window {
  min-height: 200px;
  transition: all 0.3s ease;
}

.terminal-window:hover {
  box-shadow: var(--shadow-vscode-hover);
  transform: translateY(-2px);
}

.terminal-content {
  background: linear-gradient(135deg, #252526 0%, #2d2d30 100%);
}
</style>