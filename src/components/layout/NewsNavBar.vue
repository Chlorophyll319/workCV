<template>
  <nav
    :class="[
      'bg-surface border-b border-outline-variant sticky top-0 z-50 w-full transition-shadow duration-300',
      scrolled ? 'shadow-md' : 'shadow-none',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex justify-between items-center h-14 md:h-16">
        <!-- 左：品牌 -->
        <button
          class="select-none cursor-pointer flex items-center gap-2"
          @click="scrollToSection('hero')"
        >
          <img src="/logo-color.svg" alt="logo" class="h-8 w-auto" />
        </button>

        <!-- 中/右：導覽連結（Desktop） -->
        <div class="hidden md:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="linkClass(item.id)"
          >
            <Icon :name="item.icon" class="size-3.5 shrink-0" />
            <span>{{ item.label }}</span>
          </button>
        </div>

        <!-- Mobile：橫向滾動 -->
        <div class="flex md:hidden items-center gap-1 overflow-x-auto scrollbar-none">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="linkClass(item.id, true)"
          >
            <Icon :name="item.icon" class="size-3.5 shrink-0" />
            <span>{{ item.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { SECTIONS } from '@/store/layout'

const navItems = SECTIONS.map((s) => ({ id: s.id, label: s.name, icon: s.icon }))
const activeId = ref<string>(SECTIONS[0].id)
const scrolled = ref(false)

const linkClass = (id: string, mobile = false) => [
  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-label tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap',
  mobile ? 'shrink-0' : '',
  activeId.value === id
    ? 'bg-primary/10 text-primary font-semibold'
    : 'text-on-surface/60 hover:text-on-surface hover:bg-surface-variant',
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 8

  const anchor = window.scrollY + window.innerHeight * 0.25
  let current: string = SECTIONS[0].id
  for (const { id } of SECTIONS) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= anchor) current = id
  }
  activeId.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
