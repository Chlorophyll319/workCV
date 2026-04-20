<template>
  <header id="hero" class="w-full min-h-[calc(100vh-97px)] flex flex-col">
    <!-- 頂部刊物資訊列 -->
    <div
      class="grid grid-cols-3 items-end pb-3 text-secondary font-label text-xs tracking-widest uppercase"
    >
      <span>{{ kicker }}</span>
      <span class="text-center">{{ dateline }}</span>
      <span class="text-right">{{ est }}</span>
    </div>

    <!-- 主內容置中區 -->
    <div class="flex-1 flex flex-col justify-center items-center text-center space-y-5">
      <!-- 主名字 -->
      <h1
        class="font-headline font-extrabold tracking-tighter text-on-surface leading-none"
        style="font-size: clamp(4rem, 16vw, 9rem)"
      >
        {{ name }}
      </h1>

      <!-- 英文名（斜體，小一號） -->
      <div
        class="font-headline italic text-secondary"
        style="font-size: clamp(1.5rem, 5vw, 3.5rem); line-height: 1.1"
      >
        {{ englishName }}
      </div>

      <!-- 職稱 -->
      <p
        class="font-headline italic text-secondary max-w-2xl mx-auto"
        style="font-size: clamp(1rem, 2.5vw, 1.5rem)"
      ></p>
    </div>

    <!-- 向下滑動提示 -->
    <div class="flex flex-col items-center gap-2 pb-8 text-secondary/50">
      <span class="font-label text-xs tracking-widest uppercase">Scroll</span>
      <div class="scroll-indicator">
        <div class="scroll-dot" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const name = '葉芃作品集';
const englishName = 'Evelyn Portfolio';
const kicker = '視覺設計 × 網頁開發 · 產品思維';
const dateline = '積極求職中';
const est = `Est. ${new Date().getFullYear()}`;
</script>

<style scoped>
.scroll-indicator {
  width: 24px;
  height: 38px;
  border: 2px solid currentColor;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: currentColor;
  border-radius: 2px;
  animation: scroll-bounce 1.8s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%   { transform: translateY(0);   opacity: 1; }
  60%  { transform: translateY(10px); opacity: 0.2; }
  100% { transform: translateY(0);   opacity: 1; }
}
</style>
