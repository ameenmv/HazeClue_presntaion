<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { TOTAL_SLIDES } from './router'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-vue-next'
import ParticleField from './components/ParticleField.vue'

const router = useRouter()
const route = useRoute()
const currentSlide = ref(1)
const isTransitioning = ref(false)
const scale = ref(1)
const direction = ref<1 | -1>(1)

const progressPercent = computed(() => ((currentSlide.value - 1) / (TOTAL_SLIDES - 1)) * 100)

const getSlideNumber = (path: string) => parseInt(path.replace('/', '')) || 1

watch(() => route.path, (newPath) => {
  currentSlide.value = getSlideNumber(newPath)
})

const navigate = (dir: 1 | -1) => {
  if (isTransitioning.value) return
  const nextSlide = currentSlide.value + dir
  
  if (nextSlide >= 1 && nextSlide <= TOTAL_SLIDES) {
    isTransitioning.value = true
    direction.value = dir
    router.push(`/${nextSlide}`)
    setTimeout(() => {
      isTransitioning.value = false
    }, 1200)
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault()
    navigate(1)
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault()
    navigate(-1)
  } else if (e.key === 'f' || e.key === 'F') {
    toggleFullScreen()
  }
}

// Wheel scroll navigation (debounced)
let scrollTimeout: ReturnType<typeof setTimeout> | null = null
const handleWheel = (e: WheelEvent) => {
  if (scrollTimeout || isTransitioning.value) return
  
  if (e.deltaY > 50) {
    navigate(1)
    scrollTimeout = setTimeout(() => { scrollTimeout = null }, 1500)
  } else if (e.deltaY < -50) {
    navigate(-1)
    scrollTimeout = setTimeout(() => { scrollTimeout = null }, 1500)
  }
}

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

const updateScale = () => {
  const targetWidth = 1280
  const targetHeight = 720
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  
  const scaleX = windowWidth / targetWidth
  const scaleY = windowHeight / targetHeight
  
  scale.value = Math.min(scaleX, scaleY) * 0.95
}

onMounted(() => {
  currentSlide.value = getSlideNumber(route.path)
  updateScale()
  window.addEventListener('resize', updateScale)
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('wheel', handleWheel, { passive: true })
  
  // Animate the control bar entrance
  gsap.fromTo('.control-bar', 
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "expo.out" }
  )
  gsap.fromTo('.fullscreen-btn',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, delay: 0.8, ease: "back.out(2)" }
  )
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('wheel', handleWheel)
})

// GSAP Transition Hooks — Cinematic
const onEnter = (el: Element, done: () => void) => {
  const dir = direction.value
  const tl = gsap.timeline({ onComplete: done })
  
  tl.fromTo(el, 
    { 
      opacity: 0, 
      scale: 0.9, 
      x: dir * 80,
      rotateY: dir * 5,
      filter: 'blur(10px) brightness(1.5)'
    },
    { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      rotateY: 0,
      filter: 'blur(0px) brightness(1)',
      duration: 1, 
      ease: "expo.out" 
    }
  )
}

const onLeave = (el: Element, done: () => void) => {
  const dir = direction.value
  gsap.to(el, { 
    opacity: 0, 
    scale: 1.05, 
    x: -dir * 60,
    rotateY: -dir * 3,
    filter: 'blur(8px) brightness(0.7)',
    duration: 0.6, 
    ease: "power3.in", 
    onComplete: done 
  })
}
</script>

<template>
  <div class="h-screen w-screen overflow-hidden bg-[var(--color-dark-bg)] text-[var(--color-text-main)] relative presentation-container">
    
    <!-- Particle Field Background -->
    <ParticleField />

    <!-- Aurora Borealis -->
    <div class="aurora">
      <div class="aurora-blob aurora-blob-1"></div>
      <div class="aurora-blob aurora-blob-2"></div>
      <div class="aurora-blob aurora-blob-3"></div>
    </div>

    <!-- Particle Grid -->
    <div class="particle-grid"></div>

    <!-- Film Grain -->
    <div class="film-grain"></div>

    <!-- Scanlines -->
    <div class="scanlines"></div>

    <!-- Vignette -->
    <div class="vignette"></div>

    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 w-full z-50 h-[2px] bg-white/5">
      <div 
        class="slide-progress-bar"
        :style="{ width: `${progressPercent}%` }"
      ></div>
    </div>

    <!-- Main Content Area -->
    <main class="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
      <div 
        class="relative flex-shrink-0"
        :style="{ width: '1280px', height: '720px', transform: `scale(${scale})`, transformOrigin: 'center center' }"
        style="perspective: 1200px; transform-style: preserve-3d;"
      >
        <router-view v-slot="{ Component }">
          <transition 
            @enter="onEnter" 
            @leave="onLeave" 
            :css="false"
            mode="out-in"
          >
            <component :is="Component" :key="route.path" class="absolute inset-0 w-full h-full" />
          </transition>
        </router-view>
      </div>
    </main>

    <!-- Controls & Progress -->
    <div class="control-bar fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-6 glass-panel px-8 py-3 rounded-full border border-white/5">
      <button 
        @click="navigate(-1)" 
        :disabled="currentSlide === 1" 
        class="nav-btn text-gray-400 hover:text-white disabled:opacity-20 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <ChevronLeft class="w-6 h-6" />
      </button>
      
      <div class="text-sm font-mono tracking-[0.2em] text-gray-300 select-none min-w-[80px] text-center">
        <span class="text-white font-semibold">{{ currentSlide.toString().padStart(2, '0') }}</span>
        <span class="opacity-30 mx-1">/</span>
        <span class="opacity-50">{{ TOTAL_SLIDES.toString().padStart(2, '0') }}</span>
      </div>
      
      <button 
        @click="navigate(1)" 
        :disabled="currentSlide === TOTAL_SLIDES" 
        class="nav-btn text-gray-400 hover:text-white disabled:opacity-20 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>

    <button 
      @click="toggleFullScreen" 
      class="fullscreen-btn fixed bottom-6 right-6 z-50 text-gray-400 hover:text-white glass-panel p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border border-white/5"
    >
      <Maximize class="w-5 h-5" />
    </button>
  </div>
</template>

<style scoped>
.presentation-container {
  perspective: 1200px;
  background: radial-gradient(ellipse at 30% 20%, rgba(138, 43, 226, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(0, 229, 255, 0.03) 0%, transparent 50%),
              var(--color-dark-bg);
}

.nav-btn {
  position: relative;
}

.nav-btn::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.15), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-btn:hover::after {
  opacity: 1;
}
</style>
