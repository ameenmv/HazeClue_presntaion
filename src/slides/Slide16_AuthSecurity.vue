<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Table rows
  gsap.fromTo('.auth-row',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, delay: 0.7, ease: "power3.out" }
  )

  // Auth flow steps
  gsap.fromTo('.auth-step',
    { opacity: 0, y: 15, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12, delay: 0.9, ease: "power3.out" }
  )

  // Panels
  gsap.fromTo('.auth-panel',
    { opacity: 0, y: 30, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, delay: 0.4, ease: "expo.out" }
  )
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">16</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Authentication & Security" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Securing user data across the dual ecosystem." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-5xl">
      <!-- Auth Table -->
      <div class="auth-panel flex-1 glass-panel p-8 rounded-2xl relative breathe-glow-purple">
        <h4 class="text-2xl font-bold text-white mb-6">Dual Authentication</h4>
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-gray-700">
              <th class="py-3 text-gray-400 font-medium">Feature</th>
              <th class="py-3 text-purple-400 font-medium">Mobile (.NET)</th>
              <th class="py-3 text-cyan-400 font-medium">Web (NestJS)</th>
            </tr>
          </thead>
          <tbody class="text-gray-300">
            <tr class="auth-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold">Hashing</td>
              <td class="py-3">PBKDF2</td>
              <td class="py-3">bcrypt</td>
            </tr>
            <tr class="auth-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold">Token</td>
              <td class="py-3">HMAC-SHA256</td>
              <td class="py-3">HMAC-SHA256</td>
            </tr>
            <tr class="auth-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold">OAuth</td>
              <td class="py-3 text-gray-500">—</td>
              <td class="py-3">Google + FB</td>
            </tr>
            <tr class="auth-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold">Reset</td>
              <td class="py-3 text-gray-500">—</td>
              <td class="py-3">OTP-based</td>
            </tr>
            <tr class="auth-row hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold">CORS</td>
              <td class="py-3 text-yellow-500">AllowAll (Dev)</td>
              <td class="py-3 text-green-500">Whitelist</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Auth Flow Diagram -->
      <div class="auth-panel flex-1 glass-panel p-8 rounded-2xl relative flex flex-col justify-center">
        <h4 class="text-xl font-bold text-white mb-6 text-center">Standard Flow</h4>
        
        <div class="space-y-4">
          <div class="auth-step flex justify-between items-center bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <span class="text-sm text-gray-400">Client → API</span>
            <span class="text-xs text-white bg-blue-600/80 px-2 py-1 rounded font-mono">POST /login</span>
          </div>
          <div class="auth-step flex justify-between items-center bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
            <span class="text-sm text-gray-400">API Internal</span>
            <span class="text-xs text-purple-300 font-mono">Verify + Hash Check</span>
          </div>
          <div class="auth-step flex justify-between items-center bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <span class="text-sm text-gray-400">API → Client</span>
            <span class="text-xs text-green-400 font-mono">{ token, user }</span>
          </div>
          <div class="auth-step flex justify-between items-center bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <span class="text-sm text-gray-400">Client → API</span>
            <span class="text-xs text-white bg-green-700/80 px-2 py-1 rounded font-mono">GET + Bearer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
