// / <reference types="cypress" />

import faker from 'faker';

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it.only('Create 20 fixed income asset', () => {
        for(let i=0; i <= 20; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`
            cy.createNewAsset(assetName, initialValue, currentValue);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new')
        } 
    });

});
