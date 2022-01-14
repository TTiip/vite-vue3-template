// 设置播放状态
import { createStore } from 'vuex'
import { setLocalStorage, getLocalStorage } from '@/hooks/useLocalStorage'

export default createStore({
  state: {
    isSave: getLocalStorage('isSave') || false // 是否记住账号密码
  },
  mutations: {
    muSetIsSave (state, isSave) {
      state.isSave = isSave
      setLocalStorage('isSave', isSave)
    }
  },
  actions: {
    acSetIsSave ({ commit, state }, payload) {
      console.log(commit, 'commit')
      console.log(state, 'state')
      console.log(payload, 'payload')
    }
  },
  modules: {}
})
