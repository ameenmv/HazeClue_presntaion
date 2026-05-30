<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Safety list items
  gsap.fromTo('.safety-item',
    { opacity: 0, x: -20, filter: 'blur(3px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.06, delay: 0.6, ease: "power3.out" }
  )

  // Privacy list items
  gsap.fromTo('.privacy-item',
    { opacity: 0, x: -20, filter: 'blur(3px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.06, delay: 1, ease: "power3.out" }
  )

  // Table rows
  gsap.fromTo('.principle-row',
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, delay: 0.8, ease: "power3.out" }
  )

  // Panel
  gsap.fromTo('.safety-panel',
    { opacity: 0, y: 30, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.5, ease: "expo.out" }
  )

  // Checkmark pulse
  gsap.to('.check-mark', {
    color: '#4ade80',
    textShadow: '0 0 10px rgba(74, 222, 128, 0.5)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: 0.1,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <div class="slide-number-ghost">19</div>
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-center text-center">
      <CinematicText text="Safety & Privacy" tag="h2" class="text-5xl font-bold text-white mb-2" :delay="0.1" :glow="true" />
      <CinematicText text="Ethics and security at the core." class="text-xl text-[var(--color-text-muted)]" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="flex gap-12 w-full max-w-6xl">
      <!-- Lists -->
      <div class="flex-1 flex flex-col gap-8">
        <div>
          <h4 class="text-2xl font-bold text-green-400 mb-4">tDCS Safety Protocols:</h4>
          <ul class="space-y-2 text-gray-300">
            <li class="safety-item flex items-center gap-2"><span class="check-mark">✔</span> Max session: 20–30 minutes</li>
            <li class="safety-item flex items-center gap-2"><span class="check-mark">✔</span> Current: 0.5–2 mA only</li>
            <li class="safety-item flex items-center gap-2"><span class="check-mark">✔</span> No use for epilepsy patients</li>
            <li class="safety-item flex items-center gap-2"><span class="check-mark">✔</span> Electrodes properly moistened</li>
            <li class="safety-item flex items-center gap-2"><span class="check-mark">✔</span> Immediate stop on discomfort</li>
            <li class="safety-item flex items-center gap-2"><span class="check-mark">✔</span> Parental control for minors</li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-2xl font-bold text-cyan-400 mb-4">Data Privacy:</h4>
          <ul class="space-y-2 text-gray-300">
            <li class="privacy-item flex items-center gap-2"><span class="check-mark">✔</span> All data encrypted at rest & transit</li>
            <li class="privacy-item flex items-center gap-2"><span class="check-mark">✔</span> Anonymized for research use</li>
            <li class="privacy-item flex items-center gap-2"><span class="check-mark">✔</span> User consent before any stimulation</li>
            <li class="privacy-item flex items-center gap-2"><span class="check-mark">✔</span> Full data export/delete rights</li>
            <li class="privacy-item flex items-center gap-2"><span class="check-mark">✔</span> No medical diagnosis claims</li>
          </ul>
        </div>
      </div>

      <!-- Principles Table -->
      <div class="safety-panel flex-1 glass-panel p-8 rounded-2xl relative border border-green-500/20 breathe-glow-green">
        <h4 class="text-2xl font-bold text-white mb-6 text-center">Safety Principles</h4>
        
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-gray-700">
              <th class="py-3 text-gray-400 font-medium">Principle</th>
              <th class="py-3 text-gray-400 font-medium">Implementation</th>
            </tr>
          </thead>
          <tbody class="text-gray-300 text-sm">
            <tr class="principle-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold text-white">Consent</td>
              <td class="py-3 text-[var(--color-text-muted)]">Required before tDCS</td>
            </tr>
            <tr class="principle-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold text-white">Monitoring</td>
              <td class="py-3 text-[var(--color-text-muted)]">Closed-loop EEG</td>
            </tr>
            <tr class="principle-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold text-white">Limits</td>
              <td class="py-3 text-[var(--color-text-muted)]">Hardware cutoffs</td>
            </tr>
            <tr class="principle-row border-b border-gray-800/50 hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold text-white">Privacy</td>
              <td class="py-3 text-[var(--color-text-muted)]">E2E encryption</td>
            </tr>
            <tr class="principle-row hover:bg-white/5 transition-colors duration-300">
              <td class="py-3 font-semibold text-white">Ethics</td>
              <td class="py-3 text-[var(--color-text-muted)]">IRB guidelines</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
