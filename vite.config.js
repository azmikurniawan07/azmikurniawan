import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  base: '/azmikurniawan/', // Sesuaikan dengan URL repository GitHub Pages Anda
  
})
