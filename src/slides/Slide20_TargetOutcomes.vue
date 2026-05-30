<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate stat cards
  gsap.fromTo('.stat-card',
    { opacity: 0, scale: 0.7, y: 30, filter: 'blur(8px)' },
    { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.12, delay: 1, ease: "back.out(1.8)" }
  )

  // Animate stat numbers (counter effect)
  gsap.fromTo('.stat-number',
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, stagger: 0.15, delay: 1.2, ease: "elastic.out(1, 0.5)" }
  )

  // Pulsing stat glow
  gsap.to('.stat-card', {
    boxShadow: (i: number) => {
      const shadows = [
        '0 0 25px rgba(0, 255, 127, 0.15)',
        '0 0 25px rgba(138, 43, 226, 0.15)',
        '0 0 25px rgba(0, 229, 255, 0.15)',
        '0 0 25px rgba(255, 200, 0, 0.15)'
      ]
      return shadows[i % shadows.length]
    },
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">20</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Target Users & Expected Outcomes" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Who is it for and what does it achieve?" class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- Target Users -->
      <div class="flex-1 flex flex-col gap-4">
        <h4 class="text-2xl font-bold text-white mb-4">Target Users</h4>
        
        <GlowCard 
          title="Students & Professionals" 
          description="Anyone seeking to improve focus and cognitive performance." 
          color="purple" 
          :delay="0.5"
        />
        <GlowCard 
          title="Educational Institutions" 
          description="Schools and universities analyzing teaching quality." 
          color="cyan" 
          :delay="0.7"
        />
        <GlowCard 
          title="Research Companies" 
          description="Mental performance analysis for employees." 
          color="green" 
          :delay="0.9"
        />
      </div>

      <!-- Expected Outcomes -->
      <div class="flex-1">
        <h4 class="text-2xl font-bold text-white mb-8">Expected Outcomes</h4>
        
        <div class="grid grid-cols-2 gap-6">
          <div class="stat-card glass-panel p-6 rounded-2xl text-center flex flex-col justify-center border border-green-500/20 hover:border-green-500/40 transition-all duration-500 group">
            <div class="stat-number text-4xl font-black text-green-400 mb-2 counter-glow group-hover:scale-110 transition-transform duration-300">↑ 40%</div>
            <div class="text-sm text-gray-300 uppercase tracking-widest">Focus Duration</div>
          </div>
          
          <div class="stat-card glass-panel p-6 rounded-2xl text-center flex flex-col justify-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group">
            <div class="stat-number text-4xl font-black text-purple-400 mb-2 counter-glow group-hover:scale-110 transition-transform duration-300">↓ 35%</div>
            <div class="text-sm text-gray-300 uppercase tracking-widest">Mental Fatigue</div>
          </div>
          
          <div class="stat-card glass-panel p-6 rounded-2xl text-center flex flex-col justify-center border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group">
            <div class="stat-number text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">Reports</div>
            <div class="text-sm text-cyan-300 uppercase tracking-widest">Neural Heatmaps</div>
          </div>
          
          <div class="stat-card glass-panel p-6 rounded-2xl text-center flex flex-col justify-center border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 group">
            <div class="stat-number text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">Alerts</div>
            <div class="text-sm text-yellow-300 uppercase tracking-widest">Smart Triggers</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
