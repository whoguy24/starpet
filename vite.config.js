import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_NAME': JSON.stringify(pkg.name),
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version),
    'import.meta.env.VITE_APP_DESCRIPTION': JSON.stringify(pkg.description),
    'import.meta.env.VITE_APP_AUTHOR_NAME': JSON.stringify(pkg.author_name),
    'import.meta.env.VITE_APP_AUTHOR_EMAIL': JSON.stringify(pkg.author_email)
  },
})
