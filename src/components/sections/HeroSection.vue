<template>
  <header id="hero" class="w-full min-h-[calc(100vh-97px)] flex flex-col">
    <!-- 頂部刊物資訊列 -->
    <div
      class="grid grid-cols-3 items-end pb-3 text-secondary font-label text-xs tracking-widest uppercase"
    >
      <span>{{ profile.kicker }}</span>
      <span class="text-center">{{ profile.dateline }}</span>
      <span class="text-right">{{ MASTHEAD.est }}</span>
    </div>

    <!-- 主內容置中區 -->
    <div class="flex-1 flex flex-col justify-center items-center text-center space-y-5">
      <!-- 主名字 -->
      <h1
        class="font-headline font-extrabold tracking-tighter text-on-surface leading-none"
        style="font-size: clamp(4rem, 16vw, 9rem)"
      >
        {{ profile.name }}
      </h1>

      <!-- 英文名（斜體，小一號） -->
      <div
        class="font-headline italic text-secondary"
        style="font-size: clamp(1.5rem, 5vw, 3.5rem); line-height: 1.1"
      >
        {{ profile.englishName }}
      </div>

      <!-- 職稱 -->
      <p
        class="font-headline italic text-secondary max-w-2xl mx-auto"
        style="font-size: clamp(1rem, 2.5vw, 1.5rem)"
      >
        {{ profile.title }}。{{ profile.subtitle }}。
      </p>

      <!-- 聯絡連結（小字，低調） -->
      <div class="flex justify-center items-center gap-6 pt-2">
        <a
          v-for="item in contactItems"
          :key="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="font-label text-xs tracking-widest uppercase text-on-surface opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { profile } from '@/store/data/profile';
import { MASTHEAD } from '@/store/layout';

const contactItems = [profile.contact.github, profile.contact.email, profile.contact.linkedin];
</script>
