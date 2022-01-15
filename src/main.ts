import { createApp } from 'vue'
import useDirective from '@/hooks/useDirective'
import router from '@/router'
import { createPinia } from 'pinia'
import App from './App.vue'

// 创建实例
const app = createApp(App)
// 使用hook生成自定义指令
useDirective(app)

app.use(createPinia()).use(router).mount('#app')
