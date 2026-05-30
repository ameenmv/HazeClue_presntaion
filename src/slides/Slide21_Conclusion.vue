<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Link chips
  gsap.fromTo('.final-chip',
    { opacity: 0, scale: 0.6, y: 20, filter: 'blur(8px)' },
    { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, delay: 1.2, ease: "back.out(2)" }
  )

  // Supervisor card
  gsap.fromTo('.supervisor-card',
    { opacity: 0, y: 30, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 1, delay: 1.5, ease: "expo.out" }
  )

  // Central glow pulse
  gsap.to('.finale-glow', {
    opacity: 0.5,
    scale: 1.15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  // Pulsing rings
  gsap.fromTo('.finale-ring',
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.5, stagger: 0.5 }
  )

  // Floating particles
  gsap.fromTo('.finale-particle',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, delay: 0.3, ease: "elastic.out(1, 0.5)" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative overflow-hidden">
    <!-- Epic background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-purple-900/10 to-transparent opacity-70"></div>

    <!-- Central glow -->
    <div class="finale-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(0, 229, 255, 0.12), rgba(138, 43, 226, 0.08), transparent 70%); filter: blur(80px);">
    </div>

    <!-- Pulsing rings -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="finale-ring pulse-ring" style="margin: -50px 0 0 -50px;"></div>
      <div class="finale-ring pulse-ring" style="margin: -50px 0 0 -50px;"></div>
      <div class="finale-ring pulse-ring" style="margin: -50px 0 0 -50px;"></div>
    </div>

    <!-- Floating particles -->
    <div class="finale-particle absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-purple-500/30 float-gentle"></div>
    <div class="finale-particle absolute top-[20%] right-[20%] w-1.5 h-1.5 rounded-full bg-cyan-500/40 float-slow"></div>
    <div class="finale-particle absolute bottom-[25%] left-[25%] w-2 h-2 rounded-full bg-green-500/30 float-gentle" style="animation-delay: 1s;"></div>
    <div class="finale-particle absolute bottom-[15%] right-[15%] w-1 h-1 rounded-full bg-purple-400/50 float-slow" style="animation-delay: 2s;"></div>
    <div class="finale-particle absolute top-[50%] left-[5%] w-1.5 h-1.5 rounded-full bg-cyan-400/30 float-gentle" style="animation-delay: 0.5s;"></div>
    <div class="finale-particle absolute top-[35%] right-[5%] w-1 h-1 rounded-full bg-magenta-400/40 float-slow" style="animation-delay: 1.5s;"></div>

    <div class="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
      
      <CinematicText text="Thank You!" tag="h1" class="text-8xl font-black text-white mb-6 gradient-text" :delay="0.2" :stagger="0.06" :glow="true" />
      <CinematicText text="Questions & Discussion" class="text-2xl text-[var(--color-text-muted)] mb-12 font-light" :delay="0.8" />

      <!-- Links -->
      <div class="flex gap-6 justify-center mb-16">
        <span class="final-chip chip-purple cinematic-glow text-lg px-8 py-3 cursor-pointer hover:scale-105 transition-transform duration-300">github.com/HazeClue</span>
        <span class="final-chip chip-cyan cinematic-glow text-lg px-8 py-3 cursor-pointer hover:scale-105 transition-transform duration-300">hazeclue.com</span>
      </div>

      <!-- Supervisor -->
      <div class="supervisor-card glass-panel px-12 py-6 rounded-2xl mb-12 border border-white/5">
        <p class="text-gray-400 mb-1">Supervised by <strong class="text-white">Prof. [Supervisor Name]</strong></p>
        <p class="text-sm text-gray-500">[University Name] — Department of Computer Science</p>
      </div>

      <CinematicText text="HazeClue — See Through the Haze of Your Mind" class="text-sm text-gray-500 tracking-[0.25em] uppercase font-medium" :delay="2" />
    </div>
  </div>
</template>
