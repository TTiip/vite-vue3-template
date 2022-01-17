describe('create message & show list', () => {
  const str = 'new message'
  it('add item into list', () => {
    // e2e 页面效果 展示测试
    // 注意 这里不需要 挂在组件
    // visit 能在e2e测试中使用，但是组件测试中不能使用
    cy.visit('http://localhost:8087')
    // get 选中 元素， type 输入数据
    cy.get('.input').type(str)
    // 点击触发按钮事件
    cy.get('.btn').click()
    // 验证是否清空了input
    cy.get('.input').should('have.value', '')
    // cy.get('.input').should('not.have.value')
  })

  it('display add item into list', () => {
    cy.contains(str)
  })
})
