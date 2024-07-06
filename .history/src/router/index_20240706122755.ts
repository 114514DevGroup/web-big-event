import { createMemoryHistory, createRouter } from 'vue-router'
import Login from '../views/LoginView.vue'

const routes = [
  {
    {path: '/login', component: Login},
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
