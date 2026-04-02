<template>
  <footer class="w-full mt-8 pb-8">
    <!-- Section label -->
    <div class="mb-3">
      <span class="kicker">Experience · 我的經歷</span>
    </div>
    <div class="newspaper-rule mb-4"></div>

    <!-- Experience list -->
    <div class="space-y-0">
      <div
        v-for="item in experienceData"
        :key="item.id"
        class="flex items-start gap-4 py-3 border-b border-rule-light group"
      >
        <!-- Date column -->
        <div class="w-32 flex-shrink-0">
          <span class="dateline">{{ formatExperienceDate(item.startDate, item.endDate) }}</span>
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-ink text-sm leading-snug">
            {{ item.gitCommitStyle || item.title }}
          </div>
          <div class="mt-0.5 text-xs text-ink-secondary">
            <span class="text-accent-blue font-medium">{{ item.organization }}</span>
            <span class="mx-1.5 text-rule">·</span>
            <span>{{ item.description }}</span>
          </div>
          <div v-if="item.skills?.length" class="flex flex-wrap gap-1 mt-1.5">
            <span
              v-for="skill in item.skills.slice(0, 5)"
              :key="skill"
              class="text-xs px-1.5 py-0.5 border border-rule-light text-ink-muted font-mono"
            >{{ skill }}</span>
            <span
              v-if="item.skills.length > 5"
              class="text-xs px-1.5 py-0.5 text-ink-muted"
            >+{{ item.skills.length - 5 }}</span>
          </div>
        </div>

        <!-- Duration (hover) -->
        <div class="dateline opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          {{ calculateDuration(item.startDate, item.endDate) }}
        </div>
      </div>
    </div>

    <!-- Contact row -->
    <div class="newspaper-rule-thin mt-6 mb-4"></div>
    <div class="flex flex-wrap items-center gap-4 justify-between">
      <div class="flex flex-wrap gap-4">
        <a :href="contactInfo.github" target="_blank" rel="noopener noreferrer"
           class="byline hover:text-accent-blue transition-colors flex items-center gap-1">
          <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
          GitHub
        </a>
        <a :href="`mailto:${contactInfo.email}`"
           class="byline hover:text-accent-blue transition-colors flex items-center gap-1">
          <Icon icon="heroicons:envelope" class="w-3 h-3" />
          {{ contactInfo.email }}
        </a>
        <a :href="contactInfo.linkedin" target="_blank" rel="noopener noreferrer"
           class="byline hover:text-accent-blue transition-colors flex items-center gap-1">
          <Icon icon="heroicons:user" class="w-3 h-3" />
          LinkedIn
        </a>
      </div>
      <div class="dateline">{{ contactInfo.phone }}</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
  experienceData,
  contactInfo,
  formatExperienceDate,
  calculateDuration,
} from '../../store/data/experience';
</script>
