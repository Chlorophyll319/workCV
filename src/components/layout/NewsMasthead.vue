<template>
  <header class="bg-paper border-b border-rule-light w-full overflow-hidden">
    <!-- Top rule -->
    <div class="newspaper-rule mx-4 md:mx-8 mt-4"></div>

    <!-- Masthead content -->
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-4">
      <div class="flex items-end justify-between gap-4 flex-wrap">
        <!-- Left: Publication identity -->
        <div class="flex-1 min-w-0">
          <div class="kicker mb-1">Personal CV</div>
          <div
            style="
              font-family: 'Playfair Display', 'Noto Serif TC', Georgia, serif;
              font-size: clamp(1.25rem, 3vw, 1.75rem);
              font-weight: 700;
              letter-spacing: 0.02em;
              line-height: 1;
            "
          >
            個人履歷
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
