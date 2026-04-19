<template>
  <section id="projects" class="w-full py-8">
    <div class="mb-2"><span class="kicker">Projects · 專案作品</span></div>
    <div class="newspaper-rule mb-6"></div>

    <!-- Featured project (first) -->
    <div v-if="projects.length > 0" class="mb-6 pb-6 border-b border-rule-light">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
        <!-- Main content -->
        <div class="md:col-span-2 md:pr-6 md:border-r md:border-rule-light">
          <div class="flex items-center gap-2 mb-1">
            <span class="dateline">{{ featuredProject.type }}</span>
            <span class="dateline text-rule">·</span>
            <span
              class="dateline"
              :class="featuredProject.status === '已完成' ? 'text-accent-gold' : 'text-accent-blue'"
              >{{ featuredProject.status }}</span
            >
          </div>
          <h2
            class="mb-3"
            style="
              font-family: 'Playfair Display', 'Noto Serif TC', Georgia, serif;
              font-size: 1.75rem;
              font-weight: 700;
              line-height: 1.2;
            "
          >
            {{ featuredProject.name }}
          </h2>
          <p class="text-ink leading-relaxed mb-4">{{ featuredProject.description }}</p>

          <!-- Highlights -->
          <ul v-if="featuredProject.highlights?.length" class="space-y-1 mb-4">
            <li
              v-for="h in featuredProject.highlights"
              :key="h"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <span class="text-accent-red mt-0.5 flex-shrink-0">▸</span>
              {{ h }}
            </li>
          </ul>

          <!-- Action buttons -->
          <div class="flex flex-wrap gap-2 mt-4">
            <a
              v-if="featuredProject.demoUrl"
              :href="featuredProject.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 bg-ink text-paper text-sm font-medium hover:bg-accent-red transition-colors"
            >
              <Icon icon="heroicons:play" class="w-3.5 h-3.5" />
              查看 Demo
            </a>
            <a
              v-if="featuredProject.githubUrl"
              :href="featuredProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 border border-ink text-ink text-sm font-medium hover:bg-paper-dark transition-colors"
            >
              <Icon icon="heroicons:code-bracket" class="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>

        <!-- Side: metrics + tech -->
        <div class="md:col-span-1 md:pl-6 mt-4 md:mt-0 space-y-4">
          <!-- Metrics -->
          <div v-if="featuredProject.metrics && Object.keys(featuredProject.metrics).length">
            <div class="section-label mb-2">專案指標</div>
            <div class="newspaper-rule-thin mb-3"></div>
            <div class="space-y-1.5">
              <div
                v-for="(value, key) in featuredProject.metrics"
                :key="key"
                class="flex justify-between text-sm border-b border-rule-light pb-1 last:border-0"
              >
                <span class="text-ink-secondary">{{ getMetricLabel(key) }}</span>
                <span class="text-accent-red font-bold font-mono">{{ value }}</span>
              </div>
            </div>
          </div>

          <!-- Tech stack -->
          <div>
            <div class="section-label mb-2">技術棧</div>
            <div class="newspaper-rule-thin mb-3"></div>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tech in featuredProject.techStack"
                :key="tech"
                class="text-xs px-1.5 py-0.5 border border-rule-light text-ink-muted font-mono"
                >{{ tech }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary projects -->
    <div v-if="otherProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div
        v-for="(project, index) in otherProjects"
        :key="project.id"
        class="p-4 border-b border-rule-light"
        :class="index === 0 ? 'md:border-r md:border-rule-light' : ''"
      >
        <div class="flex items-center gap-2 mb-1">
          <span class="dateline">{{ project.type }}</span>
          <span class="dateline text-rule">·</span>
          <span
            class="dateline"
            :class="project.status === '已完成' ? 'text-accent-gold' : 'text-accent-blue'"
            >{{ project.status }}</span
          >
        </div>
        <h3
          class="mb-2"
          style="
            font-family: 'Playfair Display', 'Noto Serif TC', Georgia, serif;
            font-size: 1.1rem;
            font-weight: 700;
          "
        >
          {{ project.name }}
        </h3>
        <p class="text-sm text-ink-secondary leading-relaxed mb-3">
          {{ project.description }}
        </p>

        <!-- Tech stack -->
        <div class="flex flex-wrap gap-1 mb-3">
          <span
            v-for="tech in project.techStack?.slice(0, 5)"
            :key="tech"
            class="text-xs px-1.5 py-0.5 border border-rule-light text-ink-muted font-mono"
            >{{ tech }}</span
          >
          <span v-if="(project.techStack?.length ?? 0) > 5" class="text-xs text-ink-muted px-1"
            >+{{ (project.techStack?.length ?? 0) - 5 }}</span
          >
        </div>

        <!-- Links -->
        <div class="flex gap-2">
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs px-3 py-1.5 bg-ink text-paper font-medium hover:bg-accent-red transition-colors inline-flex items-center gap-1"
          >
            <Icon icon="heroicons:play" class="w-3 h-3" />
            Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs px-3 py-1.5 border border-ink text-ink font-medium hover:bg-paper-dark transition-colors inline-flex items-center gap-1"
          >
            <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { projects, PROJECT_CONSTANTS } from '@/store/data/projects';

const featuredProject = projects[0]!;
const otherProjects = projects.slice(1);

const getMetricLabel = (key: string) =>
  PROJECT_CONSTANTS.metricLabels[key as keyof typeof PROJECT_CONSTANTS.metricLabels] || key;
</script>
