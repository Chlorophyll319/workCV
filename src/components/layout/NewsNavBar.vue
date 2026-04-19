<template>
  <nav class="bg-paper border-b border-rule-light sticky top-0 z-50 w-full">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Desktop nav -->
      <div class="hidden sm:flex items-center gap-0">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="section-label py-2.5 px-4 border-r border-rule-light hover:bg-paper-dark hover:text-accent-blue transition-colors cursor-pointer last:border-r-0"
        >
          {{ item.label }}
        </button>
      </div>

      <!-- Mobile nav: horizontal scroll -->
      <div class="flex sm:hidden items-center overflow-x-auto scrollbar-none">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="section-label py-2.5 px-3 flex-shrink-0 border-r border-rule-light hover:text-accent-blue transition-colors cursor-pointer last:border-r-0"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { SECTIONS } from '@/store/layout';

const navItems = SECTIONS.map((s) => ({ id: s.id, label: s.name }));

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
