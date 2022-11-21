/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home page and display a welcome message', () => {
    cy.get('h1').contains('Welcome to Football Stats app!');
  });

  it('should render grid', () => {
    cy.wait(1000).then(() => {
      cy.get('.grid').should('have.length', 1);
    });
  });
});
