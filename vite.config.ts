/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1024,
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**'],
    },
  },
  optimizeDeps: {
    include: ['tailwind-config'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      'tailwind-config': path.resolve(__dirname, './tailwind.config.js'),
    },
  },
  server: {
    open: true,
  },
})
