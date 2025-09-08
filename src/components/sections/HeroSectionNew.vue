<template>
  <section id="hero" class="h-full p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode Editor Card -->
      <div
        class="bg-white rounded-2xl border-2 border-gray-200 p-6 md:p-8 flex-1 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        style="border-color: var(--color-primary);"
      >
        <!-- VSCode File Tab Design -->
        <div class="flex items-center gap-3 mb-8 pb-4 border-b-2" style="border-color: var(--color-primary);">
          <div class="flex items-center gap-3 px-4 py-2 rounded-t-lg" style="background-color: var(--color-primary); color: white;">
            <Icon icon="heroicons:document-text" class="w-5 h-5" />
            <span class="font-mono text-sm font-semibold">portfolio.js</span>
            <Icon icon="heroicons:x-mark" class="w-4 h-4 hover:bg-white hover:text-gray-800 rounded cursor-pointer transition-colors" />
          </div>
        </div>

        <!-- Code Content -->
        <div class="space-y-3 flex-1">
          <!-- Main Profile Code Block -->
          <div class="font-mono text-sm leading-relaxed">
            <!-- Line 1 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">1</span>
              <div class="flex-1">
                <span style="color: var(--color-accent);">const</span>
                <span style="color: var(--color-primary); margin-left: 8px;">developer</span>
                <span class="text-gray-700 ml-2">=</span>
                <span class="text-gray-700 ml-2">{</span>
              </div>
            </div>

            <!-- Line 2 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">2</span>
              <div class="flex-1 ml-6">
                <span style="color: var(--color-primary);">name</span>
                <span class="text-gray-700">:</span>
                <span style="color: var(--color-accent); margin-left: 8px;">
                  "{{ profile.name }} ({{ profile.englishName }})"
                </span>
              </div>
            </div>

            <!-- Line 3 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">3</span>
              <div class="flex-1 ml-6">
                <span style="color: var(--color-primary);">role</span>
                <span class="text-gray-700">:</span>
                <span style="color: var(--color-accent); margin-left: 8px;">"{{ profile.title }}"</span>
              </div>
            </div>

            <!-- Line 4 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">4</span>
              <div class="flex-1 ml-6">
                <span style="color: var(--color-primary);">specialization</span>
                <span class="text-gray-700">:</span>
                <span style="color: var(--color-accent); margin-left: 8px;">"{{ profile.subtitle }}"</span>
              </div>
            </div>

            <!-- Line 5 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">5</span>
              <div class="flex-1 ml-6">
                <span style="color: var(--color-primary);">philosophy</span>
                <span class="text-gray-700">:</span>
                <span style="color: var(--color-accent); margin-left: 8px;">"{{ profile.tagline }}"</span>
              </div>
            </div>

            <!-- Line 6 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">6</span>
              <div class="flex-1 ml-6">
                <span style="color: var(--color-primary);">skills</span>
                <span class="text-gray-700">:</span>
                <span class="text-gray-700 ml-2">[</span>
              </div>
            </div>

            <!-- Lines 7-8 (skills array content) -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">7</span>
              <div class="flex-1 ml-12 flex flex-wrap gap-x-4 gap-y-1">
                <span style="color: var(--color-accent);">"Vue3"</span><span class="text-gray-700">,</span>
                <span style="color: var(--color-accent);">"JavaScript"</span><span class="text-gray-700">,</span>
                <span style="color: var(--color-accent);">"Node.js"</span><span class="text-gray-700">,</span>
                <span style="color: var(--color-accent);">"MongoDB"</span><span class="text-gray-700">,</span>
              </div>
            </div>
            
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">8</span>
              <div class="flex-1 ml-12">
                <span style="color: var(--color-accent);">"TypeScript"</span><span class="text-gray-700">,</span>
                <span style="color: var(--color-accent); margin-left: 16px;">"AI-Collaboration"</span>
              </div>
            </div>

            <!-- Line 9 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">9</span>
              <div class="flex-1 ml-6">
                <span class="text-gray-700">],</span>
              </div>
            </div>

            <!-- Line 10 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">10</span>
              <div class="flex-1 ml-6">
                <span style="color: var(--color-primary);">contact</span>
                <span class="text-gray-700">:</span>
                <span class="text-gray-700 ml-2">{</span>
              </div>
            </div>

            <!-- Contact info -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">11</span>
              <div class="flex-1 ml-12">
                <span style="color: var(--color-primary);">email</span>
                <span class="text-gray-700">:</span>
                <span style="color: var(--color-accent); margin-left: 8px;">"{{ profile.contact.email }}"</span><span class="text-gray-700">,</span>
              </div>
            </div>
            
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">12</span>
              <div class="flex-1 ml-12">
                <span style="color: var(--color-primary);">github</span>
                <span class="text-gray-700">:</span>
                <span style="color: var(--color-accent); margin-left: 8px;">"{{ profile.contact.github }}"</span>
              </div>
            </div>

            <!-- Line 13 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">13</span>
              <div class="flex-1 ml-6">
                <span class="text-gray-700">}</span>
              </div>
            </div>

            <!-- Line 14 -->
            <div class="flex">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">14</span>
              <div class="flex-1">
                <span class="text-gray-700">}</span>
              </div>
            </div>

            <!-- Active cursor line -->
            <div class="flex mt-4">
              <span class="text-gray-400 w-8 text-right mr-4 select-none">15</span>
              <div class="flex-1">
                <span class="text-gray-500">//</span>
                <span class="text-gray-500 ml-2">Ready to collaborate and build amazing things</span>
                <span class="text-gray-800 ml-2 animate-blink font-bold">|</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10 pt-6 border-t-2" style="border-color: var(--color-primary);">
          <a 
            :href="profile.contact.github" 
            target="_blank"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            style="background-color: var(--color-primary); color: white;"
          >
            <Icon icon="heroicons:code-bracket" class="w-5 h-5" />
            <span class="font-mono">GitHub</span>
          </a>

          <a
            :href="`mailto:${profile.contact.email}`"
            class="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            style="border-color: var(--color-accent); color: var(--color-accent);"
          >
            <Icon icon="heroicons:envelope" class="w-5 h-5" />
            <span class="font-mono">聯絡我</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { profile } from '../../assets/data/profile'
</script>

<style scoped>
/* Remove background since it's handled by parent */
.hero-section {
  background: transparent;
}

/* 游標閃爍動畫 */
@keyframes blink {
  0%, 50% { 
    opacity: 1; 
  }
  51%, 100% { 
    opacity: 0; 
  }
}

.animate-blink {
  animation: blink 1s infinite;
}

/* VSCode Editor Card 樣式 */
.bg-white {
  background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
}

/* 響應式調整 */
@media (max-width: 768px) {
  .font-mono {
    font-size: 12px;
  }
  
  .w-8 {
    width: 24px;
  }
  
  .mr-4 {
    margin-right: 12px;
  }
  
  .ml-6 {
    margin-left: 20px;
  }
  
  .ml-12 {
    margin-left: 40px;
  }
}

/* Hover 效果增強 */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
</style>