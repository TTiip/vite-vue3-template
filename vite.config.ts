import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        // 引入公共less 变量 reset
        additionalData: `
          @import "${resolve(__dirname, 'src/assets/less/common.less')}";
          @import "${resolve(__dirname, 'src/assets/less/reset.less')}";
        `,
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 8087,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // 重写路径
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
