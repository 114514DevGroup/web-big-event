import { createMemoryHistory, createRouter } from 'vue-router'
import { ref } from 'vue'

const routes = [{}]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
