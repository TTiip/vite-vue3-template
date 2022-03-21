// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Eduardo',
    isAdmin: true
  }),

  actions: {
    changeUser (userName: string) {
      this.$state.name = userName
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
