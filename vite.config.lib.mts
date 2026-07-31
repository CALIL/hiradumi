import { defineConfig } from 'vite'

// npm run compile — 配布用ライブラリ(lib/)のビルド
// react / react-domはバンドルせず、利用者側のものを使う
export default defineConfig({
  build: {
    lib: {
      entry: 'src/Hiradumi.tsx',
      formats: ['cjs', 'es'],
      fileName: (format) => (format === 'cjs' ? 'index.js' : 'index.mjs'),
    },
    outDir: 'lib',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // webpack(libraryTarget: commonjs2)と同じ形を保つ
        // 'auto'だとmodule.exports=Componentになり、require('hiradumi').defaultが壊れる
        exports: 'named',
      },
    },
  },
})
