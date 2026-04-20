<template>
  <section
    id="about"
    class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full py-16"
  >
    <h2 class="font-headline font-bold tracking-tight mb-12 text-center">關於我</h2>
    <!-- 主欄（8/12）：故事文字 -->
    <div class="lg:col-span-8 space-y-6">
      <h2 class="font-headline font-bold tracking-tight">
        {{
          profile.about.quote
            ? `「${profile.about.quote}」`
            : profile.about.description.slice(0, 30) + '...'
        }}
      </h2>

      <div
        class="font-body text-base leading-relaxed text-on-surface-variant drop-cap"
        style="column-count: 1"
      >
        <p class="mb-4">{{ profile.about.description }}</p>
        <p>{{ profile.description }}</p>
      </div>

      <!-- 核心優勢標籤 -->
      <div class="pt-2">
        <h4 class="mb-3">核心優勢</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in profile.about.sections.highlights.items"
            :key="item"
            class="font-label text-xs px-3 py-1.5 border border-on-surface text-on-surface tracking-wide uppercase hover:bg-on-surface hover:text-surface transition-colors duration-200 cursor-default"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>

    <!-- 側欄（4/12）：AT A GLANCE -->
    <aside
      class="lg:col-span-4 bg-surface-container-low p-6 border-l-[3px] border-double border-outline-variant"
    >
      <h4 class="mb-5 border-b border-outline-variant pb-3">At a Glance</h4>

      <!-- 背景 -->
      <ul class="space-y-4 font-body text-sm">
        <li class="flex justify-between border-b border-outline-variant/40 pb-3">
          <span class="text-secondary">{{ profile.about.sections.background.title }}</span>
          <span class="font-medium text-right max-w-[55%]">
            {{ profile.about.sections.background.from }} →
            {{ profile.about.sections.background.to }}
          </span>
        </li>
        <li class="flex justify-between border-b border-outline-variant/40 pb-3">
          <span class="text-secondary">{{ profile.about.sections.philosophy.title }}</span>
          <span class="font-medium text-right max-w-[55%]"
            >{{ profile.about.sections.philosophy.description.slice(0, 30) }}…</span
          >
        </li>
        <li class="flex justify-between border-b border-outline-variant/40 pb-3">
          <span class="text-secondary">{{ profile.about.sections.currentFocus.title }}</span>
          <span class="font-medium text-primary text-right max-w-[55%]"
            >{{ profile.about.sections.currentFocus.description.slice(0, 30) }}…</span
          >
        </li>
        <li class="flex justify-between">
          <span class="text-secondary">聯絡方式</span>
          <a
            :href="profile.contact.email.href"
            class="font-medium text-primary hover:underline underline-offset-2 decoration-primary"
          >
            {{ profile.contact.email.label }}
          </a>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { profile } from '@/store/data/profile';
</script>
