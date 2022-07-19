// / <reference types="cypress" />

import {default as selectors} from '../support/selectors/asset-list';
const file =  '../e2e/cypress/data/asset.json';

describe('Asset Form Delete Functionality', () => {
    beforeEach(() => {
        cy.task('deleteMongoEntry', {filePath: file, collectionName: "asset"});
        cy.task('seedDbSingle', {filePath: file, dropCollections: false});
    });

    it('Delete a fixed income asset', () => {
        const assetName = 'Auto test Delete Fixed Income';
        cy.auth0Login('/assets');

        cy.deleteAssetByName(assetName);

        cy.get(selectors.toastMsg).first().should('have.text', `Asset ${assetName} successfully deleted!`)
    });

    it('Delete a variable income asset', () => {
        const assetName = 'Auto test Delete Variable';
        cy.auth0Login('/assets');

        cy.deleteAssetByName(assetName);

        cy.get(selectors.toastMsg).first().should('have.text', `Asset ${assetName} successfully deleted!`)
    });
});
