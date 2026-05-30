<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Module cards stagger
  gsap.fromTo('.module-card',
    { opacity: 0, y: 20, scale: 0.9, filter: 'blur(4px)' },
    { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.08, delay: 0.6, ease: "back.out(1.5)" }
  )

  // Module tree
  gsap.fromTo('.tree-root',
    { opacity: 0, scale: 0.8, y: -15 },
    { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.8, ease: "back.out(2)" }
  )

  gsap.fromTo('.tree-leaf',
    { opacity: 0, scale: 0.7, y: 15 },
    { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.2, ease: "back.out(1.5)" }
  )

  // Diagram panel
  gsap.fromTo('.diagram-panel',
    { opacity: 0, x: 40, scale: 0.95 },
    { opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.4, ease: "expo.out" }
  )

  // Socket.IO highlight glow
  gsap.to('.socket-highlight', {
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
    <div class="slide-number-ghost">10</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Web Backend — NestJS" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Modular Architecture for high-volume data." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- Description -->
      <div class="flex-1">
        <h4 class="text-2xl font-bold text-cyan-400 mb-6">Feature Modules:</h4>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="module-card glass-panel p-4 rounded-lg hover:-translate-y-1 transition-all duration-300 group">
            <h5 class="text-white font-bold mb-1 group-hover:text-cyan-200 transition-colors">AuthModule</h5>
            <p class="text-xs text-gray-400">JWT + Google/Facebook OAuth</p>
          </div>
          <div class="module-card glass-panel p-4 rounded-lg hover:-translate-y-1 transition-all duration-300 group">
            <h5 class="text-white font-bold mb-1 group-hover:text-cyan-200 transition-colors">UsersModule</h5>
            <p class="text-xs text-gray-400">Profile CRUD, avatar management</p>
          </div>
          <div class="module-card glass-panel p-4 rounded-lg hover:-translate-y-1 transition-all duration-300 group">
            <h5 class="text-white font-bold mb-1 group-hover:text-cyan-200 transition-colors">SessionsModule</h5>
            <p class="text-xs text-gray-400">Full lifecycle management</p>
          </div>
          <div class="module-card glass-panel p-4 rounded-lg hover:-translate-y-1 transition-all duration-300 group">
            <h5 class="text-white font-bold mb-1 group-hover:text-cyan-200 transition-colors">DevicesModule</h5>
            <p class="text-xs text-gray-400">EEG device registry</p>
          </div>
          <div class="module-card glass-panel p-4 rounded-lg hover:-translate-y-1 transition-all duration-300 group">
            <h5 class="text-white font-bold mb-1 group-hover:text-cyan-200 transition-colors">ReportsModule</h5>
            <p class="text-xs text-gray-400">PDF analytics generation</p>
          </div>
          <div class="module-card socket-highlight glass-panel p-4 rounded-lg border-l-2 border-cyan-500 hover:-translate-y-1 transition-all duration-300 group">
            <h5 class="text-white font-bold mb-1 group-hover:text-cyan-200 transition-colors">GatewayModule</h5>
            <p class="text-xs text-gray-400">WebSocket EEG broadcast</p>
          </div>
        </div>
      </div>

      <!-- Diagram -->
      <div class="diagram-panel flex-1 glass-panel p-8 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden breathe-glow-cyan">
        <div class="absolute inset-0 bg-cyan-900/5 pointer-events-none"></div>
        <h4 class="text-xl font-bold text-white mb-6 relative z-10">Module Tree</h4>
        
        <div class="relative z-10 flex flex-col items-center w-full">
          <div class="tree-root bg-blue-900/50 border border-blue-500/60 px-6 py-2 rounded-lg text-white font-bold w-48 text-center mb-6 shadow-lg">AppModule</div>
          
          <div class="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
            <div class="tree-leaf bg-gray-800/80 border border-gray-600 px-4 py-2 rounded text-center text-sm text-gray-300 hover:border-cyan-500/40 transition-all duration-300">AuthModule</div>
            <div class="tree-leaf bg-gray-800/80 border border-gray-600 px-4 py-2 rounded text-center text-sm text-gray-300 hover:border-cyan-500/40 transition-all duration-300">UsersModule</div>
            <div class="tree-leaf bg-gray-800/80 border border-gray-600 px-4 py-2 rounded text-center text-sm text-gray-300 hover:border-cyan-500/40 transition-all duration-300">SessionsModule</div>
            <div class="tree-leaf bg-gray-800/80 border border-gray-600 px-4 py-2 rounded text-center text-sm text-gray-300 hover:border-cyan-500/40 transition-all duration-300">DevicesModule</div>
            <div class="tree-leaf bg-cyan-900/50 border border-cyan-500/60 px-4 py-2 rounded text-center text-sm text-cyan-200 col-span-2 shadow-lg">GatewayModule (Socket.IO)</div>
          </div>
        </div>

        <div class="mt-8 relative z-10 text-center">
          <span class="chip-cyan">NestJS 11 + MongoDB</span>
        </div>
      </div>
    </div>
  </div>
</template>
