import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Nvc.in/', // Update this to match your GitHub repo name
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
