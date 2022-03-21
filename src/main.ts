import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import useDirective from '@/hooks/useDirective'
import { createPinia } from 'pinia'

// 创建实例
const app = createApp(App)

// 使用hook生成自定义指令
useDirective(app)

app
  .use(router)
// 注册 store
  .use(createPinia())
  .mount('#app')
