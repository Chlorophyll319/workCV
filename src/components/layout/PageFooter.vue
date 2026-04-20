<template>
  <footer class="bg-surface border-t-4 border-double border-outline-variant w-full">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center py-10 gap-6">
        <!-- 左：品牌署名 -->
        <div class="font-headline italic text-lg text-on-surface">
          Curated by {{ profile.name }} · {{ profile.englishName }}
        </div>

        <!-- 中：聯絡連結 -->
        <div class="flex flex-wrap justify-center gap-6">
          <a
            v-for="item in [profile.contact.github, profile.contact.email, profile.contact.linkedin, profile.contact.phone]"
            :key="item.href"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="font-label text-xs tracking-widest uppercase text-on-surface hover:underline decoration-primary underline-offset-4 transition-all duration-200"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- 右：版權 -->
        <div class="font-label text-xs tracking-widest uppercase text-secondary">
          © {{ new Date().getFullYear() }} {{ profile.name }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '@/store/data/profile';
</script>
