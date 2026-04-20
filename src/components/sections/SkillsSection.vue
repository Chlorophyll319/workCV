<template>
  <section id="skills" class="pt-16 pb-16 w-full">
    <h2 class="font-headline font-bold tracking-tight mb-12 text-center">
      技術能力
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="category in skillCategories"
        :key="category.id"
        class="space-y-4"
      >
        <!-- 分類標題 -->
        <div class="border-b border-outline-variant pb-3">
          <span class="font-label text-xs tracking-widest uppercase text-on-surface font-bold">{{ category.title }}</span>
        </div>

        <!-- 技能列表 -->
        <ul class="space-y-3">
          <li v-for="skill in category.skills" :key="skill.name" class="font-body text-sm">
            <div class="flex items-start gap-2">
              <Icon :name="skill.icon" class="size-4 shrink-0 mt-0.5 text-on-surface-variant" />
              <div>
                <span class="text-on-surface font-medium">{{ skill.name }}</span>
                <p class="text-on-surface-variant text-xs leading-snug mt-0.5">{{ skill.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '@/store/data/skills';
</script>
