<template>
  <nav class="bg-paper-dark border-b border-rule-light sticky top-0 z-50 w-full">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Desktop nav -->
      <div class="hidden sm:flex items-center gap-0">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          :class="[
            'section-label flex-1 text-center py-2.5 px-4 border-r border-rule-light transition-colors cursor-pointer last:border-r-0 relative',
            activeId === item.id
              ? 'text-ink border-b-2 border-b-accent-blue'
              : 'hover:bg-paper hover:text-ink-secondary'
          ]"
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
          :class="[
            'section-label py-2.5 px-3 flex-shrink-0 border-r border-rule-light transition-colors cursor-pointer last:border-r-0',
            activeId === item.id
              ? 'text-ink border-b-2 border-b-accent-blue'
              : 'hover:text-ink-secondary'
          ]"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SECTIONS } from '@/store/layout'

const navItems = SECTIONS.map((s) => ({ id: s.id, label: s.name }))
const activeId = ref<string>(SECTIONS[0].id)

let observer: IntersectionObserver | null = null
let scrollTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (scrollTimer) return
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '-20% 0px -75% 0px', threshold: 0 }
  )

  SECTIONS.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
  if (scrollTimer) clearTimeout(scrollTimer)
})

const scrollToSection = (id: string) => {
  activeId.value = id
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => { scrollTimer = null }, 800)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
