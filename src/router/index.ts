import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/1' },
  { path: '/1', component: () => import('../slides/Slide01_Cover.vue') },
  { path: '/2', component: () => import('../slides/Slide02_TOC.vue') },
  { path: '/3', component: () => import('../slides/Slide03_WhatIsHazeClue.vue') },
  { path: '/4', component: () => import('../slides/Slide04_Problem.vue') },
  { path: '/5', component: () => import('../slides/Slide05_Solution.vue') },
  { path: '/6', component: () => import('../slides/Slide06_NeuroAnalysis.vue') },
  { path: '/7', component: () => import('../slides/Slide07_SmartTDCS.vue') },
  { path: '/8', component: () => import('../slides/Slide08_Arch.vue') },
  { path: '/9', component: () => import('../slides/Slide09_MobileBackend.vue') },
  { path: '/10', component: () => import('../slides/Slide10_WebBackend.vue') },
  { path: '/11', component: () => import('../slides/Slide11_SessionFlow.vue') },
  { path: '/12', component: () => import('../slides/Slide12_TechStack.vue') },
  { path: '/13', component: () => import('../slides/Slide13_Database.vue') },
  { path: '/14', component: () => import('../slides/Slide14_UIMobile.vue') },
  { path: '/15', component: () => import('../slides/Slide15_UIWeb.vue') },
  { path: '/16', component: () => import('../slides/Slide16_AuthSecurity.vue') },
  { path: '/17', component: () => import('../slides/Slide17_Hardware.vue') },
  { path: '/18', component: () => import('../slides/Slide18_Innovation.vue') },
  { path: '/19', component: () => import('../slides/Slide19_SafetyPrivacy.vue') },
  { path: '/20', component: () => import('../slides/Slide20_TargetOutcomes.vue') },
  { path: '/21', component: () => import('../slides/Slide21_Conclusion.vue') },
  { path: '/:catchAll(.*)', redirect: '/1' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
export const TOTAL_SLIDES = 21
