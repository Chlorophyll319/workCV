<template>
  <section class="h-full p-3 sm:p-4 md:p-6 lg:p-8 bg-transparent">
    <div class="h-full flex flex-col">
      <!-- About Card -->
      <div
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-5 md:p-6 lg:p-8 flex-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <!-- VSCode File Tab Design -->
        <div class="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-primary">
          <div class="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-t-lg bg-primary text-white">
            <Icon icon="heroicons:user" class="w-4 h-4 sm:w-5 sm:h-5" />
            <span class="font-mono text-sm sm:text-base font-semibold">about-me.md</span>
            <Icon
              icon="heroicons:x-mark"
              class="w-3 h-3 sm:w-4 sm:h-4 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-4 sm:space-y-6 flex-1 flex flex-col">
          <!-- Main Description -->
          <div class="text-gray-800 leading-relaxed text-sm sm:text-lg lg:text-xl">
            {{ profile.about.description }}
          </div>

          <!-- Key Points Grid -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 flex-1"
          >
            <!-- Background -->
            <div class="bg-white rounded-lg p-3 sm:p-4 h-full flex flex-col">
              <h3
                class="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-lg text-primary"
              >
                <Icon icon="heroicons:academic-cap" class="w-4 h-4 sm:w-5 sm:h-5" />
                背景轉換
              </h3>
              <p class="text-sm sm:text-lg leading-relaxed font-medium text-text flex-1">
                從 {{ profile.about.background.from }} 轉向 {{ profile.about.background.to }}，
                帶來獨特的設計思維與用戶體驗觀點
              </p>
            </div>

            <!-- Philosophy -->
            <div class="bg-white rounded-lg p-3 sm:p-4 h-full flex flex-col">
              <h3
                class="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-lg text-primary"
              >
                <Icon icon="heroicons:light-bulb" class="w-4 h-4 sm:w-5 sm:h-5" />
                開發理念
              </h3>
              <p class="text-sm sm:text-lg leading-relaxed font-medium text-text flex-1">
                {{ profile.about.philosophy }}
              </p>
            </div>

            <!-- Current Focus -->
            <div class="focus-card bg-white rounded-lg p-3 sm:p-4 h-full flex flex-col relative">
              <h3
                class="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-lg text-primary"
              >
                <Icon icon="heroicons:cursor-arrow-rays" class="w-4 h-4 sm:w-5 sm:h-5" />
                目前專注
              </h3>
              <p class="text-sm sm:text-lg leading-relaxed font-medium text-text flex-1">
                {{ profile.about.currentFocus }}
              </p>
            </div>

            <!-- Highlights -->
            <div class="bg-gray-50 rounded-lg p-3 sm:p-4 h-full flex flex-col">
              <h3
                class="flex items-center gap-2 font-semibold mb-3 text-sm sm:text-lg text-primary"
              >
                <Icon icon="heroicons:star" class="w-4 h-4 sm:w-5 sm:h-5" />
                核心優勢
              </h3>
              <div class="flex flex-wrap gap-2 flex-1 content-start">
                <span
                  v-for="highlight in profile.about.highlights"
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
              "從設計思維到功能實現，專注於創造優質的用戶體驗"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { profile } from '../../assets/data/profile';
</script>

<style scoped>
/* Focus card animated border line - Cannot be replaced with Tailwind utilities */
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
