<template>
  <nav class="bg-surface border-b-[5px] border-solid border-outline-variant sticky top-0 z-50 w-full">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex justify-between items-center py-5">
        <!-- 左：刊物品牌名稱 -->
        <div
          class="font-headline font-bold uppercase tracking-tighter text-on-surface select-none"
          style="font-size: clamp(1.25rem, 3vw, 1.875rem); line-height: 1;"
        >
          {{ MASTHEAD.title }}
        </div>

        <!-- 中/右：導覽連結（Desktop） -->
        <div class="hidden md:flex items-center gap-6">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="linkClass(item.id)"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Mobile：漢堡選單位置用橫向滾動代替 -->
        <div class="flex md:hidden items-center gap-4 overflow-x-auto scrollbar-none">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="linkClass(item.id, true)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { SECTIONS, MASTHEAD } from '@/store/layout'

const navItems = SECTIONS.map((s) => ({ id: s.id, label: s.name }))
const activeId = ref<string>(SECTIONS[0].id)

const linkClass = (id: string, mobile = false) => [
  'font-label text-sm tracking-widest uppercase pb-1 border-b-2 transition-colors duration-200 cursor-pointer whitespace-nowrap',
  mobile ? 'flex-shrink-0' : '',
  activeId.value === id
    ? 'text-primary font-bold border-b-primary'
    : 'text-on-surface opacity-70 hover:opacity-100 hover:text-primary border-b-transparent',
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
.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
</style>
