<template>
  <header class="bg-paper border-b border-rule-light w-full overflow-hidden">
    <!-- Top rule -->
    <div class="newspaper-rule mx-4 md:mx-8 mt-4"></div>

    <!-- Masthead content -->
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-4">
      <div class="flex items-end justify-between gap-4 flex-wrap">
        <!-- Left: Name + Title -->
        <div class="flex-1 min-w-0">
          <div class="kicker mb-1">Personal CV · 個人履歷</div>
          <h1 class="masthead-title text-ink leading-none">
            <span class="text-accent-red">葉芃</span>
            <span class="text-2xl md:text-3xl font-normal text-ink-secondary mx-2">×</span>
            <span class="text-xl md:text-2xl font-normal text-ink-secondary">Evelyn</span>
          </h1>
          <div class="mt-1 flex items-center gap-2 flex-wrap">
            <span class="byline">前端工程師 · Frontend Engineer</span>
            <span class="byline text-rule">|</span>
            <span class="byline text-accent-gold font-semibold">積極求職中</span>
          </div>
        </div>

        <!-- Right: Date + Tagline -->
        <div class="text-right flex-shrink-0 hidden sm:block">
          <div class="dateline">{{ currentDate }}</div>
          <div class="mt-1 text-xs text-ink-muted max-w-[200px] leading-snug italic">
            從設計思維到功能實現
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom double rule -->
    <div class="newspaper-rule mx-4 md:mx-8 mb-0"></div>
  </header>
</template>

<script setup lang="ts">
const currentDate = computed(() => {
  const now = new Date();
  return now.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});
</script>
