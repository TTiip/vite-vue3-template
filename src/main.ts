import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'

// 创建实例
const app = createApp(App)

app
  .use(router)
// 注册 store
  .use(createPinia())
  .mount('#app')
