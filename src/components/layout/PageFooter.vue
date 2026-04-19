<template>
  <footer class="w-full border-t border-rule-light bg-paper">
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-4">
      <div class="newspaper-rule-thin mb-4"></div>
      <div class="flex flex-wrap items-center gap-4 justify-between">
        <div class="flex flex-wrap gap-4">
          <a
            :href="profile.contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="byline hover:text-accent-blue transition-colors flex items-center gap-1"
          >
            <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
            GitHub
          </a>
          <a
            :href="`mailto:${profile.contact.email}`"
            class="byline hover:text-accent-blue transition-colors flex items-center gap-1"
          >
            <Icon icon="heroicons:envelope" class="w-3 h-3" />
            {{ profile.contact.email }}
          </a>
          <a
            :href="profile.contact.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="byline hover:text-accent-blue transition-colors flex items-center gap-1"
          >
            <Icon icon="heroicons:user" class="w-3 h-3" />
            LinkedIn
          </a>
        </div>
        <div class="dateline">{{ profile.contact.phone }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { profile } from '../../store/data/profile';
</script>
