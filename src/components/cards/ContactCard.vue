<template>
  <div class="resume-card">
    <!-- 區塊標題 -->
    <h2 class="section-title">聯絡方式</h2>

    <!-- 個人資料 -->
    <div class="mb-6">
      <p class="text-gray-700 mb-2">女、26歲、待業中</p>
    </div>

    <!-- 聯絡資訊 -->
    <div class="space-y-4">
      <!-- 電話 -->
      <div class="flex items-center gap-3">
        <div class="orange-icon">
          <Icon icon="ph:phone" class="w-4 h-4 text-white" />
        </div>
        <span class="text-gray-800">{{ profile.contact.phone }}</span>
      </div>

      <!-- 郵箱 -->
      <div class="flex items-center gap-3">
        <div class="orange-icon">
          <Icon icon="ph:envelope" class="w-4 h-4 text-white" />
        </div>
        <a :href="`mailto:${profile.contact.email}`" 
           class="text-gray-800 hover:text-blue-600 transition-colors">
          {{ profile.contact.email }}
        </a>
      </div>

      <!-- GitHub -->
      <div class="flex items-center gap-3">
        <div class="orange-icon">
          <Icon icon="ph:github-logo" class="w-4 h-4 text-white" />
        </div>
        <a :href="profile.contact.github" 
           target="_blank" 
           class="text-gray-800 hover:text-blue-600 transition-colors">
          GitHub Profile
        </a>
      </div>

      <!-- LinkedIn -->
      <div class="flex items-center gap-3">
        <div class="orange-icon">
          <Icon icon="ph:linkedin-logo" class="w-4 h-4 text-white" />
        </div>
        <a :href="profile.contact.linkedin" 
           target="_blank" 
           class="text-gray-800 hover:text-blue-600 transition-colors">
          LinkedIn Profile
        </a>
      </div>
    </div>

    <!-- 通訊地址 -->
    <div class="mt-6 pt-4 border-t border-gray-100">
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-full flex items-center justify-center mt-0.5" 
             style="background-color: var(--color-accent);">
          <Icon icon="ph:map-pin" class="w-4 h-4 text-white" />
        </div>
        <div class="text-gray-700">
          <p class="font-medium">通訊地址</p>
          <p class="text-sm">台北市南港區研究院***</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { profile } from '../../assets/data/profile'
</script>