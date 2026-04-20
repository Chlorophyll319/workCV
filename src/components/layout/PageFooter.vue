<template>
  <footer class="bg-surface border-t-4 border-double border-outline-variant w-full">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex flex-col md:grid md:grid-cols-3 items-center py-10 gap-6">
        <!-- 左：品牌署名 -->
        <div class="font-headline italic text-lg text-on-surface">
          Curated by {{ profile.name }} · {{ profile.englishName }}
        </div>

        <!-- 中：聯絡連結（純 icon） -->
        <div class="flex items-center justify-center gap-6 md:justify-self-center">
          <a
            v-for="item in contactIcons"
            :key="item.href"
            :href="item.href"
            :title="item.label"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-200"
          >
            <Icon :icon="item.icon" class="w-5 h-5" />
          </a>
        </div>

        <!-- 右：版權 -->
        <div
          class="font-label text-xs tracking-widest uppercase text-secondary md:justify-self-end"
        >
          © {{ new Date().getFullYear() }} {{ profile.name }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { profile } from '@/store/data/profile';

const contactIcons = [
  profile.contact.github,
  profile.contact.email,
  profile.contact.linkedin,
  profile.contact.phone,
];
</script>
