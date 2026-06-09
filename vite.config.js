import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Estructura plana: el código vive en la raíz, sin carpeta src/
export default defineConfig({
  plugins: [react()],
})
