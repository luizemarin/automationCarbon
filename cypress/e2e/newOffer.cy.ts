/// <reference types="cypress" />

import { NewOffer } from "../support/page_objects/newOffer";

describe('New Offer', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Cancel create order', () => {
    NewOffer.accessCreateOfferScreen();

    cy.findByRole('button', { name: /nova oferta/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.findByRole('heading', { name: /voltar/i })
      .should('exist')
      .should('be.visible')
      .click();

    cy.get('.sc-pkrWq.iIIlsF')
      .should('exist')
      .should('be.visible')
      .should('contain.text', 'Os dados serão perdidos. Deseja continuar?');

    cy.findByRole('button', { name: /sim/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .click();

    cy.findByRole('heading', { name: /ofertas de compra e venda/i })
      .should('exist')
      .should('be.visible');

    cy.findByRole('button', { name: /nova oferta/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled');

  });

  it('Create new offer', () => {
    const price = '50';
    const volMin = '10';
    const volMax = '10';
    const description = 'descrição de teste automatizado';

    NewOffer.accessCreateOfferScreen();

    cy.findByRole('button', { name: /nova oferta/i })
      .should('exist')
      .should('be.visible')
      .should('be.enabled')
      .click();

    //Seleção de produto
    cy.get('#mui-component-select-product_id')
      .click()

    cy.get('li[data-value="73f6551a-c399-405e-a2c0-8797132b8100"]')
      .click();

    //Selecão de modalidade
    cy.get('#mui-component-select-modality_id')
      .click()

    cy.get('li[data-value="59df2602-b0f8-4044-b4ac-2951f0549bd9"]')
      .click();

    //Informando preço
    cy.get('.sc-pzYib.cVYBFK')
      .first()
      .should('exist')
      .should('be.visible')
      .type(price);

    //Selecionado o "Por"
    cy.get('#mui-component-select-unit_of_measurement_id')
      .click()

    cy.get('li[data-value="667e60a8-8495-4412-bb26-427946cee289"]')
      .click();

    //Informando volume minimo
      cy.get('#root > div > main > div > div > div > form > div > div:nth-child(4) > div:nth-child(1)')
      .should('exist')
      .should('be.visible')
      .type(volMin);

    //Informando volume maximo
      cy.get('#root > div > main > div > div > div > form > div > div:nth-child(4) > div:nth-child(2)')
        .should('exist')
        .should('be.visible')
        .type(volMax);

    //Informando a safra
      cy.get('#mui-component-select-harvest_id')
        .click();

      cy.get('li[data-value="fc04585c-f23c-451c-8a22-c7b36aab886f"]')
        .click();

    //Selecionado a data de pagamento
      cy.get('input[name="payday"]')
        .should('exist')
        .click();

      cy.findByRole('button', { name: /ok/i })
        .should('exist')
        .should('be.visible')
        .should('be.enabled')
        .click();

    //Informando tipo de pagamento
      cy.get('#mui-component-select-payment_type')
        .click();

      cy.get('li[data-value="DINHEIRO"]')
        .click();

    //Selecionando a unidade
      cy.get('#mui-component-select-delivery_place')
        .click();

      cy.get('li[data-value="f3022d64-7c46-49ad-8628-ea453767ebcd"]')
        .click();

    //Selecionado a data de expiração
      cy.get('input[name="expiration_date"]')
        .should('exist')
        .click();

      cy.get('.MuiPickersBasePicker-container')
        .type('{downArrow}');

      cy.findByRole('button', { name: /ok/i })
        .should('exist')
        .should('be.visible')
        .should('be.enabled')
        .click();

    //Selecionado a hora de expiração
      cy.get('input[name="expiration_time"]')
        .should('exist')
        .click();

      cy.findByRole('button', { name: /ok/i })
        .should('exist')
        .should('be.visible')
        .should('be.enabled')
        .click();

    //Informando a descrição
      cy.get('#root > div > main > div > div > div > form > div > div:nth-child(9) > div > div > div > div')
        .should('exist')
        .should('be.visible')
        .type(description);

      cy.findByRole('button', { name: /criar/i })
        .should('be.visible')
        .should('be.enabled')
        .should('exist')
        .click();

      NewOffer.sendOffer();
  });
});
