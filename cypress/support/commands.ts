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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('login', () => {
  const url = Cypress.env('baseUrl');
  const user = Cypress.env('userName');
  const password = Cypress.env('password');

  cy.visit(url);

  cy.get('input[name="username"]')
    .should('exist')
    .should('be.visible')
    .type(user);

  cy.findByRole('button', { name: /próximo/i })
    .should('exist')
    .should('be.enabled')
    .should('be.visible')
    .click();

  cy.get('input[name="password"]')
    .should('exist')
    .should('be.visible')
    .type(password);

  cy.findByRole('button', { name: /entrar/i })
    .should('exist')
    .should('be.enabled')
    .should('be.visible')
    .click();
});

declare namespace Cypress {
  interface Chainable {
    login(): void;
  }
}
