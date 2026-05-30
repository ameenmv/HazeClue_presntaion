<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate layers
  gsap.fromTo('.layer-card',
    { opacity: 0, x: -40, scale: 0.9, filter: 'blur(6px)' },
    { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, delay: 0.6, ease: "expo.out" }
  )

  // Animate entity cards
  gsap.fromTo('.entity-card',
    { opacity: 0, y: 25, scale: 0.85, filter: 'blur(4px)' },
    { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.08, delay: 1, ease: "back.out(1.5)" }
  )

  // Chips
  gsap.fromTo('.mb-chip',
    { opacity: 0, scale: 0.7 },
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 1.6, ease: "back.out(2)" }
  )

  // Connecting line between layers
  gsap.fromTo('.layer-connector',
    { scaleY: 0 },
    { scaleY: 1, duration: 0.3, stagger: 0.1, delay: 1.2, ease: "power2.out" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">09</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Mobile Backend — .NET 8" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Clean Architecture implementation." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- Layers -->
      <div class="flex-1 flex flex-col justify-center">
        <h4 class="text-2xl font-bold text-purple-400 mb-6">Three-Layer Architecture:</h4>
        
        <div class="space-y-2">
          <div class="layer-card glass-panel p-5 rounded-lg border-l-4 border-l-purple-600 hover:-translate-y-1 transition-all duration-400 group">
            <strong class="text-white text-lg">Domain Layer</strong> <code class="text-xs bg-black/50 px-2 py-1 rounded ml-2 text-gray-300 font-mono">HazeClue.Core</code>
            <p class="text-sm text-gray-400 mt-2">Entities, contracts, and specifications.</p>
          </div>
          
          <div class="layer-connector h-4 w-px bg-gradient-to-b from-purple-600 to-purple-500 mx-auto origin-top"></div>
          
          <div class="layer-card glass-panel p-5 rounded-lg border-l-4 border-l-purple-500 hover:-translate-y-1 transition-all duration-400 group">
            <strong class="text-white text-lg">Infrastructure Layer</strong> <code class="text-xs bg-black/50 px-2 py-1 rounded ml-2 text-gray-300 font-mono">HazeClue.Infrastructure</code>
            <p class="text-sm text-gray-400 mt-2">EF Core, DbContext, generic repositories, and migrations.</p>
          </div>
          
          <div class="layer-connector h-4 w-px bg-gradient-to-b from-purple-500 to-purple-400 mx-auto origin-top"></div>
          
          <div class="layer-card glass-panel p-5 rounded-lg border-l-4 border-l-purple-400 hover:-translate-y-1 transition-all duration-400 group">
            <strong class="text-white text-lg">Presentation Layer</strong> <code class="text-xs bg-black/50 px-2 py-1 rounded ml-2 text-gray-300 font-mono">HazeClue.UI</code>
            <p class="text-sm text-gray-400 mt-2">API Controllers, DTOs, JWT Authentication.</p>
          </div>
        </div>
      </div>

      <!-- Entities -->
      <div class="flex-1">
        <h4 class="text-2xl font-bold text-white mb-6">Core Entities</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="entity-card bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <h5 class="text-purple-300 font-mono text-sm mb-1 group-hover:text-purple-200 transition-colors">AppUser</h5>
            <p class="text-xs text-gray-400">Identity + profile</p>
          </div>
          <div class="entity-card bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <h5 class="text-purple-300 font-mono text-sm mb-1 group-hover:text-purple-200 transition-colors">Device</h5>
            <p class="text-xs text-gray-400">EEG device registry</p>
          </div>
          <div class="entity-card bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <h5 class="text-purple-300 font-mono text-sm mb-1 group-hover:text-purple-200 transition-colors">FocusSession</h5>
            <p class="text-xs text-gray-400">Session tracking</p>
          </div>
          <div class="entity-card bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <h5 class="text-purple-300 font-mono text-sm mb-1 group-hover:text-purple-200 transition-colors">HealthAssessment</h5>
            <p class="text-xs text-gray-400">Smartwatch health data</p>
          </div>
          <div class="entity-card bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <h5 class="text-purple-300 font-mono text-sm mb-1 group-hover:text-purple-200 transition-colors">TdcsConsent</h5>
            <p class="text-xs text-gray-400">Safety consent tracking</p>
          </div>
          <div class="entity-card bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
            <h5 class="text-purple-300 font-mono text-sm mb-1 group-hover:text-purple-200 transition-colors">AppNotification</h5>
            <p class="text-xs text-gray-400">Push alerts</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <span class="mb-chip chip-purple">ASP.NET Identity + JWT</span>
          <span class="mb-chip chip-purple ml-2">Unit of Work Pattern</span>
        </div>
      </div>
    </div>
  </div>
</template>
