import { mount } from '@cypress/vue'
import Button from './Button.vue'

describe('Submit', () => {
  it('init', () => {
    mount(Button)
    cy.contains('btn')
  })
})
