// / <reference types="cypress" />

import faker from 'faker';
const selectors = require('../support/selectors/asset-form');

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it('Create 10 fixed income asset in a looping', () => {
        for(let i=0; i <= 10; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
        } 
    });

    it('Create variable income asset', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        cy.createNewAsset(assetName, initialValue, currentValue, companyName, true);
        cy.checkWhetherAssetIsCreated(assetName);
        cy.visit('/users/Andreivan/assets/new');
    });

    it('Check mandatory fields message', () => {
        let initialValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        cy.createNewAsset(assetName, initialValue, '', companyName);
        cy.get(selectors.default.currentValue).then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    });
});
