// / <reference types="cypress" />

import faker from 'faker';
const selectors = require('../support/selectors/asset-form');

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it('Create fixed income asset 21', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 22', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 23', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 24', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 25', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 26', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 27', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 28', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 29', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 30', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 31', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 32', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.wait(30000);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 33', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 34', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 35', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 36', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 37', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 38', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 39', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });

    it('Create fixed income asset 40', () => {
        // for(let i=0; i <= 1; i++) {
            let initialValue = `${faker.finance.amount()}`;
            let currentValue = `${faker.finance.amount()}`;
            let assetName = `Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`;
            let companyName = `Company ${faker.lorem.word()} ${faker.datatype.number()}`;
            cy.createNewAsset(assetName, initialValue, currentValue, companyName);
            cy.checkWhetherAssetIsCreated(assetName);
            cy.visit('/users/Andreivan/assets/new');
 //       } 
    });
});
