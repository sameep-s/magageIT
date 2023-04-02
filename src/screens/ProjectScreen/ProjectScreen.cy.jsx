import React from 'react'
import { ProjectScreen } from './ProjectScreen'
import { projects } from '../../data/data-projects'

describe('<ProjectScreen />', () => {
  beforeEach(() => {

  })
  it('renders', () => {
    cy.window().then(win => {
      let projectString = JSON.stringify(projects);
      win.localStorage.setItem('dataProjects', projectString)
    });
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjectScreen />)
  })
})

