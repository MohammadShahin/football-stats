/// <reference types="cypress"/>

context('Discover Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/discover');
  });

  it('should render the Discover page and display a message', () => {
    cy.get('h1').contains('Discover your favorite league');
  });

  it('should render grid', () => {
    cy.visit('http://localhost:3000/discover');
    cy.get(
      '#__next > div > main > div > div > form > div:nth-child(2) > label:nth-child(1) > div'
    ).click();
    cy.get(
      '#__next > div > main > div > div > form > div:nth-child(5) > label:nth-child(1)'
    ).click();
    cy.get('button').click();
    cy.get('table').should('exist');
  });
});
