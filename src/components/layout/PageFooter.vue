<template>
  <footer class="w-full border-t border-rule-light bg-paper">
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-4">
      <div class="newspaper-rule-thin mb-4"></div>
      <div class="flex flex-wrap items-center gap-4 justify-between">
        <div class="flex flex-wrap gap-4">
          <a
            v-for="item in [profile.contact.github, profile.contact.email, profile.contact.linkedin]"
            :key="item.href"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="byline hover:text-accent-blue transition-colors flex items-center gap-1"
          >
            <Icon :icon="item.icon" class="w-3 h-3" />
            {{ item.label }}
          </a>
        </div>
        <div class="dateline flex items-center gap-1">
          <Icon :icon="profile.contact.phone.icon" class="w-3 h-3" />
          {{ profile.contact.phone.label }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { profile } from '@/store/data/profile';
</script>
