import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",   // ✅ ensures correct asset paths on Netlify
  server: {
    host: true,  // listen on all network interfaces
    port: 5173,  // optional (dev only)
  },
})
