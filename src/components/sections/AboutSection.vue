<template>
  <section id="about" class="w-full py-8">
    <!-- Section header -->
    <div class="flex items-center gap-4 mb-2">
      <span class="kicker">About · 關於我</span>
    </div>
    <div class="newspaper-rule mb-6"></div>

    <!-- Pull quote across full width -->
    <blockquote class="pull-quote mb-8 text-center border-l-0 border-t-4 border-b border-accent-red pt-4 pb-4 px-6">
      「{{ profile.about.quote }}」
    </blockquote>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
      <!-- Main column (2/3): story -->
      <div class="md:col-span-2 md:pr-8 md:border-r md:border-rule-light">
        <h2 class="mb-4" style="font-family: 'Playfair Display', 'Noto Serif TC', Georgia, serif; font-size: 1.5rem; font-weight: 700;">
          我的故事
        </h2>
        <p class="text-ink leading-relaxed mb-6 drop-cap">
          {{ profile.about.description }}
        </p>
        <p class="text-ink-secondary leading-relaxed">
          {{ profile.description }}
        </p>

        <!-- Highlights tags -->
        <div class="mt-6">
          <div class="section-label mb-3">核心優勢標籤</div>
          <div class="newspaper-rule-thin mb-4"></div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in profile.about.sections.highlights.items"
              :key="item"
              class="text-xs px-3 py-1.5 border border-ink text-ink font-medium tracking-wide uppercase hover:bg-ink hover:text-paper transition-colors"
            >{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Side column (1/3): key sections -->
      <div class="md:col-span-1 md:pl-8 mt-8 md:mt-0 space-y-6">
        <!-- Background -->
        <div>
          <div class="section-label mb-2">{{ profile.about.sections.background.title }}</div>
          <div class="newspaper-rule-thin mb-3"></div>
          <p class="text-sm text-ink leading-snug">
            從 <strong class="text-accent-red">{{ profile.about.sections.background.from }}</strong>
            轉向
            <strong class="text-accent-blue">{{ profile.about.sections.background.to }}</strong>，
            帶來獨特的設計思維與用戶體驗觀點。
          </p>
        </div>

        <!-- Philosophy -->
        <div>
          <div class="section-label mb-2">{{ profile.about.sections.philosophy.title }}</div>
          <div class="newspaper-rule-thin mb-3"></div>
          <p class="text-sm text-ink-secondary leading-snug">
            {{ profile.about.sections.philosophy.description }}
          </p>
        </div>

        <!-- Current Focus -->
        <div>
          <div class="section-label mb-2">{{ profile.about.sections.currentFocus.title }}</div>
          <div class="newspaper-rule-thin mb-3"></div>
          <p class="text-sm text-ink-secondary leading-snug">
            {{ profile.about.sections.currentFocus.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '@/store/data/profile';
</script>
