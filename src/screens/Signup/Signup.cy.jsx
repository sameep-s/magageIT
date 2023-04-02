import React from 'react'
import { Signup } from './Signup'
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Signup />', () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <Signup />
      </Router>
    );
  })
  it('tests if Title is visible in form', () => {
    cy.contains('.form__title', 'Signup');

  })
})