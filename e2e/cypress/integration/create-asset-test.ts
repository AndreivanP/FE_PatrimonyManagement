// / <reference types="cypress" />

import faker from 'faker';
const selectors = require('../support/selectors/asset-form');
import moment from 'moment';

describe('Asset Form functionalities', () => {
    const message = 'Please fill out this field.'

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it('Create fixed income asset with expiry date in the future', () => {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            const expiryDate = moment().add(180, 'days').format('YYYY-MM-DD');

            cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: false, 
                            initialValue: initialValue, interestRate: '', currentValue: currentValue, expiryDate: expiryDate});
                        
            cy.checkAssetList('name', assetName);
    });

    it('Create variable income asset', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;

        cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: true, 
                        initialValue: initialValue, interestRate: '', currentValue: currentValue, expiryDate: ''});

        cy.checkAssetList('name', assetName);
    });

    it('Create variable income asset without expiry date', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;

        cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: true, 
                        initialValue: initialValue, interestRate: '', currentValue: currentValue, expiryDate: ''});

        cy.checkAssetList('name', assetName);
    });

    it('Create fixed income asset with expiry date in the future', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        const expiryDate = moment().add(180, 'days').format('YYYY-MM-DD');

        cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: false, 
                        initialValue: initialValue, interestRate: '', currentValue: currentValue, expiryDate: expiryDate});

        cy.checkAssetList('name', assetName);
    });

    it('Create variable income asset with expiry date in the future', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        const expiryDate = moment().add(365, 'days').format('YYYY-MM-DD');

        cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: true, 
                        initialValue: initialValue, interestRate: '', currentValue: currentValue, expiryDate: expiryDate});

        cy.checkAssetList('name', assetName);
    });

    it('Check mandatory fields message for asset name', () => {
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;

        cy.handleAsset({assetName: '', broker: broker, startDate: '', isActive: true, isVariableIncome: true, 
                        initialValue: '', interestRate: '', currentValue: '', expiryDate: ''});

        cy.checkMandatoryMessage(selectors.default.assetName, message);
    });

    it('Check mandatory fields message for initial value', () => {
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        let currentValue = `${faker.finance.amount()}`;

        cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: true, 
                        initialValue: '', interestRate: '', currentValue: currentValue, expiryDate: ''});

        cy.checkMandatoryMessage(selectors.default.initialValue, message);
    });

    it('Check mandatory fields message for current value', () => {
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        let initialValue = `${faker.finance.amount()}`;

        cy.handleAsset({assetName: assetName, broker: broker, startDate: '', isActive: true, isVariableIncome: true, 
                        initialValue: initialValue, interestRate: '', currentValue: '', expiryDate: ''});

        cy.checkMandatoryMessage(selectors.default.currentValue, message);
    });
});
