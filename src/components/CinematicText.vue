<script setup lang="ts">
import { ref, onMounted, computed, useAttrs } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'div' },
  delay: { type: Number, default: 0 },
  stagger: { type: Number, default: 0.04 },
  glow: { type: Boolean, default: false },
})

const container = ref<HTMLElement | null>(null)
const attrs = useAttrs()

const isGradient = computed(() => {
  const cls = attrs.class || ''
  return typeof cls === 'string' && cls.includes('gradient-text')
})

// Split text into words with chars inside for better wrapping
const words = computed(() => {
  return props.text.split(' ').map(word => ({
    chars: word.split(''),
    word
  }))
})

onMounted(() => {
  if (!container.value) return
  const el = container.value

  if (isGradient.value) {
    // For gradient-text: DON'T touch individual chars at all.
    // background-clip: text REQUIRES the text to be direct text content,
    // not broken into spans. So we animate the whole element.
    gsap.fromTo(el,
      {
        opacity: 0,
        y: 40,
        scale: 0.92,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        delay: props.delay,
        ease: "expo.out",
      }
    )
  } else {
    // For normal text: full cinematic per-char animation
    const chars = el.querySelectorAll('.char')

    const tl = gsap.timeline({ delay: props.delay })

    tl.fromTo(chars,
      {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)',
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.7,
        stagger: props.stagger,
        ease: "back.out(1.5)",
      }
    )

    // Optional: subtle glow sweep after reveal
    if (props.glow) {
      tl.fromTo(chars,
        { textShadow: '0 0 0px transparent' },
        {
          textShadow: '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(138, 43, 226, 0.3)',
          duration: 0.3,
          stagger: props.stagger * 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        },
        `-=${chars.length * props.stagger * 0.3}`
      )
    }
  }
})
</script>

<template>
  <!--
    For gradient-text: render as plain text (no char spans).
    background-clip:text needs the text to be direct content, not in child spans.
    For normal text: split into char spans for per-character animation.
  -->
  <component :is="tag" ref="container" class="cinematic-text" v-bind="$attrs" v-if="isGradient">
    {{ text }}
  </component>
  <component :is="tag" ref="container" class="cinematic-text" v-bind="$attrs" v-else>
    <span
      v-for="(word, wIndex) in words"
      :key="wIndex"
      class="inline-block whitespace-nowrap"
    >
      <span
        v-for="(char, cIndex) in word.chars"
        :key="`${wIndex}-${cIndex}`"
        class="char inline-block"
      >{{ char }}</span>
      <span v-if="wIndex < words.length - 1" class="inline-block w-[0.3em]">&nbsp;</span>
    </span>
  </component>
</template>

<style scoped>
.cinematic-text {
  will-change: transform, opacity;
}

.char {
  will-change: transform, opacity;
  display: inline-block;
}
</style>
