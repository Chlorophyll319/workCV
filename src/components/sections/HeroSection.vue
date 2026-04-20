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
      >
        {{ title }}。{{ subtitle }}。
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
const name = '葉芃作品集';
const englishName = 'Evelyn Portfolio';
const title = '全端工程師';
const subtitle = 'Full-Stack Engineer';
const kicker = '設計思維 × 工程執行力 · 網頁開發';
const dateline = '積極求職中';
const est = `Est. ${new Date().getFullYear()}`;

const contactItems = [
  { href: 'https://github.com/Chlorophyll319', label: 'GitHub', external: true },
  { href: 'mailto:kcnfoggy54@gmail.com', label: 'kcnfoggy54@gmail.com', external: false },
  { href: 'https://www.linkedin.com/in/peng-yeh-4b35a2175/', label: 'LinkedIn', external: true },
];
</script>
