import React from 'react'
import { TaskPopUp } from './TaskPopUp'

describe('<TaskPopUp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TaskPopUp />)
  })
})