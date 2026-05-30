<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  // Animate list items stagger
  gsap.fromTo('.what-item',
    { opacity: 0, x: -30, filter: 'blur(6px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.12, delay: 0.8, ease: "power3.out" }
  )

  // Animate the content panel
  gsap.fromTo('.content-panel',
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.5, ease: "expo.out" }
  )

  // Animate chips
  gsap.fromTo('.what-chip',
    { opacity: 0, scale: 0.7, y: 10 },
    { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 1.8, ease: "back.out(2)" }
  )

  // Animate the glow
  gsap.fromTo('.panel-glow',
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 2, delay: 0.5, ease: "power2.out" }
  )

  // Bullet dots pulse
  gsap.to('.bullet-dot', {
    boxShadow: (i: number) => {
      const colors = ['rgba(138,43,226,0.6)', 'rgba(0,229,255,0.6)', 'rgba(0,255,127,0.6)', 'rgba(255,0,110,0.6)', 'rgba(255,200,0,0.6)']
      return `0 0 15px ${colors[i % colors.length]}`
    },
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    ease: "sine.inOut"
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12 relative">
    <!-- Slide number ghost -->
    <div class="slide-number-ghost">03</div>

    <!-- Edge glow -->
    <div class="edge-glow-top"></div>

    <!-- Header -->
    <div class="w-full max-w-5xl mb-10 text-center">
      <CinematicText text="What is HazeClue?" tag="h2" class="text-6xl font-bold text-white mb-6 gradient-text" :delay="0.2" :glow="true" />
    </div>

    <!-- Content -->
    <div class="content-panel w-full max-w-4xl text-left glass-panel p-10 rounded-2xl border border-gray-700/30 relative overflow-hidden">
      <!-- Glow effect -->
      <div class="panel-glow absolute -top-32 -right-32 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="panel-glow absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <p class="what-item text-xl text-gray-200 leading-relaxed mb-8 font-light">
        An <strong class="text-white font-semibold">AI-powered Brain-Computer Interface</strong> platform that enhances mental performance through:
      </p>

      <ul class="space-y-5 text-lg text-[var(--color-text-muted)] list-none">
        <li class="what-item flex items-center gap-4 group">
          <div class="bullet-dot w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_purple] flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
          <span><strong class="text-white">Real-time EEG analysis</strong> via NPG Lite device (3-channel brainwave reading)</span>
        </li>
        <li class="what-item flex items-center gap-4 group">
          <div class="bullet-dot w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan] flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
          <span><strong class="text-white">Optional smart tDCS stimulation</strong> with closed-loop safety control</span>
        </li>
        <li class="what-item flex items-center gap-4 group">
          <div class="bullet-dot w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_green] flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
          <span><strong class="text-white">Smartwatch integration</strong> for holistic health monitoring (sleep, HRV, activity)</span>
        </li>
        <li class="what-item flex items-center gap-4 group">
          <div class="bullet-dot w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_magenta] flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
          <span><strong class="text-white">AI personalization engine</strong> that learns and predicts focus patterns</span>
        </li>
        <li class="what-item flex items-center gap-4 group">
          <div class="bullet-dot w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow] flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
          <span><strong class="text-white">Web platform</strong> for scientific evaluation of educational content</span>
        </li>
      </ul>

      <div class="flex gap-4 mt-10 border-t border-gray-700/30 pt-6">
        <span class="what-chip chip-purple cinematic-glow">Mobile App</span>
        <span class="what-chip chip-cyan cinematic-glow">Web Platform</span>
        <span class="what-chip chip-green cinematic-glow">Dual Backend</span>
      </div>
    </div>
  </div>
</template>
