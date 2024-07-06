import { createMemoryHistory, createRouter } from 'vue-router'
import login from '@/views/LoginView.vue'
import mian from '@/views/MainView.vue'

const routes = [
  { path: '/login', component: login },
  { path: '/', component: mian }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
