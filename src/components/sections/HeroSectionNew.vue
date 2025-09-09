<template>
  <section id="hero" class="h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode Extensions Marketplace -->
      <div class="flex-1 min-h-full p-2 sm:p-4 md:p-6">
        <!-- Extensions Header -->
        <Tab :file="extensionFile" />

        <!-- Extension Item -->
        <div class="space-y-4 flex-1">
          <!-- Extension Card -->
          <div class="bg-white extension-card extension-animate">
            <!-- Extension Header -->
            <div class="flex flex-col gap-4 mb-4">
              <!-- Extension Icon & Basic Info -->
              <div class="flex items-start gap-3 sm:gap-4">
                <div class="extension-icon">
                  {{ profile.name.charAt(0) }}{{ profile.englishName.charAt(0) }}
                </div>

                <div class="flex-1 min-w-0">
                  <h2
                    class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight"
                  >
                    {{ profile.name }} ({{ profile.englishName }})
                  </h2>
                  <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3">
                    {{ profile.title }}
                  </p>
                  <div
                    class="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500"
                  >
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

              <!-- Install Buttons - 手機版全寬度 -->
              <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto sm:self-start">
                <button class="install-btn">Install</button>
                <button class="details-btn">Details</button>
              </div>
            </div>

            <!-- Extension Description -->
            <div class="mb-4">
              <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                {{ profile.subtitle }}
              </p>
              <p class="text-xs sm:text-sm text-gray-600 mt-2 italic">"{{ profile.tagline }}"</p>
            </div>

            <!-- Skills Tags -->
            <div class="mb-6">
              <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-3">主要技能</h4>
              <div class="flex flex-wrap gap-2 sm:gap-2.5">
                <span class="skill-vue">Vue3</span>
                <span class="skill-js">JavaScript</span>
                <span class="skill-node">Node.js</span>
                <span class="skill-db">MongoDB</span>
                <span class="skill-ts">TypeScript</span>
                <span class="skill-ai">AI-Collaboration</span>
              </div>
            </div>

            <!-- Extension Details -->
            <div
              class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 mb-6 text-xs sm:text-sm"
            >
              <div class="extension-detail">
                <Icon icon="heroicons:envelope" class="w-4 h-4 flex-shrink-0" />
                <span class="break-all truncate sm:break-normal">{{ profile.contact.email }}</span>
              </div>
              <div class="extension-detail">
                <Icon icon="heroicons:code-bracket" class="w-4 h-4 flex-shrink-0" />
                <span>GitHub 開源貢獻者</span>
              </div>
              <div class="extension-detail sm:col-span-2 xl:col-span-1">
                <Icon icon="heroicons:calendar-days" class="w-4 h-4 flex-shrink-0" />
                <span>持續更新中</span>
              </div>
            </div>

            <!-- Publisher Info -->
            <div class="border-t pt-3 sm:pt-4">
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0"
              >
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

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t-2 border-primary"
        >
          <a :href="profile.contact.github" target="_blank" class="action-btn-primary">
            <Icon icon="heroicons:code-bracket" class="w-4 h-4 sm:w-5 sm:h-5" />
            <span>查看專案</span>
          </a>
          <a :href="`mailto:${profile.contact.email}`" class="action-btn-secondary">
            <Icon icon="heroicons:envelope" class="w-4 h-4 sm:w-5 sm:h-5" />
            <span>聯絡合作</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { profile } from '../../assets/data/profile';
import Tab from '../Tab.vue';
import { sectionsFiles } from '../../assets/data/fileSystem';

// 使用 fileSystem.ts 中的 hero 項目
const extensionFile = sectionsFiles.find((file) => file.id === 'hero')!;
</script>
