<template>
  <div class="resume-card">
    <!-- 區塊標題 -->
    <h2 class="section-title">學歷</h2>

    <!-- 學歷列表 -->
    <div class="space-y-4">
      <!-- 大學 -->
      <div class="project-border">
        <h3 class="text-lg font-semibold text-gray-800">崑山科技大學</h3>
        <p class="text-gray-600">公共關係暨廣告學系 大學畢業</p>
        <p class="text-sm text-gray-500">（2017/9~2022/6）</p>
      </div>

      <!-- 高職 -->
      <div class="project-border">
        <h3 class="text-lg font-semibold text-gray-800">私立復興商工</h3>
        <p class="text-gray-600">廣告設計科 高職畢業</p>
        <p class="text-sm text-gray-500">（2014/9~2017/6）</p>
      </div>
    </div>

    <!-- 證照區塊 -->
    <div class="mt-8 pt-6 border-t border-gray-100">
      <h3 class="text-lg font-semibold mb-4" style="color: var(--color-primary);">證照</h3>
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full" style="background-color: var(--color-accent);"></span>
          <span class="text-gray-700">整合行銷管理師</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full" style="background-color: var(--color-accent);"></span>
          <span class="text-gray-700">丙級網頁設計技術士</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script needed for this component
</script>