// / <reference types="cypress" />

import faker from 'faker';
const selectors = require('../support/selectors/asset-form');
import moment from 'moment';

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it('Create 3 fixed income asset in a looping', () => {
        for(let i=0; i <= 3; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, broker, '', true, false, initialValue, '', currentValue, '');
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
        } 
    });

    it('Create variable income asset', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        cy.createNewAsset(assetName, broker, '', true, true, initialValue, '', currentValue, '');
        cy.checkWhetherAssetIsCreated(assetName);
        cy.visit('/users/Andreivan/assets/new');
    });

    it('Check mandatory fields message for asset name', () => {
        let initialValue = `${faker.finance.amount()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        let currentValue = `${faker.finance.amount()}`;
        cy.createNewAsset('', broker, '', true, true, initialValue, '', currentValue, '');
        cy.checkMandatoryMessage(selectors.default.assetName, 'Please fill out this field.');
    });

    it('Check mandatory fields message for initial value', () => {
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        let currentValue = `${faker.finance.amount()}`;
        cy.createNewAsset(assetName, broker, '', true, true, '', '', currentValue, '');
        cy.checkMandatoryMessage(selectors.default.initialValue, 'Please fill out this field.');
    });

    it('Check mandatory fields message for current value', () => {
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        let initialValue = `${faker.finance.amount()}`;
        cy.createNewAsset(assetName, broker, '', true, true, initialValue, '', '', '');
        cy.checkMandatoryMessage(selectors.default.currentValue, 'Please fill out this field.');
    });

    it('Create variable income asset without expiry date', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        cy.createNewAsset(assetName, broker, '', true, true, initialValue, '', currentValue, '');
        cy.checkWhetherAssetIsCreated(assetName);
        cy.visit('/users/Andreivan/assets/new');
    });

    it('Create fixed income asset with expiry date in the future', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        const expiryDate = moment().add(180, 'days').format('YYYY-MM-DD');
        cy.createNewAsset(assetName, broker, '', true, false, initialValue, '', currentValue, expiryDate);
        cy.checkWhetherAssetIsCreated(assetName);
        cy.visit('/users/Andreivan/assets/new');
    });

    it('Create variable income asset with expiry date in the future', () => {
        let initialValue = `${faker.finance.amount()}`;
        let currentValue = `${faker.finance.amount()}`;
        let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
        let broker = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
        const expiryDate = moment().add(365, 'days').format('YYYY-MM-DD');
        cy.createNewAsset(assetName, broker, '', true, true, initialValue, '', currentValue, expiryDate);
        cy.checkWhetherAssetIsCreated(assetName);
        cy.visit('/users/Andreivan/assets/new');
    });

});
