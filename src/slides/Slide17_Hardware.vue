<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'

const hardware = [
  { title: 'NPG Lite EEG', description: '3-channel brainwave measurement device connecting via BLE. Reads Alpha, Beta, Theta, Delta, and Gamma.', color: 'purple' },
  { title: 'Smart tDCS', description: 'Safe 0.5–2 mA electrical stimulation with closed-loop safety controls connected directly to brainwave readings.', color: 'cyan' },
  { title: 'Smartwatch Integration', description: 'Collects sleep quality, HRV, and physical activity via Health APIs to build context.', color: 'green' }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12">
    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-start">
      <div class="flex items-center gap-6 mb-4">
        <CinematicText text="06" class="text-7xl font-light text-gray-700 opacity-50" :delay="0.1" />
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-gold)] to-transparent"></div>
      </div>
      <CinematicText text="EEG & Hardware" tag="h2" class="text-5xl font-bold text-white" :delay="0.3" />
      <CinematicText text="Bridging the gap between the mind and the machine." class="text-xl text-[var(--color-text-muted)] mt-4" :delay="0.5" />
    </div>

    <!-- Content -->
    <div class="grid grid-cols-3 gap-6 w-full max-w-6xl">
      <GlowCard 
        v-for="(item, index) in hardware" 
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.6 + (index * 0.2)"
      />
    </div>
  </div>
</template>
