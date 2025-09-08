<template>
  <div class="resume-card">
    <!-- 姓名大標 + 職稱標籤 -->
    <div class="mb-6">
      <h1 class="text-4xl font-bold mb-3" style="color: var(--color-primary);">
        {{ profile.name }}
      </h1>
      <div class="orange-tag">
        {{ profile.title }}
      </div>
    </div>

    <!-- 個人標籤 -->
    <div class="mb-6">
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in personalTags" :key="tag" 
              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- 基本資訊 -->
    <div class="mb-6 text-sm text-gray-600">
      <p class="mb-2">{{ education.university }} | {{ education.department }}</p>
      <p>{{ personalInfo.location }} | 希望職稱：{{ profile.title }}</p>
    </div>

    <!-- 簡介段落 -->
    <div class="text-gray-800 leading-relaxed">
      <p>{{ profile.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '../../assets/data/profile'

const personalTags = [
  '團隊協作',
  '溝通協調', 
  '跨領域背景',
  '前端工程師',
  'AI協作'
]

const education = {
  university: '崑山科技大學',
  department: '公共關係暨廣告學系 大學畢業'
}

const personalInfo = {
  location: '台北市南港區'
}
</script>