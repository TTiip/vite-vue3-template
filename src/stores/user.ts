// 设置播放状态
import { defineStore, acceptHMRUpdate } from 'pinia'
import { setLocalStorage, getLocalStorage } from '@/hooks/useLocalStorage'

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isSave: getLocalStorage('isSave') || false // 是否记住账号密码
  }),
  actions: {
    acSetIsSave (payload: any) {
      setLocalStorage('isSave', payload)
      this.isSave = payload
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

export default useUserStore
