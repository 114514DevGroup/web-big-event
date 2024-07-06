import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    { path: '/login', component: LoginView },
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
