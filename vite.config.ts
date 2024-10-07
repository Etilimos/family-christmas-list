import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/family-christmas-list/', // This line is important for GitHub Pages
})
