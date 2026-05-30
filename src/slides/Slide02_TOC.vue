<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

const tocItems = [
  { icon: '01', title: 'Problem Statement', description: 'Mental health crisis and cognitive fatigue.', color: 'magenta' },
  { icon: '02', title: 'Proposed Solution', description: 'AI-driven BCI for cognitive enhancement.', color: 'green' },
  { icon: '03', title: 'System Architecture', description: 'Multi-layer framework for brain-data processing.', color: 'purple' },
  { icon: '04', title: 'Tech Stack', description: 'Next.js, FastAPI, and Advanced ML models.', color: 'cyan' },
  { icon: '05', title: 'User Interface', description: 'Cinematic dashboard and mobile experiences.', color: 'gold' },
  { icon: '06', title: 'EEG & Brainwaves', description: 'Signal processing and feature extraction.', color: 'purple' },
  { icon: '07', title: 'Innovation & Safety', description: 'Advanced closed-loop safety mechanisms.', color: 'cyan' },
  { icon: '08', title: 'Conclusion', description: 'Meet the minds behind HazeClue.', color: 'green' }
]

onMounted(() => {
  // Animated accent line under header
  gsap.fromTo('.toc-accent',
    { scaleX: 0, opacity: 0 },
    { scaleX: 1, opacity: 1, duration: 1, delay: 0.6, ease: "expo.out" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">02</div>
    <div class="edge-glow-top"></div>

    <div class="mb-10 flex flex-col items-center">
      <CinematicText 
        text="Table of Contents" 
        tag="h2" 
        class="text-5xl font-bold gradient-text mb-4" 
        :delay="0.2"
        :glow="true"
      />
      <div class="toc-accent w-32 h-[2px] origin-center" style="background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.5), rgba(138, 43, 226, 0.5), transparent);"></div>
    </div>

    <div class="grid grid-cols-4 gap-6 w-full max-w-6xl">
      <GlowCard 
        v-for="(item, index) in tocItems" 
        :key="item.icon"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.4 + (index * 0.1)"
      />
    </div>
  </div>
</template>
