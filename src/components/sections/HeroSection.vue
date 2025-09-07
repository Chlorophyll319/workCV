<template>
  <section class="bg-transparent h-full p-4 md:p-6">
    <div class="h-full flex flex-col">
      <!-- VSCode Editor Card -->
      <div
        class="bg-vscode-card rounded-xl border border-vscode-border p-4 md:p-6 flex-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-vscode-blue/50"
      >
        <!-- VSCode File Tab Design -->
        <div class="flex items-center gap-2 mb-6 pb-4 border-b border-vscode-border">
          <div class="flex items-center gap-2 bg-vscode-bg px-4 py-2 rounded-t-lg">
            <UIcon name="i-ph-file-js" class="w-4 h-4 text-vscode-yellow" />
            <span class="font-code text-sm text-vscode-text-white">portfolio.js</span>
            <UIcon
              name="i-ph-x"
              class="w-3 h-3 text-vscode-text-secondary hover:text-vscode-text-white cursor-pointer"
            />
          </div>
        </div>

        <!-- Code Content -->
        <div class="space-y-4 flex-1">
          <!-- Main Profile Code Block -->
          <div class="font-code text-sm">
            <!-- Line 1 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">1</span>
              <div class="flex-1">
                <span class="text-vscode-purple">const</span>
                <span class="text-vscode-blue ml-2">developer</span>
                <span class="text-vscode-text-primary ml-1">=</span>
                <span class="text-vscode-text-primary ml-1">{</span>
              </div>
            </div>

            <!-- Line 2 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">2</span>
              <div class="flex-1 ml-4">
                <span class="text-vscode-green">name</span>
                <span class="text-vscode-text-primary">:</span>
                <span class="text-vscode-orange ml-2"
                  >"{{ profile.name }} ({{ profile.englishName }})"</span
                >
              </div>
            </div>

            <!-- Line 3 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">3</span>
              <div class="flex-1 ml-4">
                <span class="text-vscode-green">role</span>
                <span class="text-vscode-text-primary">:</span>
                <span class="text-vscode-orange ml-2">"{{ profile.title }}"</span>
              </div>
            </div>

            <!-- Line 4 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">4</span>
              <div class="flex-1 ml-4">
                <span class="text-vscode-green">specialization</span>
                <span class="text-vscode-text-primary">:</span>
                <span class="text-vscode-orange ml-2">"{{ profile.subtitle }}"</span>
              </div>
            </div>

            <!-- Line 5 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">5</span>
              <div class="flex-1 ml-4">
                <span class="text-vscode-green">philosophy</span>
                <span class="text-vscode-text-primary">:</span>
                <span class="text-vscode-orange ml-2">"{{ profile.tagline }}"</span>
              </div>
            </div>

            <!-- Line 6 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">6</span>
              <div class="flex-1 ml-4">
                <span class="text-vscode-green">skills</span>
                <span class="text-vscode-text-primary">:</span>
                <span class="text-vscode-text-primary ml-2">[</span>
              </div>
            </div>

            <!-- Line 7 (skills array content) -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">7</span>
              <div class="flex-1 ml-8 flex flex-wrap gap-2">
                <span class="text-vscode-orange">"Vue3"</span
                ><span class="text-vscode-text-primary">,</span>
                <span class="text-vscode-orange">"JavaScript"</span
                ><span class="text-vscode-text-primary">,</span>
                <span class="text-vscode-orange">"Node.js"</span
                ><span class="text-vscode-text-primary">,</span>
                <span class="text-vscode-orange">"MongoDB"</span
                ><span class="text-vscode-text-primary">,</span>
                <span class="text-vscode-orange">"AI-Collaboration"</span>
              </div>
            </div>

            <!-- Line 8 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">8</span>
              <div class="flex-1 ml-4">
                <span class="text-vscode-text-primary">]</span>
              </div>
            </div>

            <!-- Line 9 -->
            <div class="flex">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">9</span>
              <div class="flex-1">
                <span class="text-vscode-text-primary">}</span>
              </div>
            </div>

            <!-- Active cursor line -->
            <div class="flex mt-2">
              <span class="text-vscode-text-secondary w-6 text-right mr-4">10</span>
              <div class="flex-1">
                <span class="text-vscode-text-primary">//</span>
                <span class="text-vscode-text-secondary ml-2">Ready to collaborate</span>
                <span class="text-vscode-text-white ml-1 animate-blink">|</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-vscode-border"
        >
          <UButton
            :to="profile.contact.github"
            target="_blank"
            size="lg"
            color="primary"
            variant="solid"
            class="font-code"
          >
            <UIcon name="i-ph-github-logo" class="w-5 h-5" />
            GitHub
          </UButton>

          <UButton
            :to="`mailto:${profile.contact.email}`"
            size="lg"
            color="neutral"
            variant="outline"
            class="font-code border-vscode-border hover:border-vscode-blue"
          >
            <UIcon name="i-ph-envelope" class="w-5 h-5" />
            聯絡我
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '../../assets/data/profile';
</script>

<style scoped>
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
</style>
