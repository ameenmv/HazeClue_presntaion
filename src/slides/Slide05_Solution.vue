<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'

const pillars = [
  { icon: '🧠', title: 'Neurocognitive Analysis', description: 'Real-time EEG signal processing & baseline tracking', color: 'purple' },
  { icon: '⚡', title: 'Smart tDCS', description: 'Closed-loop stimulation with safety protocols', color: 'cyan' },
  { icon: '⌚', title: 'Health Monitor', description: 'Smartwatch data for sleep, HRV, activity analysis', color: 'green' },
  { icon: '🌐', title: 'Web Platform', description: 'Educational content evaluation with heatmaps', color: 'gold' },
  { icon: '🤖', title: 'AI Engine', description: 'Personalized predictions & recommendations', color: 'magenta' }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12">
    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-start">
      <div class="flex items-center gap-6 mb-4">
        <CinematicText text="02" class="text-7xl font-light text-gray-700 opacity-50" :delay="0.1" />
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-cyan)] to-transparent"></div>
      </div>
      <CinematicText text="Proposed Solution" tag="h2" class="text-5xl font-bold text-white" :delay="0.3" />
      <CinematicText text="Five pillars forming a comprehensive AI-driven ecosystem." class="text-xl text-[var(--color-text-muted)] mt-4" :delay="0.5" />
    </div>

    <!-- Content -->
    <div class="grid grid-cols-5 gap-4 w-full max-w-6xl">
      <GlowCard 
        v-for="(item, index) in pillars" 
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.6 + (index * 0.15)"
        class="text-center items-center"
      />
    </div>
  </div>
</template>
