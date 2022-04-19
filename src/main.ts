import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建实例
const app = createApp(App)

app
  .use(router)
// 注册 store
  .use(createPinia())
  .mount('#app')
