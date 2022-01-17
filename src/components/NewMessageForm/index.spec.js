import { mount } from '@cypress/vue'
import NewMessageForm from './index.vue'

// 组件中的逻辑应该只能涉及到组件的逻辑，这里只有添加和删除，没有展示列表
// 所以不能使用组件测试来观察效果必须使用e2e 测试看效果
describe('create message', () => {
  const str = 'new message'
  it('add item into list', () => {
    mount(NewMessageForm)
    // 也可以使用 自定义属性获取元素
    // get 选中 元素， type 输入数据
    cy.get('.input').type(str)
    // 点击触发按钮事件
    cy.get('.btn')
      .click()
      .then(() => {
        // 验证是否触发；了emit事件 传递的值对不对
        expect(Cypress.vueWrapper.emitted('send')[0]).toEqual([str])
        // 验证是否清空了input
        cy.get('.input').should('have.value', '')
        // cy.get('.input').should('not.have.value')
      })
  })
})
