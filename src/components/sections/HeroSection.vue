<template>
  <section class="hero-section min-h-screen flex items-center justify-center px-4 py-8">
    <div class="max-w-4xl w-full">
      <!-- Terminal Window -->
      <Terminal title="evelyn@portfolio:~$ whoami">
        <div class="space-y-2">
          <!-- Command Prompt -->
          <div class="flex items-center space-x-2">
            <span class="text-vscode-green">evelyn@portfolio</span>
            <span class="text-vscode-text-primary">:</span>
            <span class="text-vscode-blue">~</span>
            <span class="text-vscode-text-primary">$</span>
            <span class="text-vscode-yellow ml-2">whoami</span>
          </div>
          
          <!-- Output -->
          <div class="mt-4 space-y-1">
            <div class="text-vscode-text-white text-lg font-semibold">
              {{ profile.name }} ({{ profile.englishName }})
            </div>
            <div class="text-vscode-blue">
              {{ profile.title }} | {{ profile.subtitle }}
            </div>
            <div class="text-vscode-text-secondary mt-2 max-w-2xl">
              {{ profile.tagline }}
            </div>
          </div>

          <!-- Second Command -->
          <div class="flex items-center space-x-2 mt-6">
            <span class="text-vscode-green">evelyn@portfolio</span>
            <span class="text-vscode-text-primary">:</span>
            <span class="text-vscode-blue">~</span>
            <span class="text-vscode-text-primary">$</span>
            <span class="text-vscode-yellow ml-2">ls skills/</span>
          </div>
          
          <!-- Skills Output -->
          <div class="mt-2 flex flex-wrap gap-2">
            <span class="text-vscode-blue">Vue3/</span>
            <span class="text-vscode-green">Node.js/</span>
            <span class="text-vscode-yellow">AI-Collaboration/</span>
            <span class="text-vscode-purple">MongoDB/</span>
            <span class="text-vscode-orange">Tailwind/</span>
          </div>

          <!-- Third Command with Cursor -->
          <div class="flex items-center space-x-2 mt-6">
            <span class="text-vscode-green">evelyn@portfolio</span>
            <span class="text-vscode-text-primary">:</span>
            <span class="text-vscode-blue">~</span>
            <span class="text-vscode-text-primary">$</span>
            <span class="text-vscode-yellow ml-2">contact</span>
            <span class="animate-pulse text-vscode-text-white">|</span>
          </div>
        </div>
      </Terminal>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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

      <!-- Scroll Indicator -->
      <div class="text-center mt-12">
        <div class="animate-bounce">
          <UIcon name="i-ph-arrow-down" class="w-6 h-6 text-vscode-text-secondary mx-auto" />
        </div>
        <p class="text-vscode-text-secondary text-sm mt-2 font-code">
          scroll to explore
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '../../assets/data/profile'
import Terminal from '../ui/Terminal.vue'
</script>

<style scoped>
.hero-section {
  background: 
    radial-gradient(circle at 20% 80%, rgba(86, 156, 214, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(106, 153, 85, 0.08) 0%, transparent 50%);
}

/* Typing animation could be added here */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: #D4D4D4 }
}
</style>