import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';
const packageJson = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' })
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  base: '/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Hiradumi',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        '@tanstack/react-virtual',
        ...Object.keys(packageJson.peerDependencies || {}),
      ],
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
  },
})
