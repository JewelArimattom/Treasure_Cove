import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          react: ['react', 'react-dom'],
          three: ['three'],
          vendor: ['@react-three/fiber', '@react-three/drei', 'postprocessing']
        }
      },
      // Optional: increase warning threshold
      // output: { chunkSizeWarningLimit: 1200 }
    }
  }
})
