import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['iife'], // ブラウザ向け (IIFE形式)
      name: 'Hiradumi',
      fileName: () => 'hiradumi.bundle.js',
    },
    rollupOptions: {
      external: [], // Reactなどもバンドルする（ここを空にする）
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
  },
})
