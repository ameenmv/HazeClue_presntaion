<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Panels entrance
  gsap.fromTo('.db-panel',
    { opacity: 0, y: 40, scale: 0.9, filter: 'blur(8px)' },
    { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1, stagger: 0.2, delay: 0.5, ease: "expo.out" }
  )

  // Table rows
  gsap.fromTo('.db-row',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, delay: 1, ease: "power3.out" }
  )

  // Chips
  gsap.fromTo('.db-chip',
    { opacity: 0, scale: 0.7 },
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 1.5, ease: "back.out(2)" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">13</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Database Design" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Dual-strategy for distinct data requirements." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-8 w-full max-w-5xl">
      <!-- SQL Server -->
      <div class="db-panel flex-1 glass-panel p-8 rounded-2xl relative overflow-hidden group breathe-glow-purple">
        <div class="absolute -inset-full opacity-10 bg-purple-600 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
        <div class="relative z-10">
          <h4 class="text-3xl font-bold text-white mb-6 text-center">SQL Server</h4>
          
          <table class="w-full text-left border-collapse mb-6">
            <tbody class="text-gray-300">
              <tr class="db-row border-b border-gray-700/50">
                <td class="py-3 font-semibold text-purple-300">Model</td>
                <td class="py-3">Relational + FK</td>
              </tr>
              <tr class="db-row border-b border-gray-700/50">
                <td class="py-3 font-semibold text-purple-300">ORM</td>
                <td class="py-3">Entity Framework Core</td>
              </tr>
              <tr class="db-row border-b border-gray-700/50">
                <td class="py-3 font-semibold text-purple-300">Schema</td>
                <td class="py-3">Migration-based</td>
              </tr>
              <tr class="db-row">
                <td class="py-3 font-semibold text-purple-300">Pattern</td>
                <td class="py-3">Unit of Work</td>
              </tr>
            </tbody>
          </table>
          
          <div class="text-center">
            <span class="db-chip chip-purple">Strict ACID Compliance</span>
          </div>
        </div>
      </div>

      <!-- MongoDB -->
      <div class="db-panel flex-1 glass-panel p-8 rounded-2xl relative overflow-hidden group breathe-glow-cyan">
        <div class="absolute -inset-full opacity-10 bg-cyan-600 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
        <div class="relative z-10">
          <h4 class="text-3xl font-bold text-white mb-6 text-center">MongoDB Atlas</h4>
          
          <table class="w-full text-left border-collapse mb-6">
            <tbody class="text-gray-300">
              <tr class="db-row border-b border-gray-700/50">
                <td class="py-3 font-semibold text-cyan-300">Model</td>
                <td class="py-3">Document + ObjectId</td>
              </tr>
              <tr class="db-row border-b border-gray-700/50">
                <td class="py-3 font-semibold text-cyan-300">ODM</td>
                <td class="py-3">Mongoose</td>
              </tr>
              <tr class="db-row border-b border-gray-700/50">
                <td class="py-3 font-semibold text-cyan-300">Schema</td>
                <td class="py-3">Decorator-based</td>
              </tr>
              <tr class="db-row">
                <td class="py-3 font-semibold text-cyan-300">Pattern</td>
                <td class="py-3">Modular Services</td>
              </tr>
            </tbody>
          </table>
          
          <div class="text-center">
            <span class="db-chip chip-cyan">Flexible High-Volume Schema</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
