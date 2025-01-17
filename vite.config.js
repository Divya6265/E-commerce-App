import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpeg',],
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
