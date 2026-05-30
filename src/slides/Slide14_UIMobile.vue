<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'

const uiFeatures = [
  { icon: '📱', title: 'Mobile Focus Training', description: 'Real-time focus insights, training sessions, and BLE device management.', color: 'purple' },
  { icon: '💻', title: 'Web Dashboard', description: 'Live classroom monitoring, session wizards, and detailed PDF heatmaps.', color: 'cyan' },
  { icon: '🎨', title: 'Design System', description: 'Dark & Light modes, 35+ screens, Glassmorphism UI.', color: 'green' }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12">
    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-start">
      <div class="flex items-center gap-6 mb-4">
        <CinematicText text="05" class="text-7xl font-light text-gray-700 opacity-50" :delay="0.1" />
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-cyan)] to-transparent"></div>
      </div>
      <CinematicText text="User Interface" tag="h2" class="text-5xl font-bold text-white" :delay="0.3" />
      <CinematicText text="Beautiful, data-dense, and highly responsive." class="text-xl text-[var(--color-text-muted)] mt-4" :delay="0.5" />
    </div>

    <!-- Content -->
    <div class="grid grid-cols-3 gap-6 w-full max-w-6xl">
      <GlowCard 
        v-for="(item, index) in uiFeatures" 
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.6 + (index * 0.2)"
      />
    </div>
  </div>
</template>
