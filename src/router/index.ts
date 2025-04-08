import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/index.vue'

const base = import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHashHistory(base),
  routes: [
    {
      path: '/',
      name: 'return_info',
      component: HomePage,
    },
  ],
})

export default router