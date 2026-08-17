import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/',
  resolve: {
    // hiradumi は file:.. のリンクなので、その中の react は
    // リポジトリルートの node_modules から解決されうる。
    // ルートには react-window の peer として React 18 が入るため、
    // 明示的に example 側の React へ寄せて二重読み込みを防ぐ。
    dedupe: ['react', 'react-dom']
  },
  server: {
    port: 5000
  }
})