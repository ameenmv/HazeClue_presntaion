<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  title: String,
  description: String,
  icon: String,
  color: { type: String, default: 'purple' },
  delay: { type: Number, default: 0 }
})

const cardRef = ref<HTMLElement | null>(null)
const glowRef = ref<HTMLElement | null>(null)

const colorMap: Record<string, { bg: string, border: string, glow: string, text: string }> = {
  purple: { bg: 'rgba(138, 43, 226, 0.08)', border: 'rgba(138, 43, 226, 0.3)', glow: 'rgba(138, 43, 226, 0.4)', text: '#c084fc' },
  cyan: { bg: 'rgba(0, 229, 255, 0.08)', border: 'rgba(0, 229, 255, 0.3)', glow: 'rgba(0, 229, 255, 0.4)', text: '#67e8f9' },
  green: { bg: 'rgba(0, 255, 127, 0.08)', border: 'rgba(0, 255, 127, 0.3)', glow: 'rgba(0, 255, 127, 0.4)', text: '#6ee7b7' },
  magenta: { bg: 'rgba(255, 0, 110, 0.08)', border: 'rgba(255, 0, 110, 0.3)', glow: 'rgba(255, 0, 110, 0.4)', text: '#fb7185' },
  gold: { bg: 'rgba(255, 200, 0, 0.08)', border: 'rgba(255, 200, 0, 0.3)', glow: 'rgba(255, 200, 0, 0.4)', text: '#fbbf24' }
}

const colors = computed(() => colorMap[props.color] || colorMap.purple)

onMounted(() => {
  if (!cardRef.value) return
  
  const tl = gsap.timeline({ delay: props.delay })
  
  // Card entrance with dramatic depth
  tl.fromTo(cardRef.value,
    { 
      opacity: 0, 
      y: 50, 
      scale: 0.85, 
      rotateX: 15,
      filter: 'blur(8px)'
    },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      filter: 'blur(0px)',
      duration: 1, 
      ease: "expo.out"
    }
  )
  
  // Glow reveal
  if (glowRef.value) {
    tl.fromTo(glowRef.value,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
      '-=0.6'
    )
  }

  // Hover 3D tilt effect
  const card = cardRef.value
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { 
      scale: 1.03, 
      duration: 0.4, 
      ease: "power2.out",
      boxShadow: `0 20px 60px ${colors.value.glow}40, 0 0 30px ${colors.value.glow}20`
    })
  })
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0, 
      duration: 0.6, 
      ease: "power2.out",
      boxShadow: `0 8px 32px rgba(0,0,0,0.5)`
    })
  })
  card.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.3,
      ease: "power2.out"
    })
  })
})
</script>

<template>
  <div 
    ref="cardRef" 
    class="glow-card glass-panel rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
    style="perspective: 800px; transform-style: preserve-3d;"
  >
    <!-- Ambient glow background -->
    <div 
      ref="glowRef"
      class="absolute -inset-full pointer-events-none transition-opacity duration-700 rounded-full"
      :style="{
        background: `radial-gradient(circle, ${colors.glow}15, transparent 70%)`,
        filter: 'blur(40px)'
      }"
    ></div>

    <!-- Animated border accent -->
    <div 
      class="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :style="{ background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)` }"
    ></div>

    <div ref="innerRef" class="relative z-10 flex flex-col gap-3">
      <div 
        v-if="icon" 
        class="text-3xl font-light opacity-90 font-mono tracking-tighter"
        :style="{ color: colors.text }"
      >
        {{ icon }}
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white tracking-wide mb-1">{{ title }}</h3>
        <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{{ description }}</p>
      </div>
    </div>

    <!-- Bottom corner accent dot -->
    <div 
      class="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full opacity-40"
      :style="{ background: colors.text, boxShadow: `0 0 8px ${colors.glow}` }"
    ></div>
  </div>
</template>

<style scoped>
.glow-card {
  will-change: transform, box-shadow;
  transition: border-color 0.5s ease;
}
</style>
