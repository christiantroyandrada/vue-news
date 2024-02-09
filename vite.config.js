import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      'store': fileURLToPath(new URL('./src/store', import.meta.url)),
      'views': fileURLToPath(new URL('./src/store', import.meta.url)),
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'router': fileURLToPath(new URL('./src/router', import.meta.url)),
      'App': fileURLToPath(new URL('./src/App.vue', import.meta.url)),
    }
  }
})
