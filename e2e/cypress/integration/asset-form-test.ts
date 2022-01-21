// / <reference types="cypress" />

import faker from 'faker';
const selectors = require('../support/selectors/asset-form');

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it('Create fixed income asset', () => {
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

    it('Create fixed income asset 2', () => {
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

    it('Create fixed income asset 3', () => {
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

    it('Create fixed income asset 4', () => {
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

    it('Create fixed income asset 5', () => {
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

    it('Create fixed income asset 6', () => {
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

    it('Create fixed income asset 7', () => {
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

    it('Create fixed income asset 8', () => {
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

    it('Create fixed income asset 9', () => {
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

    it('Create fixed income asset 10', () => {
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

    it('Create fixed income asset 11', () => {
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

    it('Create fixed income asset 12', () => {
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

    it('Create fixed income asset 13', () => {
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

    it('Create fixed income asset 14', () => {
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

    it('Create fixed income asset 15', () => {
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

    it('Create fixed income asset 16', () => {
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

    it('Create fixed income asset 17', () => {
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

    it('Create fixed income asset 18', () => {
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

    it('Create fixed income asset 19', () => {
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

    it('Create fixed income asset 20', () => {
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
            cy.wait(30000);
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


    it('Create fixed income asset 41', () => {
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

    it('Create fixed income asset 42', () => {
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

    it('Create fixed income asset 43', () => {
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

    it('Create fixed income asset 44', () => {
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

    it('Create fixed income asset 45', () => {
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

    it('Create fixed income asset 46', () => {
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

    it('Create fixed income asset 47', () => {
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

    it('Create fixed income asset 48', () => {
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

    it('Create fixed income asset 49', () => {
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

    it('Create fixed income asset 50', () => {
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

    it('Create fixed income asset 51', () => {
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

    it('Create fixed income asset 52', () => {
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

    it('Create fixed income asset 53', () => {
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

    it('Create fixed income asset 54', () => {
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


    it('Create fixed income asset 55', () => {
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

    it('Create fixed income asset 56', () => {
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

    it('Create fixed income asset 57', () => {
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

    it('Create fixed income asset 58', () => {
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

    it('Create fixed income asset 58', () => {
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

    it('Create fixed income asset 59', () => {
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

    it('Create fixed income asset 60', () => {
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
