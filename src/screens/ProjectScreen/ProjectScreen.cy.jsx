import React from 'react'
import { ProjectScreen } from './ProjectScreen'

describe('<ProjectScreen />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjectScreen />)
  })
})