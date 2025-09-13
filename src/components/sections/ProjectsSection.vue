<template>
  <section class="projects-section h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- Projects Card -->
      <div
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <!-- File Tab -->
        <Tab :file="projectsFile" @close="handleTabClose" />

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="project-card bg-gray-50 rounded-xl border-2 border-gray-200 p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            :style="getProjectBorderStyle(index)"
          >
            <!-- Project Header -->
            <div class="flex items-start justify-between mb-3">
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  :style="getProjectIconStyle(index)"
                >
                  <Icon :icon="getProjectIcon(project.icon || '')" class="w-4 h-4" />
                </div>
                <div>
                  <h3 class="text-card-title text-gray-800">
                    {{ project.name }}
                  </h3>
                  <span class="text-caption text-gray-500">
                    {{ project.type || 'N/A' }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <Icon icon="heroicons:star-solid" class="w-3 h-3 text-accent" />
                <span class="text-caption text-gray-500">{{ project.status || 'N/A' }}</span>
              </div>
            </div>

            <!-- Project Description -->
            <p class="text-body text-gray-600 leading-relaxed mb-3">
              {{ project.description || '專案描述待補充' }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-3">
              <h4 class="text-label-title text-gray-800 mb-1">
                {{ PROJECT_CONSTANTS.labels.techStack }}
              </h4>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tech in project.techStack || []"
                  :key="tech"
                  class="tech-stack-tag text-tag px-2 py-1 bg-white rounded font-mono text-gray-700 border border-gray-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Metrics -->
            <div class="bg-white rounded-lg p-2 mb-3 border border-gray-200">
              <h4 class="text-label-title text-gray-800 mb-1 flex items-center gap-1">
                <Icon icon="heroicons:chart-bar" class="w-3 h-3" />
                {{ PROJECT_CONSTANTS.labels.metrics }}
              </h4>
              <div class="grid grid-cols-2 gap-2 text-caption">
                <div v-for="(value, key) in project.metrics || {}" :key="key">
                  <div class="text-caption text-gray-500">{{ getMetricLabel(key) }}</div>
                  <div class="text-caption font-semibold" :style="{ color: getMetricColor(key) }">
                    {{ value }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="button-group gap-2">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                class="text-button flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 text-white"
                :style="getProjectButtonStyle(index)"
              >
                <Icon icon="heroicons:play" class="w-3 h-3" />
                {{ PROJECT_CONSTANTS.labels.demo }}
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="text-button flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border-2 border-primary text-primary transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
                {{ PROJECT_CONSTANTS.labels.github }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Tab from '../Tab.vue';
import { projects, PROJECT_CONSTANTS } from '../../store/data/projects';

// 定義 emits
const emit = defineEmits<{
  tabClose: [];
}>();

// 簡潔的文件定義
const projectsFile = {
  icon: 'heroicons:rocket-launch',
  displayName: '專案作品',
};

const handleTabClose = () => {
  emit('tabClose');
};

// 統一的顏色系統 - 消除重複代碼
const getProjectColor = (index: number): string => {
  const colors = [PROJECT_CONSTANTS.colors.primary, PROJECT_CONSTANTS.colors.accent];
  return colors[index % colors.length];
};

// 動態樣式生成器
const getProjectBorderStyle = (index: number) => ({
  borderColor: getProjectColor(index),
});

const getProjectIconStyle = (index: number) => ({
  backgroundColor: getProjectColor(index),
});

const getProjectButtonStyle = (index: number) => ({
  backgroundColor: getProjectColor(index),
});

// 使用常數而非硬編碼
const getMetricLabel = (key: string) => {
  return PROJECT_CONSTANTS.metricLabels[key as keyof typeof PROJECT_CONSTANTS.metricLabels] || key;
};

const getMetricColor = (key: string) => {
  const colorMap: Record<string, string> = {
    lighthouse: PROJECT_CONSTANTS.colors.accent,
    performance: PROJECT_CONSTANTS.colors.primary,
    loading: PROJECT_CONSTANTS.colors.accent,
    users: PROJECT_CONSTANTS.colors.primary,
    uptime: PROJECT_CONSTANTS.colors.accent,
    apiResponse: PROJECT_CONSTANTS.colors.primary,
  };
  return colorMap[key] || PROJECT_CONSTANTS.colors.primary;
};

const getProjectIcon = (iconName: string) => {
  const iconMap: Record<string, string> = {
    'i-ph-graduation-cap': 'heroicons:academic-cap',
    'i-ph-user-circle': 'heroicons:user-circle',
    'i-ph-chat-circle': 'heroicons:chat-bubble-left-right',
  };
  return iconMap[iconName] || 'heroicons:document-text';
};
</script>

<style scoped>
/* Remove background since it's handled by parent */
.projects-section {
  background: transparent;
}

/* 主網格已改用 Tailwind: grid-cols-1 md:grid-cols-3 */

/* Container Queries for individual Project Cards */
.project-card {
  container-type: inline-size;
}

/* 卡片內部響應式布局 - 當卡片寬度較小時 */
@container (max-width: 280px) {
  .project-card {
    /* 調整 padding 讓內容更緊湊 */
    padding: 0.75rem;
  }

  /* Header 區塊垂直堆疊 */
  .project-card .flex.items-start.justify-between {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  /* 專案標題字體稍小 */
  .project-card h3 {
    font-size: 1rem;
    line-height: 1.25;
  }

  /* Metrics 改為單欄 */
  .project-card .grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  /* Tech Stack 標籤更小 */
  .project-card .tech-stack-tag {
    font-size: 0.625rem;
    padding: 0.125rem 0.375rem;
  }
}

/* Button layout inside each project card */
.button-group {
  display: flex;
  flex-direction: column;
}

/* When individual project card is wide enough (≥320px), buttons go horizontal */
@container (min-width: 320px) {
  .button-group {
    flex-direction: row;
  }
}
</style>
