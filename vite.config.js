import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@xenova/transformers']
    }
  },
  plugins: [
    tailwindcss(), react()
  ],
})






/* export default defineConfig({
  plugins: [
    tailwindcss(), react()
  ],
}) */