<template>
  <header class="bg-paper w-full overflow-hidden">
    <!-- 頂部品牌紅線 -->
    <div class="bg-accent-red h-[3px] w-full"></div>

    <!-- Masthead 主內容 -->
    <div class="max-w-6xl mx-auto px-4 md:px-8 pt-5 pb-4">
      <div class="flex items-end justify-between gap-4 flex-wrap">
        <!-- 左：刊物識別 -->
        <div class="flex-1 min-w-0">
          <div class="kicker mb-2">{{ MASTHEAD.kicker }}</div>
          <div
            style="
              font-family: 'Playfair Display', 'Noto Serif TC', Georgia, serif;
              font-size: clamp(1.75rem, 4vw, 2.5rem);
              font-weight: 900;
              letter-spacing: -0.02em;
              line-height: 1;
            "
          >
            {{ MASTHEAD.title }}
          </div>
        </div>

        <!-- 右：日期 + 標語 -->
        <div class="text-right flex-shrink-0 hidden sm:block">
          <div class="dateline mb-1">{{ currentDate }}</div>
          <div
            class="text-ink-muted leading-snug italic"
            style="
              font-family: 'Playfair Display', Georgia, serif;
              font-size: 0.75rem;
              max-width: 200px;
            "
          >
            {{ MASTHEAD.tagline }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { currentDate, MASTHEAD } from '@/store/layout';
</script>
