import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    watch: {
      // Abaikan file aset gambar yang sering di-lock Windows (OneDrive/antivirus)
      // agar watcher Vite tidak crash dengan error EBUSY.
      ignored: ['**/gambar_asset/**', '**/public/gambar_*.jpeg'],
    },
  },
})
