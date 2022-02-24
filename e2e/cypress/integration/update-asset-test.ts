// / <reference types="cypress" />

import faker from 'faker';
import moment from 'moment';

const file =  '../e2e/cypress/data/asset.json';
const folder =  '../e2e/cypress/data';
const dropCollections = true;

describe('Asset Form functionalities', () => {

    it.only('Update current value of a complete fixed income asset', () => {
        cy.task('deleteMongoEntry', {filePath: file, databaseName: "pat_manag_stg", collectionName: "asset"});
        cy.task('seedDbSingle', {filePath: file, dropCollections: false});
        cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/000000000000000000000001');
        cy.wait('@apiCheck');
        let currentValue = `${faker.finance.amount()}`;
        cy.createNewAsset('', '', '', false, false, '', '', currentValue, '');
        cy.checkCurrentValueAssetList(currentValue)
    });

    it('Update current value of a fixed income asset without expiry date', () => {

    });

    it('Update asset name of a fixed income asset without expiry date', () => {

    });

    it('Add expiry date to a fixed income asset without expiry date', () => {

    });

    it('Change expiry date of a fixed income asset', () => {

    });

    it('Update initial value of variable income asset', () => {

    });

});
