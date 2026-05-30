<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const lineRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Chips entrance
  gsap.fromTo('.cover-chip',
    { opacity: 0, scale: 0.6, y: 20, filter: 'blur(8px)' },
    { 
      opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
      duration: 1, stagger: 0.15, delay: 1.6, ease: "back.out(2)" 
    }
  )

  // Pulsing rings
  gsap.fromTo('.pulse-ring',
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 1, stagger: 0.3 }
  )

  // Horizontal accent line
  if (lineRef.value) {
    gsap.fromTo(lineRef.value,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1.2, delay: 1.2, ease: "expo.out" }
    )
  }

  // Logo glow pulse
  gsap.to('.logo-glow', {
    opacity: 0.6,
    scale: 1.1,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  // Floating orbs
  gsap.fromTo('.floating-orb',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, delay: 0.5, ease: "elastic.out(1, 0.5)" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center h-full w-full relative overflow-hidden">
    
    <!-- Pulsing rings behind title -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="pulse-ring" style="margin: -50px 0 0 -50px;"></div>
      <div class="pulse-ring" style="margin: -50px 0 0 -50px;"></div>
      <div class="pulse-ring" style="margin: -50px 0 0 -50px;"></div>
      <div class="pulse-ring" style="margin: -50px 0 0 -50px;"></div>
    </div>

    <!-- Central glow -->
    <div class="logo-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(138, 43, 226, 0.15), rgba(0, 229, 255, 0.05), transparent 70%); filter: blur(60px);">
    </div>

    <!-- Floating decorative orbs -->
    <div class="floating-orb absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-purple-500/30 float-gentle" style="animation-delay: 0s;"></div>
    <div class="floating-orb absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-cyan-500/40 float-gentle" style="animation-delay: 1s;"></div>
    <div class="floating-orb absolute bottom-[20%] left-[20%] w-2 h-2 rounded-full bg-green-500/30 float-gentle" style="animation-delay: 2s;"></div>
    <div class="floating-orb absolute bottom-[30%] right-[12%] w-1.5 h-1.5 rounded-full bg-purple-400/40 float-gentle" style="animation-delay: 0.5s;"></div>
    <div class="floating-orb absolute top-[40%] left-[8%] w-1 h-1 rounded-full bg-cyan-400/50 float-slow" style="animation-delay: 1.5s;"></div>
    <div class="floating-orb absolute top-[60%] right-[8%] w-1.5 h-1.5 rounded-full bg-magenta-400/30 float-slow" style="animation-delay: 3s;"></div>

    <!-- Main Titles -->
    <div class="relative z-10">
      <CinematicText 
        text="HazeClue" 
        tag="h1" 
        class="gradient-text text-8xl font-black mb-2 tracking-tight" 
        :delay="0.3"
        :stagger="0.06"
        :glow="true"
      />
    </div>

    <!-- Horizontal accent line -->
    <div 
      ref="lineRef" 
      class="w-40 h-[1px] my-6 origin-center relative z-10"
      style="background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.6), rgba(138, 43, 226, 0.6), transparent);"
    ></div>

    <CinematicText 
      text="See Through the Haze of Your Mind" 
      tag="p" 
      class="text-2xl text-[var(--color-text-muted)] mb-14 font-light relative z-10"
      :delay="1" 
      :stagger="0.02"
    />

    <!-- Tags -->
    <div class="flex gap-5 justify-center mb-20 relative z-10">
      <span class="cover-chip chip-purple cinematic-glow text-sm px-5 py-2">⚡ EEG Analysis</span>
      <span class="cover-chip chip-cyan cinematic-glow text-sm px-5 py-2">🧠 tDCS Stimulation</span>
      <span class="cover-chip chip-green cinematic-glow text-sm px-5 py-2">🤖 AI-Powered</span>
    </div>

    <!-- Footer Note -->
    <CinematicText 
      text="GRADUATION PROJECT 2025" 
      tag="p" 
      class="text-xs text-gray-500 tracking-[0.4em] relative z-10 font-medium"
      :delay="2.2"
      :stagger="0.03"
    />
  </div>
</template>
