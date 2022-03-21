// / <reference types="cypress" />

import faker from 'faker';
import {default as selectors} from '../support/selectors/asset-form';
const file =  '../e2e/cypress/data/asset.json';
import moment from 'moment';

describe('Asset Form functionalities', () => {
    function login(assetId: string) {
        cy.auth0Login(`/users/Staging/assets/${assetId}`);
    }

    beforeEach(() => {
        cy.task('deleteMongoEntry', {filePath: file, collectionName: "asset"});
        cy.task('seedDbSingle', {filePath: file, dropCollections: false});
    });

    it('Update current value of a complete fixed income asset', () => {
        login('000000000000000000000001');
        let currentValue = `R$ ${faker.finance.amount()}`;
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: currentValue, expiryDate: ''});
        cy.checkAssetList('currentValue', currentValue);
    });

    it('Update current value of a fixed income asset without expiry date', () => {
        login('000000000000000000000002');
        let currentValue = `R$ ${faker.finance.amount()}`;
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: currentValue, expiryDate: ''});
        cy.checkAssetList('currentValue', currentValue);
    });

    it('Update asset name of a fixed income asset without expiry date', () => {
        login('000000000000000000000002');
        let name = `NEW Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        cy.handleAsset({assetName: name, broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: '', expiryDate: ''});
        cy.checkAssetList('name', name);
    });

    it('Add expiry date to a fixed income asset', () => {
        login('000000000000000000000002');
        const expiryDate = moment().add(365, 'days').format('YYYY-MM-DD');
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: '', expiryDate: expiryDate});
        cy.visit('/users/Staging/assets/000000000000000000000002');
        cy.get(selectors.expiryDate).should('have.value', expiryDate);
    });

    it('Change expiry date of a fixed income asset', () => {
        login('000000000000000000000001');
        const expiryDate = moment().add(365, 'days').format('YYYY-MM-DD');
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: '', interestRate: '', currentValue: '', expiryDate: expiryDate});
        cy.visit('/users/Staging/assets/000000000000000000000001');
        cy.get(selectors.expiryDate).should('have.value', expiryDate);
    });

    it('Update initial value of variable income asset', () => {
        login('000000000000000000000003');
        let initialValue = `${faker.finance.amount()}`;
        cy.handleAsset({assetName: '', broker: '', startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: initialValue, interestRate: '', currentValue: '', expiryDate: ''});
        cy.visit('/users/Staging/assets/000000000000000000000003');
        cy.get(selectors.initialValue).should('have.value', initialValue);
    });

});
