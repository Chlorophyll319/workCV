<template>
  <section class="projects-section h-full p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- Section Title -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-vscode-text-white font-chinese mb-2">
          專案作品
        </h2>
        <div class="w-12 h-1 bg-vscode-green mx-auto rounded-full"></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-1">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card bg-vscode-card rounded-xl border border-vscode-border p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          :class="getProjectAccentClass(index)"
        >
          <!-- Project Header -->
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="getProjectIconBg(index)">
                <UIcon :name="project.icon" class="w-4 h-4 text-vscode-text-white" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-vscode-text-white font-chinese">
                  {{ project.name }}
                </h3>
                <span class="text-xs text-vscode-text-secondary">
                  {{ project.type }}
                </span>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <UIcon name="i-ph-star-fill" class="w-3 h-3 text-vscode-yellow" />
              <span class="text-xs text-vscode-text-secondary">{{ project.status }}</span>
            </div>
          </div>

          <!-- Project Description -->
          <p class="text-vscode-text-secondary font-chinese text-xs leading-relaxed mb-3">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="mb-3">
            <h4 class="text-xs font-semibold text-vscode-text-white mb-1">技術棧</h4>
            <div class="flex flex-wrap gap-1">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="px-1.5 py-0.5 bg-vscode-bg rounded text-xs font-code text-vscode-text-primary border border-vscode-border"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Metrics -->
          <div class="bg-vscode-bg rounded-lg p-2 mb-3">
            <h4 class="text-xs font-semibold text-vscode-text-white mb-1 flex items-center gap-1">
              <UIcon name="i-ph-chart-bar" class="w-3 h-3" />
              效能指標
            </h4>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div v-for="(value, key) in project.metrics" :key="key">
                <div class="text-vscode-text-secondary text-xs">{{ getMetricLabel(key) }}</div>
                <div class="font-semibold text-xs" :class="getMetricColor(key)">{{ value }}</div>
              </div>
            </div>
          </div>

          <!-- Highlights -->
          <div class="mb-4">
            <h4 class="text-xs font-semibold text-vscode-text-white mb-1">專案亮點</h4>
            <ul class="space-y-0.5">
              <li 
                v-for="highlight in project.highlights.slice(0, 3)" 
                :key="highlight"
                class="text-xs text-vscode-text-secondary flex items-start gap-1"
              >
                <UIcon name="i-ph-check" class="w-2.5 h-2.5 text-vscode-green mt-0.5 flex-shrink-0" />
                <span class="text-xs">{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2">
            <UButton
              v-if="project.demoUrl"
              :to="project.demoUrl"
              target="_blank"
              size="sm"
              variant="solid"
              :color="getProjectButtonColor(index) as 'primary' | 'success' | 'warning'"
              class="flex-1 font-code text-xs"
            >
              <UIcon name="i-ph-play" class="w-3 h-3" />
              Demo
            </UButton>
            <UButton
              v-if="project.githubUrl"
              :to="project.githubUrl"
              target="_blank"
              size="sm"
              variant="outline"
              color="neutral"
              class="flex-1 font-code text-xs border-vscode-border hover:border-vscode-text-secondary"
            >
              <UIcon name="i-ph-github-logo" class="w-3 h-3" />
              GitHub
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../../assets/data/projects'

// Helper functions for dynamic styling
const getProjectAccentClass = (index: number) => {
  const classes = [
    'hover:border-vscode-blue/50',
    'hover:border-vscode-green/50', 
    'hover:border-vscode-yellow/50'
  ]
  return classes[index % classes.length]
}

const getProjectIconBg = (index: number) => {
  const classes = [
    'bg-vscode-blue/20',
    'bg-vscode-green/20',
    'bg-vscode-yellow/20'
  ]
  return classes[index % classes.length]
}

const getProjectButtonColor = (index: number) => {
  const colors = ['primary', 'success', 'warning']
  return colors[index % colors.length]
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
    lighthouse: 'text-vscode-green',
    performance: 'text-vscode-blue',
    loading: 'text-vscode-yellow',
    users: 'text-vscode-purple',
    uptime: 'text-vscode-green',
    apiResponse: 'text-vscode-blue'
  }
  return colors[key] || 'text-vscode-text-white'
}
</script>

<style scoped>
/* Remove background since it's handled by parent */
.projects-section {
  background: transparent;
}

/* Custom scrollbar for overflow content */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(86, 156, 214, 0.5);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(86, 156, 214, 0.7);
}
</style>