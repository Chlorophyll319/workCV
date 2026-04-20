<template>
  <section id="about" class="w-full py-16">
    <h2 class="text-center section-heading">{{ about.title }}</h2>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- 主欄（8/12）：故事文字 -->
      <div class="lg:col-span-8 space-y-8">
        <!-- Pull quote -->
        <blockquote class="pull-quote">「{{ about.quote }}」</blockquote>

        <!-- 正文 -->
        <div class="font-body mt-1 text-base leading-relaxed text-on-surface-variant space-y-4">
          <p>{{ about.description }}</p>
          <p>{{ profile.description }}</p>
        </div>

        <!-- 核心優勢標籤 -->
        <div>
          <h4 class="mb-3">{{ about.sections.highlights.title }}</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in about.sections.highlights.items"
              :key="item"
              class="font-label text-xs px-3 py-1.5 border border-outline text-on-surface tracking-wide uppercase hover:bg-on-surface hover:text-surface transition-colors duration-200 cursor-default"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>

      <!-- 側欄（4/12）：AT A GLANCE 手風琴 -->
      <aside class="lg:col-span-4 border border-outline-variant">
        <div class="border-b border-outline-variant px-5 py-3">
          <span class="font-label text-xs tracking-widest uppercase text-on-surface font-bold">{{
            about.glance.title
          }}</span>
        </div>

        <div class="divide-y divide-outline-variant/50 font-body text-sm">
          <div v-for="item in glanceItems" :key="item.id">
            <!-- 標題列 -->
            <button
              class="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-surface-variant transition-colors duration-150"
              @click="openId = openId === item.id ? null : item.id"
            >
              <Icon :name="item.icon" class="size-4 shrink-0" :class="item.iconColor" />
              <span class="flex-1 text-on-surface-variant">{{ item.title }}</span>
              <Icon
                name="heroicons:chevron-down"
                class="size-4 shrink-0 text-on-surface-variant/50 transition-transform duration-200"
                :class="openId === item.id ? 'rotate-180' : ''"
              />
            </button>

            <!-- 展開內容 -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out overflow-hidden"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-40 opacity-100"
              leave-active-class="transition-all duration-150 ease-in overflow-hidden"
              leave-from-class="max-h-40 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openId === item.id" class="px-5 pb-4 pl-12">
                <component
                  :is="item.href ? 'a' : 'p'"
                  :href="item.href"
                  class="text-on-surface-variant leading-relaxed"
                  :class="item.href ? 'text-primary hover:underline underline-offset-2' : ''"
                  >{{ item.content }}</component
                >
              </div>
            </Transition>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { about } from '@/store/data/about';
import { profile } from '@/store/data/profile';

const openId = ref<string | null>(null);

const glanceItems = [
  {
    id: 'background',
    icon: about.sections.background.icon,
    iconColor: 'text-secondary',
    title: about.sections.background.title,
    content: `${about.sections.background.from} → ${about.sections.background.to}`,
  },
  {
    id: 'philosophy',
    icon: about.sections.philosophy.icon,
    iconColor: 'text-secondary',
    title: about.sections.philosophy.title,
    content: about.sections.philosophy.description,
  },
  {
    id: 'currentFocus',
    icon: about.sections.currentFocus.icon,
    iconColor: 'text-primary',
    title: about.sections.currentFocus.title,
    content: about.sections.currentFocus.description,
  },
  {
    id: 'contact',
    icon: profile.contact.email.icon,
    iconColor: 'text-secondary',
    title: profile.contact.email.buttonLabel,
    content: profile.contact.email.label,
    href: profile.contact.email.href,
  },
];
</script>
