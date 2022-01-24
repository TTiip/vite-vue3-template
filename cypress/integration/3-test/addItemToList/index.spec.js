import AddItemToList from '@/specConfig/addItemToList/index.js'

describe('create message & show list', () => {
  const str = 'new message'
  it('add item into list', () => {
    const addCtx = new AddItemToList('http://localhost:8087')
    addCtx.visit()
    addCtx.addItem(str)
  })

  it('display add item into list', () => {
    cy.contains(str)
  })
})
