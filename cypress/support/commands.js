// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => { 
    cy.visit('auth/login');
    cy.get('input[id="email"]').should('be.visible').and('be.null').type(email);
    cy.get('input[id="password"]').should('be.visible').and('be.null').type(password);
    cy.get('button[value="Login"]').should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','/account');
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })