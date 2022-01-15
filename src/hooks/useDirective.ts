import { App } from 'vue'

const useDirective = (app: App<Element>): void => {
  app.directive('clickoutside', {
    // 初始化指令
    beforeMount (el: any, binding: any) {
      const documentHandler = (e: any) => {
        // 这里判断点击的元素是否是本身，是本身，则返回
        if (el.contains(e.target)) {
          return false
        }
        // 判断指令中是否绑定了函数
        if (binding.value) {
          // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
          binding.value(e)
        }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueClickOutside__ = documentHandler
      document.addEventListener('click', documentHandler)
    },
    unmounted (el) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__)
      delete el.__vueClickOutside__
    }
  })
  app.directive('lockBody', {
    // 初始化指令
    beforeMount (el: any) {
      el.addEventListener('wheel', (event: any) => {
        // 禁止默认事件 解决歌曲列表和歌词列表滚动时body跟随滚动的问题。
        event.stopPropagation()
        event.preventDefault()
      })
    },
    unmounted () {}
  })
}

export default useDirective
