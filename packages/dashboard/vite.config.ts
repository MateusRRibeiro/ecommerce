import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@web': path.resolve(__dirname, './src/web/src'),
      '@mobile': path.resolve(__dirname, './src/mobile/src')
    }
  }
})