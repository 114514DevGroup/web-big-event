import { createMemoryHistory, createRouter } from 'vue-router'
import login from '@/views/LoginView.vue'

const routes = [{ path: '/login', component: login }]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
