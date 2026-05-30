<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Feature list items
  gsap.fromTo('.web-feature',
    { opacity: 0, x: -25, filter: 'blur(4px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.1, delay: 0.6, ease: "power3.out" }
  )

  // Architecture blocks
  gsap.fromTo('.arch-block',
    { opacity: 0, y: 20, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, delay: 0.8, ease: "back.out(1.5)" }
  )

  // Arrows
  gsap.fromTo('.arch-arrow',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.3, stagger: 0.1, delay: 1.3, ease: "power2.out" }
  )

  // Feature panel
  gsap.fromTo('.feature-panel',
    { opacity: 0, x: -30, scale: 0.95 },
    { opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.4, ease: "expo.out" }
  )

  // Feature dots pulse
  gsap.to('.feat-dot', {
    scale: 1.3,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">15</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Web Platform — Nuxt 4" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="The control center for educators and institutions." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- Features List -->
      <div class="feature-panel flex-1 glass-panel p-8 rounded-2xl relative breathe-glow-cyan">
        <h4 class="text-xl font-bold text-cyan-400 mb-6">Key Capabilities</h4>
        <ul class="space-y-4 text-gray-300">
          <li class="web-feature flex gap-3 group">
            <span class="feat-dot text-cyan-500 mt-0.5">❖</span>
            <div><strong class="text-white group-hover:text-cyan-200 transition-colors">Live Monitoring</strong> — Real-time classroom attention via WebSockets</div>
          </li>
          <li class="web-feature flex gap-3 group">
            <span class="feat-dot text-cyan-500 mt-0.5">❖</span>
            <div><strong class="text-white group-hover:text-cyan-200 transition-colors">Session Wizard</strong> — Multi-step intuitive session creation</div>
          </li>
          <li class="web-feature flex gap-3 group">
            <span class="feat-dot text-cyan-500 mt-0.5">❖</span>
            <div><strong class="text-white group-hover:text-cyan-200 transition-colors">Reports</strong> — Automated PDF analytics with neural heatmaps</div>
          </li>
          <li class="web-feature flex gap-3 group">
            <span class="feat-dot text-cyan-500 mt-0.5">❖</span>
            <div><strong class="text-white group-hover:text-cyan-200 transition-colors">Device Hub</strong> — Manage fleet of EEG devices centrally</div>
          </li>
          <li class="web-feature flex gap-3 group">
            <span class="feat-dot text-cyan-500 mt-0.5">❖</span>
            <div><strong class="text-white group-hover:text-cyan-200 transition-colors">i18n Ready</strong> — Full English + Arabic (RTL) support</div>
          </li>
        </ul>
      </div>

      <!-- Architecture Block -->
      <div class="flex-1 flex flex-col justify-center gap-4">
        <h4 class="text-2xl font-bold text-white mb-4 text-center">Frontend Architecture</h4>
        
        <div class="flex flex-col items-center gap-0">
          <div class="arch-block w-52 bg-blue-900/50 border border-blue-500/60 px-4 py-3 rounded-lg text-center text-sm text-white shadow-lg hover:scale-105 transition-transform duration-300">UI Components</div>
          <div class="arch-arrow text-blue-500 text-lg py-1">↓</div>
          <div class="arch-block w-52 bg-gray-800/80 border border-gray-600 px-4 py-3 rounded-lg text-center text-sm text-gray-300 shadow-md hover:scale-105 transition-transform duration-300">Composables (Logic)</div>
          <div class="arch-arrow text-blue-500 text-lg py-1">↓</div>
          <div class="arch-block w-52 bg-gray-800/80 border border-gray-600 px-4 py-3 rounded-lg text-center text-sm text-gray-300 shadow-md hover:scale-105 transition-transform duration-300">Pinia Stores (State)</div>
          <div class="arch-arrow text-blue-500 text-lg py-1">↓</div>
          <div class="arch-block w-52 bg-cyan-900/50 border border-cyan-500/60 px-4 py-3 rounded-lg text-center text-sm text-cyan-200 shadow-lg hover:scale-105 transition-transform duration-300">Nitro API Proxy</div>
        </div>
      </div>
    </div>
  </div>
</template>
