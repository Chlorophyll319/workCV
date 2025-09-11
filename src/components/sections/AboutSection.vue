<template>
  <section class="h-full p-3 sm:p-4 md:p-6 lg:p-8 bg-transparent">
    <div class="h-full flex flex-col">
      <!-- About Card -->
      <div
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-5 md:p-6 lg:p-8 flex-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <!-- File Tab -->
        <Tab :file="aboutFile" @close="handleTabClose" />

        <!-- Content -->
        <div class="space-y-4 sm:space-y-6 flex-1 flex flex-col">
          <!-- Main Description -->
          <div class="text-gray-800 leading-relaxed text-sm sm:text-lg lg:text-xl">
            {{ profile.about.description }}
          </div>

          <!-- Key Points Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
            <!-- Background -->
            <div class="info-card">
              <h3 class="card-header">
                <Icon
                  :icon="profile.about.sections.background.icon"
                  class="w-4 h-4 sm:w-5 sm:h-5"
                />
                {{ profile.about.sections.background.title }}
              </h3>
              <p class="card-content">
                從 {{ profile.about.sections.background.from }} 轉向
                {{ profile.about.sections.background.to }}， 帶來獨特的設計思維與用戶體驗觀點
              </p>
            </div>

            <!-- Philosophy -->
            <div class="info-card">
              <h3 class="card-header">
                <Icon
                  :icon="profile.about.sections.philosophy.icon"
                  class="w-4 h-4 sm:w-5 sm:h-5"
                />
                {{ profile.about.sections.philosophy.title }}
              </h3>
              <p class="card-content">
                {{ profile.about.sections.philosophy.description }}
              </p>
            </div>

            <!-- Current Focus -->
            <div class="info-card focus-card">
              <h3 class="card-header">
                <Icon
                  :icon="profile.about.sections.currentFocus.icon"
                  class="w-4 h-4 sm:w-5 sm:h-5"
                />
                {{ profile.about.sections.currentFocus.title }}
              </h3>
              <p class="card-content">
                {{ profile.about.sections.currentFocus.description }}
              </p>
            </div>

            <!-- Highlights -->
            <div class="info-card bg-gray-50">
              <h3 class="card-header">
                <Icon
                  :icon="profile.about.sections.highlights.icon"
                  class="w-4 h-4 sm:w-5 sm:h-5"
                />
                {{ profile.about.sections.highlights.title }}
              </h3>
              <div class="flex flex-wrap gap-2 flex-1 content-start">
                <span
                  v-for="highlight in profile.about.sections.highlights.items"
                  :key="highlight"
                  class="px-2 py-1 sm:px-3 sm:py-2 border border-accent rounded text-xs sm:text-sm font-medium text-accent"
                >
                  {{ highlight }}
                </span>
              </div>
            </div>
          </div>

          <!-- Full Width Bottom Section -->
          <div
            class="mt-6 sm:mt-8 text-center border-t-2 pt-4 sm:pt-6"
            style="border-color: var(--color-primary)"
          >
            <p class="text-sm sm:text-lg lg:text-xl italic font-semibold text-text">
              "{{ profile.about.quote }}"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Tab from '../../composables/Tab.vue';
import { profile } from '../../store/data/profile';

// 定義 emits
const emit = defineEmits<{
  tabClose: [];
}>();

// 簡潔的文件定義
const aboutFile = {
  icon: 'heroicons:user',
  displayName: '關於我',
};

const handleTabClose = () => {
  emit('tabClose');
};
</script>

<style scoped>
/* CSS 變數定義 - 移到組件層級 */

/* 通用卡片樣式 */
.info-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .info-card {
    padding: 1rem;
  }
}

/* 通用卡片標題樣式 */
.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: var(--color-primary);
}

@media (min-width: 640px) {
  .card-header {
    font-size: 1.125rem;
  }
}

/* 通用卡片內容樣式 */
.card-content {
  font-size: 0.875rem;
  line-height: 1.625;
  font-weight: 500;
  color: var(--color-text);
  flex: 1;
}

@media (min-width: 640px) {
  .card-content {
    font-size: 1.125rem;
  }
}

/* Focus card 動畫邊框 - 無法用 Tailwind utilities 替代 */
.focus-card {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(
        45deg,
        transparent 0%,
        var(--color-primary) 25%,
        var(--color-accent) 50%,
        transparent 75%,
        transparent 100%
      )
      border-box;
  background-size:
    100% 100%,
    300% 300%;
  animation: moveBorder 2.5s linear infinite;
}

@keyframes moveBorder {
  0% {
    background-position:
      0% 0%,
      0% 0%;
  }
  25% {
    background-position:
      0% 0%,
      100% 0%;
  }
  50% {
    background-position:
      0% 0%,
      100% 100%;
  }
  75% {
    background-position:
      0% 0%,
      0% 100%;
  }
  100% {
    background-position:
      0% 0%,
      0% 0%;
  }
}
</style>
