// / <reference types="cypress" />

import faker from 'faker';

const file =  '../e2e/cypress/data/asset.json';
const folder =  '../e2e/cypress/data';
const dropCollections = true;

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        cy.task('deleteMongoEntry', {filePath: file, collectionName: "asset"});
        cy.task('seedDbSingle', {filePath: file, dropCollections: false});
    });

    it('Update current value of a complete fixed income asset', () => {
        cy.auth0Login('/users/Staging/assets/000000000000000000000001');
        let currentValue = `${faker.finance.amount()}`;
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: currentValue, expiryDate: ''});
        cy.checkAssetList('currentValue', currentValue);
    });

    it('Update current value of a fixed income asset without expiry date', () => {
        cy.auth0Login('/users/Staging/assets/000000000000000000000002');
        let currentValue = `${faker.finance.amount()}`;
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: currentValue, expiryDate: ''});
        cy.checkAssetList('currentValue', currentValue);
    });

    it('Update asset name of a fixed income asset without expiry date', () => {
        cy.auth0Login('/users/Staging/assets/000000000000000000000002');
        let name = `NEW Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        cy.handleAsset({assetName: name, broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: '', expiryDate: ''});
        cy.checkAssetList('name', name);
    });

    it('Add expiry date to a fixed income asset without expiry date', () => {

    });

    it('Change expiry date of a fixed income asset', () => {

    });

    it('Update initial value of variable income asset', () => {

    });

});
