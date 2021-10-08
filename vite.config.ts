import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import path from 'path'

const config: UserConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '/src'),
    }
  },
  plugins: [vue({}), ssr()],
}

export default config
