<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

const innovations = [
  { icon: '🏆', title: 'First Integrated Platform', description: 'Combines EEG + tDCS + Wearables in one single closed ecosystem.', color: 'gold' },
  { icon: '🧠', title: 'Adaptive Stimulation', description: 'Smart closed-loop tDCS that adapts to real-time brain signals automatically.', color: 'cyan' },
  { icon: '📊', title: 'Scientific Content Analysis', description: 'Neural engagement heatmaps for rigorous educational content evaluation.', color: 'purple' },
  { icon: '🛡️', title: 'Safety-First Engine', description: 'Multi-layer safety protocols with parental controls and hardware limits.', color: 'green' }
]

onMounted(() => {
  // Team footer
  gsap.fromTo('.team-footer',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: "expo.out" }
  )

  // Accent line
  gsap.fromTo('.innovation-accent',
    { scaleX: 0 },
    { scaleX: 1, duration: 1, delay: 0.8, ease: "expo.out" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative overflow-hidden">
    <div class="slide-number-ghost">18</div>
    <div class="edge-glow-top"></div>

    <!-- Starburst effect background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center relative z-10">
      <CinematicText text="07" class="text-3xl font-light text-gray-700 opacity-50 mb-4" :delay="0.1" />
      <CinematicText text="Innovation & Conclusion" tag="h2" class="text-6xl font-bold text-white mb-3" :delay="0.3" :glow="true" />
      <div class="innovation-accent w-24 h-[2px] mb-4 origin-center" style="background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.6), transparent);"></div>
      <CinematicText text="Redefining cognitive enhancement for the next generation." class="text-xl text-[var(--color-text-muted)]" :delay="0.5" />
    </div>

    <!-- Content -->
    <div class="grid grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
      <GlowCard 
        v-for="(item, index) in innovations" 
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.6 + (index * 0.15)"
      />
    </div>

    <!-- Team Footer -->
    <div class="team-footer mt-14 text-center relative z-10">
      <CinematicText text="Thank you for your time." class="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase" :delay="1.5" />
      <CinematicText text="The HazeClue Team" class="text-2xl font-semibold mt-2 text-white" :delay="1.8" />
    </div>
  </div>
</template>
