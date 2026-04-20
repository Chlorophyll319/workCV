<template>
  <section id="experience" class="pt-16 pb-16 w-full">
    <h2 class="font-headline font-bold tracking-tight mb-12 text-center">
      {{ experienceMeta.title }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article
        v-for="(item, index) in experienceData"
        :key="item.id"
        class="space-y-3"
        :class="
          index < experienceData.length - 1 ? 'md:pr-8 md:border-r md:border-outline-variant' : ''
        "
      >
        <!-- 類型 icon + 時間 -->
        <div class="flex items-center gap-2">
          <Icon
            :name="getExperienceIcon(item.type)"
            class="size-3.5 text-on-surface-variant/50 shrink-0"
          />
          <span
            class="font-label text-xs tracking-widest uppercase"
            :class="index === 0 ? 'text-primary' : 'text-secondary'"
          >
            {{ formatExperienceDate(item.startDate, item.endDate) }}
          </span>
        </div>

        <!-- 職稱/標題 -->
        <h3 class="font-headline font-bold leading-tight" style="font-size: 1.25rem">
          {{ item.gitCommitStyle || item.title }}
        </h3>

        <!-- 組織 -->
        <h4
          class="font-body text-sm font-medium text-secondary m-0 normal-case tracking-normal"
          style="letter-spacing: normal"
        >
          {{ item.organization }}
        </h4>

        <!-- 說明 -->
        <p class="font-body text-sm leading-relaxed text-on-surface-variant">
          {{ item.description }}
        </p>

        <!-- 技術標籤 -->
        <div v-if="item.skills?.length" class="flex flex-wrap gap-1.5 pt-1">
          <span
            v-for="skill in item.skills.slice(0, 5)"
            :key="skill"
            class="font-mono text-xs px-2 py-0.5 border border-outline-variant text-on-surface-variant"
            >{{ skill }}</span
          >
          <span v-if="item.skills.length > 5" class="font-body text-xs text-secondary self-center">
            +{{ item.skills.length - 5 }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  experienceData,
  experienceMeta,
  formatExperienceDate,
  getExperienceIcon,
} from '@/store/data/experience';
</script>
