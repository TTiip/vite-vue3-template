import AddItemJson from './index.json'

class AddItemToList {
  constructor (url) {
    this.url = url
  }

  get input () {
    return cy.get(AddItemJson.addItem.input)
  }

  get submit () {
    return cy.get(AddItemJson.addItem.submit)
  }

  visit () {
    cy.visit(this.url)
  }

  addItem (msg = 'testMsg') {
    this.input.type(msg)
    this.submit.click()
  }
}

export default AddItemToList
