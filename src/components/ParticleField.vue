<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animationId: number
let particles: Array<{
  x: number; y: number; vx: number; vy: number;
  size: number; opacity: number; hue: number;
}> = []

const PARTICLE_COUNT = 60

onMounted(() => {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d')
  if (!ctx) return

  const resize = () => {
    c.width = window.innerWidth
    c.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // Initialize particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.5 ? 270 : 190 // purple or cyan
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, c.width, c.height)

    particles.forEach((p, i) => {
      p.x += p.vx
      p.y += p.vy

      // Wrap around edges
      if (p.x < 0) p.x = c.width
      if (p.x > c.width) p.x = 0
      if (p.y < 0) p.y = c.height
      if (p.y > c.height) p.y = 0

      // Draw particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${p.opacity})`
      ctx.fill()

      // Draw connections to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j]
        const dx = p.x - other.x
        const dy = p.y - other.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(other.x, other.y)
          const lineOpacity = (1 - dist / 150) * 0.08
          ctx.strokeStyle = `hsla(${(p.hue + other.hue) / 2}, 60%, 50%, ${lineOpacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <canvas 
    ref="canvas" 
    class="fixed inset-0 z-0 pointer-events-none"
    style="opacity: 0.6;"
  />
</template>
