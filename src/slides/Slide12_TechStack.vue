<script setup lang="ts">
import CinematicText from '../components/CinematicText.vue'
import GlowCard from '../components/GlowCard.vue'

const techStacks = [
  { title: 'Frontend', description: 'Flutter (Mobile), Nuxt 4 & Vue 3 (Web), TailwindCSS v4', color: 'cyan' },
  { title: 'Backend', description: '.NET 8 Web API, NestJS 11, Node.js', color: 'purple' },
  { title: 'Database', description: 'SQL Server (EF Core), MongoDB Atlas (Mongoose)', color: 'green' },
  { title: 'Real-time & Security', description: 'Socket.IO, JWT, OAuth (Google/FB), BLE (Bluetooth)', color: 'gold' }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full p-12">
    <!-- Header -->
    <div class="w-full max-w-6xl mb-12 flex flex-col items-start">
      <div class="flex items-center gap-6 mb-4">
        <CinematicText text="04" class="text-7xl font-light text-gray-700 opacity-50" :delay="0.1" />
        <div class="w-20 h-1 bg-gradient-to-r from-[var(--color-accent-purple)] to-transparent"></div>
      </div>
      <CinematicText text="Tech Stack" tag="h2" class="text-5xl font-bold text-white" :delay="0.3" />
    </div>

    <!-- Content -->
    <div class="grid grid-cols-2 gap-8 w-full max-w-6xl">
      <GlowCard 
        v-for="(item, index) in techStacks" 
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :color="item.color"
        :delay="0.6 + (index * 0.2)"
        class="h-32 flex justify-center"
      />
    </div>
  </div>
</template>
