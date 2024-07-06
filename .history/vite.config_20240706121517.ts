import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Project': fileURLToPath(new URL('./src/project', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        project1: fileURLToPath(
          new URL('./src/project/page1/index.html', import.meta.url)
        ),
        project2: fileURLToPath(
          new URL('./src/project/page2/index.html', import.meta.url)
        )
      }
    }
  }
})
