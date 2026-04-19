<template>
  <section id="skills" class="w-full py-8">
    <div class="mb-2"><span class="kicker">Skills · 技能專長</span></div>
    <div class="newspaper-rule mb-6"></div>

    <!-- 4-column skill catalog -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
      <div
        v-for="(category, index) in skillCategories"
        :key="category.id"
        class="border-b border-rule-light p-4 sm:p-5"
        :class="index < skillCategories.length - 1 ? 'lg:border-r lg:border-rule-light' : ''"
      >
        <!-- Category header -->
        <div class="flex items-center justify-between mb-3 pb-2 border-b-2 border-ink">
          <span class="text-xs font-bold uppercase tracking-widest text-ink">{{ category.title }}</span>
          <span class="text-xs text-ink-muted font-mono">{{ category.skills.length }}</span>
        </div>

        <!-- Skills list -->
        <ul class="space-y-2.5">
          <li v-for="skill in category.skills" :key="skill.name">
            <div class="flex items-start gap-2">
              <span class="text-accent-gold mt-0.5 text-xs flex-shrink-0">◆</span>
              <div>
                <div class="text-sm text-ink font-medium leading-snug">
                  {{ skill.name }}
                  <span v-if="skill.level === 'advanced'" class="text-accent-red font-bold ml-0.5">★</span>
                </div>
                <div class="text-xs text-ink-muted leading-snug mt-0.5">{{ skill.description }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Legend -->
    <div class="mt-4 pt-3 border-t border-rule-light flex flex-wrap items-center gap-4">
      <span class="dateline">圖例：</span>
      <span class="dateline flex items-center gap-1">
        <span class="text-accent-red text-xs">★</span> 進階熟練
      </span>
      <span class="dateline flex items-center gap-1">
        <span class="text-accent-gold text-xs">◆</span> 具備經驗
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '@/store/data/skills';
</script>
