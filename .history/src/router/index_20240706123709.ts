import { createMemoryHistory, createRouter } from 'vue-router'

// Define your routes here
// Example:
// {
//   path: '/home',
//   name: 'Home',
//   component: () => import('@/views/Home.vue')
// }

import login from '@/views/LoginView.vue'

const routes = [{ path: '/login', component: login }]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
