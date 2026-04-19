<template>
  <section id="hero" class="w-full py-6">
    <!-- Kicker + Date -->
    <div class="flex items-center justify-between mb-2">
      <span class="kicker">Breaking News · 最新資訊</span>
      <span class="dateline">積極求職中</span>
    </div>

    <!-- Headline -->
    <h1 class="text-ink leading-tight mb-1" style="font-family: 'Playfair Display', 'Noto Serif TC', Georgia, serif; font-size: clamp(2.5rem, 8vw, 5rem); font-weight: 900;">
      <span class="text-accent-red">葉芃</span>
      <span class="text-ink-secondary mx-3 font-normal" style="font-size: 0.55em">×</span>
      Evelyn
    </h1>
    <div class="text-ink-secondary text-lg md:text-xl font-light mb-4 tracking-wide">
      全端工程師 · Full-Stack Engineer
    </div>

    <!-- Rule -->
    <div class="newspaper-rule mb-6"></div>

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
      <!-- Main column (2/3): description + links -->
      <div class="lg:col-span-2 lg:pr-8 lg:border-r lg:border-rule-light">
        <!-- Description -->
        <p class="text-ink leading-relaxed mb-6 drop-cap">
          {{ profile.description }}
        </p>

        <!-- Contact links -->
        <div class="flex flex-wrap gap-3 mt-4">
          <a
            :href="profile.contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-ink text-paper text-sm font-medium hover:bg-accent-red transition-colors"
          >
            <Icon icon="heroicons:code-bracket" class="w-4 h-4" />
            查看 GitHub
          </a>
          <a
            :href="`mailto:${profile.contact.email}`"
            class="inline-flex items-center gap-2 px-4 py-2 border border-ink text-ink text-sm font-medium hover:bg-paper-dark transition-colors"
          >
            <Icon icon="heroicons:envelope" class="w-4 h-4" />
            聯絡合作
          </a>
          <a
            :href="profile.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 border border-rule text-ink-secondary text-sm font-medium hover:bg-paper-dark transition-colors"
          >
            <Icon icon="heroicons:user" class="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <!-- Side column (1/3): highlights -->
      <div class="lg:col-span-1 lg:pl-8 mt-6 lg:mt-0">
        <div class="section-label mb-3">核心優勢</div>
        <div class="newspaper-rule-thin mb-4"></div>
        <ul class="space-y-3">
          <li
            v-for="item in profile.highlights"
            :key="item"
            class="flex items-start gap-2 text-sm text-ink leading-snug pb-3 border-b border-rule-light last:border-0"
          >
            <span class="text-accent-red mt-0.5 font-bold flex-shrink-0">▸</span>
            {{ item }}
          </li>
        </ul>


      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { profile } from '../../store/data/profile';
</script>
