<template>
  <section id="projects" class="pt-16 pb-16 w-full">
    <h2 class="font-headline font-bold tracking-tight mb-12 text-center">
      作品集
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        class="flex flex-col py-8"
        :class="[
          index % 2 === 0 ? 'md:pr-10 md:border-r md:border-outline-variant' : 'md:pl-10',
          index < projects.length - 2 ? 'border-b border-outline-variant' : '',
        ]"
      >
        <!-- 上方內容（撐滿剩餘空間） -->
        <div class="flex-1 space-y-3">
          <!-- 類型 + 狀態 -->
          <div class="flex items-center gap-3">
            <span class="font-label text-xs tracking-widest uppercase text-secondary">{{ project.type }}</span>
            <span class="text-outline-variant">·</span>
            <span
              class="font-label text-xs tracking-widest uppercase font-bold"
              :class="project.status === '已完成' ? 'text-secondary' : 'text-primary'"
            >{{ project.status }}</span>
          </div>

          <!-- 標題 -->
          <h3 class="font-headline font-bold leading-tight" style="font-size: 1.375rem;">
            {{ project.name }}
          </h3>

          <!-- 說明 -->
          <p class="font-body text-sm leading-relaxed text-on-surface-variant">
            {{ project.description }}
          </p>

          <!-- 亮點 -->
          <ul v-if="project.highlights?.length" class="space-y-1.5">
            <li
              v-for="h in project.highlights.slice(0, 3)"
              :key="h"
              class="flex items-start gap-2 font-body text-sm text-on-surface-variant"
            >
              <span class="text-primary mt-1 text-[10px] flex-shrink-0">▸</span>
              {{ h }}
            </li>
          </ul>
        </div>

        <!-- 技術棧 -->
        <div class="flex flex-wrap gap-1.5 pt-4">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="font-mono text-xs px-2 py-0.5 border border-outline-variant text-on-surface-variant"
          >{{ tech }}</span>
        </div>

        <!-- 連結 -->
        <div class="flex gap-3 pt-1 mt-auto">
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank" rel="noopener noreferrer"
            class="font-label text-xs tracking-widest uppercase px-4 py-2 bg-primary text-on-primary hover:bg-primary-container transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            <Icon icon="heroicons:arrow-top-right-on-square" class="w-3 h-3" />
            Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank" rel="noopener noreferrer"
            class="font-label text-xs tracking-widest uppercase px-4 py-2 border border-on-surface text-on-surface hover:bg-surface-container transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            <Icon icon="heroicons:code-bracket" class="w-3 h-3" />
            GitHub
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { projects } from '@/store/data/projects';
</script>
