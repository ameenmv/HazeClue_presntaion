<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate table rows
  gsap.fromTo('.wave-row',
    { opacity: 0, x: -40, filter: 'blur(4px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.1, delay: 0.6, ease: "power3.out" }
  )

  // Animate capability cards
  gsap.fromTo('.cap-card',
    { opacity: 0, x: 40, scale: 0.9, filter: 'blur(6px)' },
    { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, delay: 0.8, ease: "expo.out" }
  )

  // Table panel entrance
  gsap.fromTo('.table-panel',
    { opacity: 0, y: 30, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.4, ease: "expo.out" }
  )

  // Pulsing border accent on Beta row
  gsap.to('.beta-highlight', {
    boxShadow: '0 0 20px rgba(138, 43, 226, 0.3), inset 0 0 20px rgba(138, 43, 226, 0.05)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  // Card border glow pulse
  gsap.to('.cap-card', {
    borderLeftColor: (i: number) => {
      const colors = ['rgba(0, 229, 255, 0.8)', 'rgba(138, 43, 226, 0.8)', 'rgba(0, 255, 127, 0.8)']
      return colors[i % colors.length]
    },
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: 0.5,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <!-- Slide number ghost -->
    <div class="slide-number-ghost">06</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Neurocognitive Performance Analysis" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Decoding brain frequencies in real-time." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-8 w-full max-w-6xl">
      <!-- Frequencies Table -->
      <div class="table-panel flex-1 glass-panel p-8 rounded-2xl breathe-glow-purple">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-gray-700">
              <th class="py-3 text-gray-300 font-medium text-sm tracking-wider uppercase">Wave</th>
              <th class="py-3 text-gray-300 font-medium text-sm tracking-wider uppercase">Hz</th>
              <th class="py-3 text-gray-300 font-medium text-sm tracking-wider uppercase">State</th>
            </tr>
          </thead>
          <tbody class="text-[var(--color-text-muted)]">
            <tr class="wave-row border-b border-gray-800/50 hover:bg-white/5 transition-all duration-300">
              <td class="py-3 font-semibold text-gray-200">Delta</td>
              <td class="py-3 font-mono text-sm">0.5–4</td>
              <td class="py-3">Deep sleep</td>
            </tr>
            <tr class="wave-row border-b border-gray-800/50 hover:bg-white/5 transition-all duration-300">
              <td class="py-3 font-semibold text-gray-200">Theta</td>
              <td class="py-3 font-mono text-sm">4–8</td>
              <td class="py-3">Meditation / Drowsiness</td>
            </tr>
            <tr class="wave-row border-b border-gray-800/50 hover:bg-cyan-900/10 transition-all duration-300">
              <td class="py-3 font-semibold text-cyan-300">Alpha</td>
              <td class="py-3 font-mono text-sm text-cyan-200">8–12</td>
              <td class="py-3 text-cyan-100">Relaxed / Mind-wandering</td>
            </tr>
            <tr class="wave-row beta-highlight border-b border-gray-800/50 bg-purple-900/15 transition-all duration-300 rounded-lg">
              <td class="py-4 font-bold text-purple-400 text-lg">Beta ★</td>
              <td class="py-4 font-mono text-purple-300">12–30</td>
              <td class="py-4 font-bold text-purple-200">Active Focus</td>
            </tr>
            <tr class="wave-row hover:bg-white/5 transition-all duration-300">
              <td class="py-3 font-semibold text-gray-200">Gamma</td>
              <td class="py-3 font-mono text-sm">30–100</td>
              <td class="py-3">Learning & Memory</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Key Capabilities -->
      <div class="flex-1 flex flex-col gap-6 justify-center">
        <div class="cap-card glass-panel p-6 rounded-xl border-l-4 border-l-cyan-500 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
          <div class="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h4 class="text-xl font-bold text-white mb-2 relative z-10">Real-time Detection</h4>
          <p class="text-sm text-gray-400 relative z-10">Instantly detects mind-wandering by analyzing Alpha/Beta ratios.</p>
        </div>
        <div class="cap-card glass-panel p-6 rounded-xl border-l-4 border-l-purple-500 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
          <div class="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h4 class="text-xl font-bold text-white mb-2 relative z-10">Personal Baseline</h4>
          <p class="text-sm text-gray-400 relative z-10">Builds a unique neuro-profile for each user across multiple sessions.</p>
        </div>
        <div class="cap-card glass-panel p-6 rounded-xl border-l-4 border-l-green-500 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
          <div class="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h4 class="text-xl font-bold text-white mb-2 relative z-10">Cross-session Tracking</h4>
          <p class="text-sm text-gray-400 relative z-10">Monitors performance degradation or improvement over time.</p>
        </div>
      </div>
    </div>
  </div>
</template>
