import React from 'react'
import { Board } from './Board'
import { projects } from '../../data/data-projects'

const boards = projects.filter(i => i._id === 1)[0].boards;
const board = boards.filter(board => board.title === "To Do")[0];

describe('<Board />', () => {

  beforeEach(() => {
    const setBoards = cy.stub().as('setState');
    cy.mount(<Board
      board={board}
      boards={boards}
      setBoard={setBoards}
    />)
  })

  it('tests if the Editbale component opens', () => {
    cy.get('[data-cy = "container__editable__task"]').click();
    cy.get('.editable__inputFiled').should('be.visible');
  });

  it('it tests if new task is created', () => {
    cy.get('[data-cy = "container__editable__task"]').click();
    cy.get('.editable__inputFiled').type("New_Test_Task");
    cy.get('.form__task').submit();
    cy.contains('.container__task__Title', "New_Test_Task");
  })

  it('tests if the Editbale component closes when clicked outside', () => {
    cy.get('[data-cy = "container__editable__task"]').click();
    cy.get('.editable__inputFiled').should('be.visible');
    cy.get('.tasksCount').click();
    cy.get('.editable__inputFiled').should('not.exist');

  });

  it('tests if popup opens up', () => {
    cy.contains('.container__task__Title', 'Write test Cases').click();
    cy.get('.container__main__popUp').should('be.visible');
  })

  it('tests if popup closes when clicke on Close button', () => {
    cy.contains('.container__task__Title', 'Write test Cases').click();
    cy.get('.popUp__closed').click({ force: true });
    cy.get('.container__main__popUp').should('not.exist');

  })

})