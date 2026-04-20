<template>
  <section id="skills" class="border-t border-outline-variant pt-16 pb-16 w-full">
    <h2 class="font-headline font-bold tracking-tight mb-12 text-center">
      技術能力
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
      <div
        v-for="(category, index) in skillCategories"
        :key="category.id"
        class="space-y-4 py-6"
        :class="[
          index < skillCategories.length - 1 ? 'lg:pr-8 lg:border-r lg:border-outline-variant' : '',
          index < skillCategories.length - 2 ? 'sm:pr-8 sm:border-r sm:border-outline-variant lg:border-r-0' : '',
          index % 2 !== 0 ? 'sm:pl-8 sm:border-r-0 lg:pl-8' : '',
        ]"
      >
        <!-- 分類標題 -->
        <div class="border-b border-outline-variant pb-3">
          <span class="font-label text-xs tracking-widest uppercase text-on-surface font-bold">{{ category.title }}</span>
        </div>

        <!-- 技能列表 -->
        <ul class="space-y-3">
          <li v-for="skill in category.skills" :key="skill.name" class="font-body text-sm">
            <div class="flex items-baseline gap-2">
              <span class="text-primary text-xs flex-shrink-0">◆</span>
              <div>
                <span class="text-on-surface font-medium">{{ skill.name }}</span>
                <span v-if="skill.level === 'advanced'" class="text-primary font-bold ml-1 text-xs">★</span>
                <p class="text-on-surface-variant text-xs leading-snug mt-0.5">{{ skill.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 圖例 -->
    <div class="mt-8 pt-4 border-t border-outline-variant flex flex-wrap items-center gap-6">
      <span class="font-label text-xs tracking-widest uppercase text-secondary">圖例</span>
      <span class="font-body text-xs text-on-surface-variant flex items-center gap-1.5">
        <span class="text-primary text-xs">★</span> 進階熟練
      </span>
      <span class="font-body text-xs text-on-surface-variant flex items-center gap-1.5">
        <span class="text-primary text-xs">◆</span> 具備經驗
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '@/store/data/skills';
</script>
