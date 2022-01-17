import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        // 生产环境时移除 console
        drop_console: true,
        // 生产环境时移除 debugger
        drop_debugger: true
      }
    },
    // 取消计算文件大小，加快打包速度
    brotliSize: false,
    // 是否需要 sourcemap 映射文件
    sourcemap: false,
    // assetsDir: 'static/img',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
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
