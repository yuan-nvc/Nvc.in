import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nvc-web/',  // Updated to match repository name
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utilities: ['@heroicons/react', '@iconify/react']
        }
      }
    }
  }
})
