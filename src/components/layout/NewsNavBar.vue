<template>
  <nav class="bg-paper-dark border-b border-rule-light sticky top-0 z-50 w-full">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <!-- Desktop nav -->
      <div class="hidden sm:flex items-center">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          :class="btnClass(item.id, 'flex-1 text-center px-4')"
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
          :class="btnClass(item.id, 'flex-shrink-0 px-3')"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { SECTIONS } from '@/store/layout'

const navItems = SECTIONS.map((s) => ({ id: s.id, label: s.name }))
const activeId = ref<string>(SECTIONS[0].id)

const btnClass = (id: string, extra: string) => [
  'section-label py-2.5 border-r border-rule-light transition-colors cursor-pointer last:border-r-0',
  extra,
  activeId.value === id
    ? 'text-ink border-b-2 border-b-accent-blue'
    : 'hover:bg-paper hover:text-ink-secondary',
]

const updateActive = () => {
  const anchor = window.scrollY + window.innerHeight * 0.25
  let current: string = SECTIONS[0].id
  for (const { id } of SECTIONS) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= anchor) current = id
  }
  activeId.value = current
}

onMounted(() => {
  window.addEventListener('scroll', updateActive, { passive: true })
  updateActive()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
})

const scrollToSection = (id: string) => {
  activeId.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
