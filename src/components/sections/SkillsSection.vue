<template>
  <section class="skills-section h-full p-2 sm:p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode File Tab Design -->
      <div
        class="bg-white rounded-xl border-2 border-primary p-4 sm:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-full"
      >
        <!-- File Tab -->
        <Tab :file="skillsFile" @close="handleTabClose" />

        <!-- Skills Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
          <!-- 統一的技能類別模板 - 消除重複代碼 -->
          <div
            v-for="category in skillCategories"
            :key="category.id"
            class="min-h-[280px] flex flex-col bg-gray-50 rounded-xl border-2 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            :class="category.borderColor"
          >
            <div class="category-header mb-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Icon :icon="category.icon" class="w-4 h-4" :class="category.iconColor" />
                </div>
                <h3 class="text-lg font-bold text-gray-800">{{ category.title }}</h3>
              </div>
            </div>
            <div class="flex-1 space-y-3">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="pb-2 border-b border-gray-300 last:border-b-0 last:pb-0"
              >
                <div class="flex items-center gap-2 mb-1">
                  <Icon :icon="skill.icon" class="w-4 h-4" :class="category.iconColor" />
                  <span class="text-sm font-medium text-gray-800">{{ skill.name }}</span>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed text-left">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Tab from '../../composables/Tab.vue';
import { skillCategories } from '../../store/data/skills';

// 定義 emits
const emit = defineEmits<{
  tabClose: [];
}>();

// 簡潔的文件定義
const skillsFile = {
  icon: 'heroicons:cog-6-tooth',
  displayName: '技術技能',
};

const handleTabClose = () => {
  emit('tabClose');
};
</script>

<style scoped>
/* Remove background since it's handled by parent */
.skills-section {
  background: transparent;
}
</style>
