import React from 'react'
import { Dashboard } from './Dashboard'

describe('<Dashboard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Dashboard />)
  })
})

describe('Popup Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/project/1') // Assuming your React app is running on localhost:3000
  })

  it('should open a popup when clicked', () => {
    cy.get('.container__main__task').click() // Click the button that opens the popup
    cy.get('.container__main__popUp').should('be.visible') // Ensure the popup is visible
  })

  it('should close the popup when the close button is clicked', () => {
    cy.get('[data-testid="popup-button"]').click() // Click the button that opens the popup
    cy.get('[data-testid="popup"]').should('be.visible') // Ensure the popup is visible
    cy.get('[data-testid="close-button"]').click() // Click the close button
    cy.get('[data-testid="popup"]').should('not.exist') // Ensure the popup is closed
  })
})