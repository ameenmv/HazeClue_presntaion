<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // State machine nodes
  gsap.fromTo('.state-node',
    { opacity: 0, scale: 0.7, filter: 'blur(6px)' },
    { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.12, delay: 0.6, ease: "back.out(1.5)" }
  )

  // State connectors
  gsap.fromTo('.state-connector',
    { scaleY: 0, opacity: 0 },
    { scaleY: 1, opacity: 1, duration: 0.3, stagger: 0.08, delay: 1, ease: "power2.out" }
  )

  // WebSocket flow rows
  gsap.fromTo('.ws-row',
    { opacity: 0, x: -30, filter: 'blur(4px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.15, delay: 0.8, ease: "power3.out" }
  )

  // Active state glow
  gsap.to('.state-active', {
    boxShadow: '0 0 25px rgba(0, 255, 127, 0.3)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  // WebSocket highlight
  gsap.to('.ws-highlight', {
    borderColor: 'rgba(255, 200, 0, 0.5)',
    boxShadow: '0 0 15px rgba(255, 200, 0, 0.15)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  // Panels
  gsap.fromTo('.session-panel',
    { opacity: 0, y: 30, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, delay: 0.3, ease: "expo.out" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">11</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Session Lifecycle & WebSockets" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Managing real-time cognitive data streams." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- State Machine -->
      <div class="session-panel flex-1 glass-panel p-8 rounded-2xl flex flex-col items-center justify-center relative breathe-glow-green">
        <h4 class="text-2xl font-bold text-white mb-8">State Machine</h4>
        
        <div class="flex flex-col items-center gap-0">
          <div class="state-node bg-gray-800/80 px-4 py-2 rounded border border-gray-600 text-gray-300 shadow-md">Draft</div>
          <div class="state-connector h-4 w-px bg-gray-500 origin-top"></div>
          
          <div class="state-node state-active bg-green-900/50 px-6 py-2 rounded-lg border border-green-500/60 text-green-300 font-bold shadow-lg">Active</div>
          
          <div class="flex gap-4 items-center h-8">
            <div class="w-16 h-px bg-yellow-500/50"></div>
            <div class="state-node bg-yellow-900/50 px-4 py-1 rounded border border-yellow-500/60 text-yellow-300 text-sm shadow-md">Paused</div>
            <div class="w-16 h-px bg-yellow-500/50"></div>
          </div>
          
          <div class="state-connector h-4 w-px bg-gray-500 origin-top"></div>
          <div class="state-node bg-purple-900/50 px-4 py-2 rounded border border-purple-500/60 text-purple-300 shadow-md">Completed</div>
          <div class="state-connector h-4 w-px bg-gray-500 origin-top"></div>
          <div class="state-node bg-cyan-900/50 px-4 py-2 rounded border border-cyan-500/60 text-cyan-300 shadow-md">Report Ready</div>
        </div>
      </div>

      <!-- WebSocket Flow -->
      <div class="session-panel flex-1 glass-panel p-8 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden breathe-glow-cyan">
        <div class="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
        <h4 class="text-2xl font-bold text-white mb-8 relative z-10">WebSocket Flow</h4>
        
        <div class="w-full relative z-10 space-y-6">
          <div class="ws-row flex justify-between items-center">
            <div class="bg-gray-800/80 p-3 rounded-lg text-sm text-gray-300 w-24 text-center shadow-md">NPG Lite</div>
            <div class="text-xs text-blue-400 font-mono">BLE 5.0 ➡️</div>
            <div class="bg-purple-900/50 border border-purple-500/60 p-3 rounded-lg text-sm text-purple-200 w-24 text-center shadow-md">App</div>
          </div>
          
          <div class="ws-row flex justify-between items-center">
            <div class="bg-purple-900/50 border border-purple-500/60 p-3 rounded-lg text-sm text-purple-200 w-24 text-center shadow-md">App</div>
            <div class="text-xs text-green-400 font-mono">REST POST ➡️</div>
            <div class="bg-cyan-900/50 border border-cyan-500/60 p-3 rounded-lg text-sm text-cyan-200 w-24 text-center shadow-md">NestJS API</div>
          </div>

          <div class="ws-row ws-highlight flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10 transition-all duration-500">
            <div class="bg-cyan-900/50 border border-cyan-500/60 p-3 rounded-lg text-sm text-cyan-200 w-24 text-center shadow-md">NestJS API</div>
            <div class="flex flex-col items-center">
              <span class="text-xs text-yellow-400 font-bold mb-1 font-mono">WebSocket</span>
              <span class="text-[10px] text-gray-400 font-mono">emit attention_update</span>
            </div>
            <div class="bg-blue-900/50 border border-blue-500/60 p-3 rounded-lg text-sm text-blue-200 w-24 text-center shadow-md">Web</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
