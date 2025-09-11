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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 flex-1">
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
                  <h3 class="text-lg font-bold text-gray-800">
                    {{ project.name }}
                  </h3>
                  <span class="text-xs text-gray-500">
                    {{ project.type || 'N/A' }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <Icon icon="heroicons:star-solid" class="w-3 h-3 text-accent" />
                <span class="text-xs text-gray-500">{{ project.status || 'N/A' }}</span>
              </div>
            </div>

            <!-- Project Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              {{ project.description || '專案描述待補充' }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-3">
              <h4 class="text-xs font-semibold text-gray-800 mb-1">
                {{ PROJECT_CONSTANTS.labels.techStack }}
              </h4>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="tech in project.techStack || []"
                  :key="tech"
                  class="px-2 py-1 bg-white rounded text-xs font-mono text-gray-700 border border-gray-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Metrics -->
            <div class="bg-white rounded-lg p-2 mb-3 border border-gray-200">
              <h4 class="text-xs font-semibold text-gray-800 mb-1 flex items-center gap-1">
                <Icon icon="heroicons:chart-bar" class="w-3 h-3" />
                {{ PROJECT_CONSTANTS.labels.metrics }}
              </h4>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div v-for="(value, key) in project.metrics || {}" :key="key">
                  <div class="text-gray-500 text-xs">{{ getMetricLabel(key) }}</div>
                  <div class="font-semibold text-xs" :style="{ color: getMetricColor(key) }">
                    {{ value }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 text-white"
                :style="getProjectButtonStyle(index)"
              >
                <Icon icon="heroicons:play" class="w-3 h-3" />
                {{ PROJECT_CONSTANTS.labels.demo }}
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm border-2 border-primary text-primary transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
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
    'i-ph-credit-card': 'heroicons:credit-card',
  };
  return iconMap[iconName] || 'heroicons:document-text';
};
</script>

<style scoped>
/* Remove background since it's handled by parent */
.projects-section {
  background: transparent;
}
</style>
