<template>
  <section class="projects-section h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- Projects Card -->
      <div 
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <!-- File Tab -->
        <Tab :file="projectsFile" @close="handleTabClose" />

        <!-- Section Title -->
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold mb-2 text-primary">
            專案作品
          </h2>
          <div class="w-12 h-1 mx-auto rounded-full bg-accent"></div>
        </div>

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
                  <Icon :icon="getProjectIcon(project.icon)" class="w-4 h-4" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-800">
                    {{ project.name }}
                  </h3>
                  <span class="text-xs text-gray-500">
                    {{ project.type }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <Icon icon="heroicons:star-solid" class="w-3 h-3 text-accent" />
                <span class="text-xs text-gray-500">{{ project.status }}</span>
              </div>
            </div>

            <!-- Project Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-3">
              <h4 class="text-xs font-semibold text-gray-800 mb-1">技術棧</h4>
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="tech in project.techStack" 
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
                效能指標
              </h4>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div v-for="(value, key) in project.metrics" :key="key">
                  <div class="text-gray-500 text-xs">{{ getMetricLabel(key) }}</div>
                  <div class="font-semibold text-xs" :style="{ color: getMetricColor(key) }">{{ value }}</div>
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
                Demo
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm border-2 border-primary text-primary transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import Tab from '../Tab.vue'
import { projects } from '../../assets/data/projects'
import { sectionsFiles } from '../../assets/data/fileSystem'

// 找到對應的 projects 文件
const projectsFile = computed(() => {
  return sectionsFiles.find(file => file.section === 'projects') || sectionsFiles[2]
})

const handleTabClose = () => {
  // Tab 關閉邏輯
  console.log('Projects tab closed')
}

// Helper functions for dynamic styling
const getProjectBorderStyle = (index: number) => {
  const colors = ['var(--color-primary)', 'var(--color-accent)', 'var(--color-primary)']
  return { borderColor: colors[index % colors.length] }
}

const getProjectIconStyle = (index: number) => {
  const colors = ['var(--color-primary)', 'var(--color-accent)', 'var(--color-primary)']
  return { backgroundColor: colors[index % colors.length] }
}

const getProjectButtonStyle = (index: number) => {
  const colors = ['var(--color-primary)', 'var(--color-accent)', 'var(--color-primary)']
  return { backgroundColor: colors[index % colors.length] }
}

const getMetricLabel = (key: string) => {
  const labels: Record<string, string> = {
    lighthouse: 'Lighthouse',
    performance: '效能分數',
    loading: '載入時間',
    users: '使用者數',
    uptime: '運行時間',
    apiResponse: 'API 回應'
  }
  return labels[key] || key
}

const getMetricColor = (key: string) => {
  const colors: Record<string, string> = {
    lighthouse: 'var(--color-accent)',
    performance: 'var(--color-primary)',
    loading: 'var(--color-accent)',
    users: 'var(--color-primary)',
    uptime: 'var(--color-accent)',
    apiResponse: 'var(--color-primary)'
  }
  return colors[key] || 'var(--color-primary)'
}

const getProjectIcon = (iconName: string) => {
  const iconMap: Record<string, string> = {
    'i-ph-graduation-cap': 'heroicons:academic-cap',
    'i-ph-user-circle': 'heroicons:user-circle',
    'i-ph-credit-card': 'heroicons:credit-card'
  }
  return iconMap[iconName] || 'heroicons:document-text'
}
</script>

<style scoped>
/* Remove background since it's handled by parent */
.projects-section {
  background: transparent;
}

/* Enhanced hover effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.hover\:shadow-md:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>