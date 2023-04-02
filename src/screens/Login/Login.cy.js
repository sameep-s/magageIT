import React from 'react'
import { Login } from '../'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Login />', () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <Login />
      </Router>
    )
  })


  it('tests if Login if failed if the user is not registered', () => {
    cy.get('.userName').type('sam');
    cy.get('.input__password').type('sam')
    cy.get('.form__login').submit();
    cy.get('.go3958317564').should('be.visible');
  })
})