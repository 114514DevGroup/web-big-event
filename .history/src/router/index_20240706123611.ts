import { createMemoryHistory, createRouter } from 'vue-router'

// Define your routes here
// Example:
// {
//   path: '/home',
//   name: 'Home',
//   component: () => import('@/views/Home.vue')
// }

import Home from '@/views/LoginView.vue'

const routes = [{}]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
