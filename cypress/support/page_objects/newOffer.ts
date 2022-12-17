/// <reference types="cypress" />

export class NewOffer {
  static accessCreateOfferScreen() {
    cy.findByRole('button', { name: /menu/i })
      .should('exist')
      .should('be.enabled')
      .should('be.visible')
      .click();

    cy.findByRole('button', { name: /ofertas de compra e venda/i })
      .should('exist')
      .should('be.visible')
      .click();
  }

  static sendOffer() {
    cy.get('#mui-component-select-state')
      .click();

    cy.get('li[data-value="160c1fdd-f13b-4f37-b45d-de8a61631435"]')
      .click();

    cy.get('#root > div:nth-child(1) > main > div > div > div > div:nth-child(1) > div:nth-child(3) > div > ul > div:nth-child(4)')
      .click();

    cy.findByRole('button', { name: /enviar/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.get('.sc-oUcyK.eOPyHF')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Deseja enviar a oferta?');

    cy.findByRole('button', { name: /ok/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.get('.sc-oUcyK.eOPyHF')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Selecione uma opção abaixo:');

    cy.findByRole('button', { name: /oferta confirmada/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .click();
  }
}
