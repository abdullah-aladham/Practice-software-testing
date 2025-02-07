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
  cy.session('login Session',()=>{cy.visit('auth/login');
    cy.get('input[id="email"]').should('be.visible').and('not.be.disabled').type(email);
    cy.get('input[id="password"]').should('be.visible').and('not.be.disabled').type(password);
    cy.get('[data-test="login-submit"]').should('be.visible').and('not.be.disabled').click();
    cy.url().should('eq','https://practicesoftwaretesting.com/account');
  })
    
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