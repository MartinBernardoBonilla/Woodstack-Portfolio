import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración básica para deploy en Vercel
export default defineConfig({
  plugins: [react()],
  base: '/',
})
