// / <reference types="cypress" />

import faker from 'faker';
import moment from 'moment';

const file =  '../e2e/cypress/data/asset.json';
const folder =  '../e2e/cypress/data';
const dropCollections = true;

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        cy.wait('@apiCheck');
    });

    it.only('Update current value of a complete fixed income asset', () => {
        cy.task('seedDbSingle', {filePath: file, dropCollections: dropCollections});
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
