import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/custom-path/unknown': {
        target: 'https://dummyapi.online',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/custom-path\/unknown/, '/api/movies'),
      },
    },
  }
})
