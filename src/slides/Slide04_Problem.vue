<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'

const problems = [
  { title: 'Focus Decline', description: 'Students and professionals struggle with decreasing attention during study and work sessions.', color: 'magenta' },
  { title: 'Mental Fatigue', description: 'Cognitive exhaustion goes undetected until performance significantly drops.', color: 'purple' },
  { title: 'Unknown Causes', description: 'No awareness of why performance declines — sleep? nutrition? stress?', color: 'cyan' },
  { title: 'No Content Metrics', description: 'No scientific method to measure the quality of educational content or teaching.', color: 'gold' },
  { title: 'Unsafe Stimulation', description: 'Random electrical brain stimulation without intelligent safety controls.', color: 'magenta' },
  { title: 'Fragmented Systems', description: 'No comprehensive platform integrating EEG data with wearable health metrics.', color: 'green' }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12">
    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-start">
      <div class="flex items-center gap-6 mb-4">
        <CinematicText text="01" class="text-7xl font-light text-gray-700 opacity-50" :delay="0.1" />
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-purple)] to-transparent"></div>
      </div>
      <CinematicText text="Problem Statement" tag="h2" class="text-5xl font-bold text-white" :delay="0.3" />
      <CinematicText text="The challenges we face in cognitive performance and mental health tracking." class="text-xl text-[var(--color-text-muted)] mt-4" :delay="0.5" />
    </div>

    <!-- Content -->
    <div class="grid grid-cols-3 gap-6 w-full max-w-6xl">
      <GlowCard 
        v-for="(item, index) in problems" 
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.6 + (index * 0.15)"
      />
    </div>
  </div>
</template>
