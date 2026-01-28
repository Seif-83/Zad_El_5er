import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_Base_path || "/Zad_El_5er",
  plugins: [react()],
})
