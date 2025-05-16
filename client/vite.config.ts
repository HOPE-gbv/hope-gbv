import { defineConfig, type PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss() as PluginOption ,react() as PluginOption],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true, // important for dev
  }
})
