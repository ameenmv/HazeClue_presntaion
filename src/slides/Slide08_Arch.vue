<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Mobile stack nodes
  gsap.fromTo('.arch-node-left',
    { opacity: 0, x: -50, scale: 0.85, filter: 'blur(8px)' },
    { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, delay: 0.8, ease: "expo.out" }
  )

  // Web stack nodes
  gsap.fromTo('.arch-node-right',
    { opacity: 0, x: 50, scale: 0.85, filter: 'blur(8px)' },
    { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, delay: 1, ease: "expo.out" }
  )

  // Center line
  gsap.fromTo('.arch-center-line',
    { scaleY: 0, opacity: 0 },
    { scaleY: 1, opacity: 1, duration: 1.5, delay: 1.5, ease: "power2.out" }
  )

  // Connector glows
  gsap.fromTo('.connector-glow',
    { opacity: 0 },
    { opacity: 0.5, duration: 1, delay: 2, ease: "power2.out" }
  )

  // Floating cross-connect lines
  gsap.fromTo('.cross-line',
    { scaleX: 0, opacity: 0 },
    { scaleX: 1, opacity: 1, duration: 0.6, stagger: 0.1, delay: 1.8, ease: "power2.out" }
  )

  // Labels
  gsap.fromTo('.stack-label',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.6, ease: "power2.out" }
  )

  // Breathe glow on nodes
  gsap.to('.arch-node-left', {
    boxShadow: '0 0 20px rgba(138, 43, 226, 0.15)',
    duration: 3,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    ease: "sine.inOut"
  })

  gsap.to('.arch-node-right', {
    boxShadow: '0 0 20px rgba(0, 229, 255, 0.15)',
    duration: 3,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">08</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-start">
      <div class="flex items-center gap-6 mb-4">
        <CinematicText text="03" class="text-7xl font-light text-gray-700 opacity-50" :delay="0.1" />
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-green)] to-transparent"></div>
      </div>
      <CinematicText text="System Architecture" tag="h2" class="text-5xl font-bold text-white" :delay="0.3" :glow="true" />
      <CinematicText text="Dual-backend robust infrastructure handling real-time telemetry." class="text-xl text-[var(--color-text-muted)] mt-4" :delay="0.5" />
    </div>

    <!-- Custom Visual Architecture -->
    <div class="w-full max-w-5xl flex gap-12 mt-8 relative">
      
      <!-- Stack Labels -->
      <div class="absolute -top-8 left-0 right-0 flex justify-between px-4">
        <span class="stack-label text-purple-400 text-sm font-bold tracking-wider uppercase">Mobile Stack</span>
        <span class="stack-label text-cyan-400 text-sm font-bold tracking-wider uppercase">Web Stack</span>
      </div>

      <!-- Mobile Stack -->
      <div class="flex-1 flex flex-col gap-6 relative z-10">
        <div class="arch-node-left glass-panel p-6 rounded-xl border-l-4 border-l-purple-500 hover:-translate-y-1 transition-all duration-400 group">
          <h3 class="text-white font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors">Mobile Client</h3>
          <p class="text-sm text-gray-400">Flutter App connecting to EEG & tDCS via BLE.</p>
        </div>
        <div class="arch-node-left glass-panel p-6 rounded-xl border-l-4 border-l-purple-500 hover:-translate-y-1 transition-all duration-400 group">
          <h3 class="text-white font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors">Mobile Backend</h3>
          <p class="text-sm text-gray-400">.NET 8 Clean Architecture (REST APIs + JWT).</p>
        </div>
        <div class="arch-node-left glass-panel p-6 rounded-xl border-l-4 border-l-purple-500 hover:-translate-y-1 transition-all duration-400 group">
          <h3 class="text-white font-bold text-xl mb-2 group-hover:text-purple-200 transition-colors">Primary DB</h3>
          <p class="text-sm text-gray-400">SQL Server (EF Core + ACID compliance).</p>
        </div>
      </div>

      <!-- Connector line -->
      <div class="absolute left-1/2 top-0 bottom-0 flex flex-col items-center pointer-events-none" style="transform: translateX(-50%);">
        <div class="arch-center-line w-px h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent origin-top relative">
          <!-- Animated glow on line -->
          <div class="connector-glow absolute inset-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      <!-- Cross connect lines -->
      <div class="absolute left-[35%] top-[20%] w-[30%] pointer-events-none">
        <div class="cross-line h-px bg-gradient-to-r from-purple-500/20 via-gray-500/30 to-cyan-500/20 origin-left"></div>
      </div>
      <div class="absolute left-[35%] top-[50%] w-[30%] pointer-events-none">
        <div class="cross-line h-px bg-gradient-to-r from-purple-500/20 via-gray-500/30 to-cyan-500/20 origin-left"></div>
      </div>
      <div class="absolute left-[35%] top-[80%] w-[30%] pointer-events-none">
        <div class="cross-line h-px bg-gradient-to-r from-purple-500/20 via-gray-500/30 to-cyan-500/20 origin-left"></div>
      </div>
      
      <!-- Web Stack -->
      <div class="flex-1 flex flex-col gap-6 relative z-10">
        <div class="arch-node-right glass-panel p-6 rounded-xl border-r-4 border-r-cyan-500 text-right hover:-translate-y-1 transition-all duration-400 group">
          <h3 class="text-white font-bold text-xl mb-2 group-hover:text-cyan-200 transition-colors">Web Client</h3>
          <p class="text-sm text-gray-400">Nuxt 4 Dashboard for educators and real-time monitoring.</p>
        </div>
        <div class="arch-node-right glass-panel p-6 rounded-xl border-r-4 border-r-cyan-500 text-right hover:-translate-y-1 transition-all duration-400 group">
          <h3 class="text-white font-bold text-xl mb-2 group-hover:text-cyan-200 transition-colors">Web Backend</h3>
          <p class="text-sm text-gray-400">NestJS 11 + Socket.IO (Real-time telemetry).</p>
        </div>
        <div class="arch-node-right glass-panel p-6 rounded-xl border-r-4 border-r-cyan-500 text-right hover:-translate-y-1 transition-all duration-400 group">
          <h3 class="text-white font-bold text-xl mb-2 group-hover:text-cyan-200 transition-colors">Telemetry DB</h3>
          <p class="text-sm text-gray-400">MongoDB Atlas (High volume time-series data).</p>
        </div>
      </div>
    </div>
  </div>
</template>
