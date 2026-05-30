<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate safety list items
  gsap.fromTo('.safety-item',
    { opacity: 0, x: -25, filter: 'blur(4px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.1, delay: 0.6, ease: "power3.out" }
  )

  // Animate flow nodes sequentially
  gsap.fromTo('.flow-node',
    { opacity: 0, scale: 0.7, y: 15, filter: 'blur(6px)' },
    { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.15, delay: 0.8, ease: "back.out(1.5)" }
  )

  // Animate flow connectors
  gsap.fromTo('.flow-connector',
    { scaleY: 0, opacity: 0 },
    { scaleY: 1, opacity: 1, duration: 0.4, stagger: 0.1, delay: 1.2, ease: "power2.out" }
  )

  // Decision branches
  gsap.fromTo('.flow-branch',
    { opacity: 0, y: 20, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, delay: 1.8, ease: "back.out(1.5)" }
  )

  // Flow panel entrance
  gsap.fromTo('.flow-panel',
    { opacity: 0, x: 40, scale: 0.95 },
    { opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.4, ease: "expo.out" }
  )

  // Pulsing glow on active nodes
  gsap.to('.node-active', {
    boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">07</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Smart Electrical Stimulation (tDCS)" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Closed-loop control using real-time EEG." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- Description -->
      <div class="flex-1">
        <p class="safety-item text-lg text-gray-300 mb-6">
          <strong class="text-white">Transcranial Direct Current Stimulation</strong> — a non-invasive technique using low electrical current to stimulate specific brain regions.
        </p>

        <h4 class="safety-item text-xl font-bold text-cyan-400 mb-4">Safety-First Approach:</h4>
        <ul class="space-y-3 text-[var(--color-text-muted)]">
          <li class="safety-item flex items-start gap-3 group">
            <span class="text-cyan-500 mt-1 group-hover:scale-125 transition-transform duration-300">✔</span>
            <span>Optional — activated only by user consent</span>
          </li>
          <li class="safety-item flex items-start gap-3 group">
            <span class="text-cyan-500 mt-1 group-hover:scale-125 transition-transform duration-300">✔</span>
            <span>Compatible with FDA-approved devices (Flow, Halo)</span>
          </li>
          <li class="safety-item flex items-start gap-3 group">
            <span class="text-cyan-500 mt-1 group-hover:scale-125 transition-transform duration-300">✔</span>
            <span><strong class="text-white">Closed-loop</strong> control using real-time EEG</span>
          </li>
          <li class="safety-item flex items-start gap-3 group">
            <span class="text-cyan-500 mt-1 group-hover:scale-125 transition-transform duration-300">✔</span>
            <span>Max 2 mA, 20–30 min sessions</span>
          </li>
          <li class="safety-item flex items-start gap-3 group">
            <span class="text-cyan-500 mt-1 group-hover:scale-125 transition-transform duration-300">✔</span>
            <span>Safe modes for children with parental control</span>
          </li>
        </ul>
      </div>

      <!-- Flowchart -->
      <div class="flow-panel flex-1 glass-panel p-8 rounded-2xl border border-cyan-900/30 flex flex-col items-center justify-center relative breathe-glow-cyan">
        <div class="absolute inset-0 bg-cyan-900/5 rounded-2xl pointer-events-none"></div>
        <h4 class="flow-node text-2xl font-bold text-white mb-6 relative z-10">Closed-Loop Flow</h4>
        
        <div class="flex flex-col gap-0 relative z-10 w-full items-center">
          <div class="flow-node bg-gray-800/80 border border-gray-600 px-6 py-3 rounded-lg text-center w-52 text-sm shadow-lg backdrop-blur-sm">EEG Signal</div>
          <div class="flow-connector h-6 w-px bg-gradient-to-b from-gray-500 to-cyan-500 origin-top"></div>
          <div class="flow-node node-active bg-cyan-900/50 border border-cyan-500/60 px-6 py-3 rounded-lg text-center w-52 text-sm text-cyan-100 shadow-lg">Analyze Focus Level</div>
          <div class="flow-connector h-6 w-px bg-gradient-to-b from-cyan-500 to-purple-500 origin-top"></div>
          <div class="flow-node bg-purple-900/50 border border-purple-500/60 px-6 py-3 rounded-lg text-center w-52 text-sm text-purple-200 shadow-lg">Focus &lt; Threshold?</div>
          
          <div class="flex gap-16 mt-5">
            <div class="flow-branch flex flex-col items-center gap-2">
              <span class="text-xs text-green-400 font-bold">Yes</span>
              <div class="bg-green-900/50 border border-green-500/60 px-4 py-2 rounded-lg text-center text-xs w-32 text-green-200 shadow-lg">Apply Stimulation</div>
            </div>
            <div class="flow-branch flex flex-col items-center gap-2">
              <span class="text-xs text-gray-400 font-bold">No</span>
              <div class="bg-gray-800/80 border border-gray-600 px-4 py-2 rounded-lg text-center text-xs w-32 text-gray-300 shadow-lg">Continue Monitor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
