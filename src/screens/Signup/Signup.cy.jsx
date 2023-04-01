import React from 'react'
import { Signup } from './Signup'

describe('<Signup />', () => {
  it('renders', () => {

    cy.mount(<Signup />)
  })
})