<template>
  <section id="hero" class="h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode Extensions Marketplace -->
      <div class="flex-1 min-h-full p-2 sm:px-4 md:px-6">
        <!-- Extensions Header -->
        <Tab :file="extensionFile" />

        <!-- Extension Item - 保持原本佈局但優化渲染 -->
        <div class="space-y-4 flex-1">
          <!-- Extension Card -->
          <div
            ref="heroContainer"
            :class="[
              'bg-white border border-gray-200 rounded-lg p-4 sm:p-6 transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
              isMobileLayout ? 'flex flex-col gap-6 hero-mobile' : 'grid grid-cols-1 lg:grid-cols-12 gap-6'
            ]"
          >
            <!-- 左側主要內容區塊 -->
            <div class="hero-left-content lg:col-span-8 order-1 lg:order-1">
              <div class="space-y-6">
                <!-- Extension Header -->
                <div class="flex flex-col gap-4">
                  <!-- Extension Icon & Basic Info -->
                  <div class="flex items-start gap-3 sm:gap-4">
                    <div
                      class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0"
                    >
                      {{ profile.name.charAt(0) }}{{ profile.englishName.charAt(0) }}
                    </div>

                    <div class="flex-1 min-w-0">
                      <h1
                        class="text-hero-title text-gray-900 mb-1 leading-tight"
                      >
                        {{ profile.name }} ({{ profile.englishName }})
                      </h1>
                      <p class="text-section-title text-gray-600 mb-2 sm:mb-3">
                        {{ profile.title }}
                      </p>
                      <div class="flex flex-wrap items-center gap-3 text-body-secondary text-gray-500">
                        <span class="flex items-center gap-1">
                          <Icon icon="heroicons:star" class="w-3 h-3 sm:w-4 sm:h-4" />
                          5.0
                        </span>
                        <span class="flex items-center gap-1">
                          <Icon icon="heroicons:arrow-down-tray" class="w-3 h-3 sm:w-4 sm:h-4" />
                          40k
                        </span>
                        <span class="flex items-center gap-1">
                          <Icon
                            icon="heroicons:check-badge"
                            class="w-3 h-3 sm:w-4 sm:h-4 text-blue-500"
                          />
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:self-start">
                    <a
                      :href="profile.contact.github"
                      target="_blank"
                      class="text-button inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 w-full sm:w-auto px-6 py-2 bg-primary text-white hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:bg-primary-800"
                    >
                      <Icon icon="heroicons:code-bracket" class="w-4 h-4" />
                      <span>查看專案</span>
                    </a>
                    <a
                      :href="`mailto:${profile.contact.email}`"
                      class="text-button inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 w-full sm:w-auto px-6 py-2 border-2 border-accent text-accent bg-transparent hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:-translate-y-1"
                    >
                      <Icon icon="heroicons:envelope" class="w-4 h-4" />
                      <span>聯絡合作</span>
                    </a>
                  </div>
                </div>

                <!-- Extension Description -->
                <div>
                  <p class="text-body text-gray-700 leading-relaxed">
                    {{ profile.subtitle }}
                  </p>
                  <p class="text-body-secondary text-gray-600 mt-2 italic">
                    "{{ profile.tagline }}"
                  </p>
                </div>

                <!-- Skills Categories -->
                <div>
                  <h4
                    class="text-card-title text-gray-900 mb-3 flex items-center gap-2"
                  >
                    <Icon icon="heroicons:tag" class="w-4 h-4" />
                    技能分類
                  </h4>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      class="text-tag px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-blue-50 text-blue-700 border-blue-200"
                      >前端開發</span
                    >
                    <span
                      class="text-tag px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-green-50 text-green-700 border-green-200"
                      >後端開發</span
                    >
                    <span
                      class="text-tag px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-orange-50 text-orange-700 border-orange-200"
                      >資料庫</span
                    >
                    <span
                      class="text-tag px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105 border-2 uppercase tracking-wider bg-purple-50 text-purple-700 border-purple-200"
                      >AI協作</span
                    >
                  </div>
                </div>

                <!-- Extension Details -->
                <div>
                  <h4
                    class="text-card-title text-gray-900 mb-3 flex items-center gap-2"
                  >
                    <Icon icon="heroicons:information-circle" class="w-4 h-4" />
                    詳細資訊
                  </h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-body-secondary">
                    <div class="flex items-center gap-2 p-2 text-gray-600 bg-gray-50 rounded">
                      <Icon icon="heroicons:envelope" class="w-4 h-4 flex-shrink-0" />
                      <span class="truncate">{{ profile.contact.email }}</span>
                    </div>
                    <div class="flex items-center gap-2 p-2 text-gray-600 bg-gray-50 rounded">
                      <Icon icon="heroicons:code-bracket" class="w-4 h-4 flex-shrink-0" />
                      <span>技術探索者</span>
                    </div>
                    <div class="flex items-center gap-2 p-2 text-gray-600 bg-gray-50 rounded">
                      <Icon icon="heroicons:calendar-days" class="w-4 h-4 flex-shrink-0" />
                      <span>持續精進中</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右側技術堆疊區塊 -->
            <div class="tech-stack-container lg:col-span-4 order-2 lg:order-2 lg:border-l lg:border-accent-50 lg:pl-6 flex flex-col">
              <div class="space-y-6 flex-1">
                <!-- Tech Stack -->
                <div>
                  <h4 class="text-card-title text-gray-900 mb-3 flex items-center gap-2">
                    <Icon icon="heroicons:cube" class="w-4 h-4" />
                    開發工具
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="tech-tag px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 bg-blue-100 text-blue-800"
                      >Vue3</span
                    >
                    <span
                      class="tech-tag px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 bg-blue-100 text-blue-800"
                      >TypeScript</span
                    >
                    <span
                      class="tech-tag px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 bg-blue-100 text-blue-800"
                      >JavaScript</span
                    >
                    <span
                      class="tech-tag px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 bg-green-100 text-green-800"
                      >Node.js</span
                    >
                    <span
                      class="tech-tag px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-orange-100 text-orange-800"
                      >MongoDB</span
                    >
                    <span
                      class="tech-tag px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 bg-purple-100 text-purple-800"
                      >Claude</span
                    >
                  </div>
                </div>

                <!-- Extension More Info -->
                <div>
                  <h4 class="text-card-title text-gray-900 mb-3 flex items-center gap-2">
                    <Icon icon="heroicons:user-circle" class="w-4 h-4" />
                    關於作者
                  </h4>
                  <div class="about-author text-xs text-gray-600 space-y-2">
                    <p>
                      設計與企劃的背景讓我在開發時更能兼顧技術架構、實際需求與使用者體驗，確保產品不只運作順暢，更能真正滿足用戶期待。
                    </p>
                    <p>這樣的跨領域經驗，幫助我在溝通時能站在不同角度思考，讓合作更加順利。</p>
                    <ul class="space-y-2">
                      <li class="flex items-start gap-2">
                        <Icon
                          icon="heroicons:check-circle"
                          class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>Vue.js / pinia / router 前端技術與使用者體驗設計</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <Icon
                          icon="heroicons:chat-bubble-left-right"
                          class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>擅長將複雜技術轉為易懂說明，促進團隊合作</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <Icon
                          icon="heroicons:cog-6-tooth"
                          class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>承襲企劃思維，先整體規劃再分階段滾動式調整執行</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Publisher Info -->
              <div class="pt-4 mt-auto">
                <div class="space-y-2">
                  <div class="text-xs sm:text-sm text-gray-600">
                    <span class="font-medium">Published by:</span> {{ profile.name }}
                  </div>
                  <div class="text-xs text-gray-500">
                    Last updated: {{ new Date().toLocaleDateString('zh-TW') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { profile } from '../../store/data/profile';
import Tab from '../Tab.vue';

// 使用簡潔的 section 定義
const extensionFile = {
  icon: 'heroicons:puzzle-piece',
  displayName: 'YEH,PENG',
};

// 簡單直接的響應式狀態
const isMobileLayout = ref(false);
const heroContainer = ref<HTMLElement>();

// 監聽實際問題：容器寬度變化
const checkLayout = () => {
  if (!heroContainer.value) return;
  
  // 簡單的閾值判斷，不需要複雜的 Container Query
  const containerWidth = heroContainer.value.offsetWidth;
  isMobileLayout.value = containerWidth < 800;
};

onMounted(() => {
  checkLayout();
  // 監聽真實的變化事件
  window.addEventListener('resize', checkLayout);
  
  // 如果有 ResizeObserver，用它，沒有就算了
  if (window.ResizeObserver && heroContainer.value) {
    const observer = new ResizeObserver(checkLayout);
    observer.observe(heroContainer.value);
    
    onUnmounted(() => {
      observer.disconnect();
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', checkLayout);
});
</script>

<style scoped>
/* 簡單的響應式布局 - 用 Tailwind 斷點，笨但有效 */

/* 手機版樣式調整 */
.hero-mobile .tech-stack-container {
  border-left: none !important;
  padding-left: 0 !important;
  border-top: 1px solid rgb(229 231 235);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
}

.hero-mobile .tech-tag {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.hero-mobile .about-author {
  font-size: 0.625rem;
}
</style>
