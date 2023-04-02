import React from 'react';
import { Dashboard } from './Dashboard';

describe('opens dashboard ', () => {
  it('renders', () => {
    cy.mount(<Dashboard />)
  })
})
