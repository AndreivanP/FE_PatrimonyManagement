// / <reference types="cypress" />

import faker from 'faker';

describe('Asset Form functionalities', () => {

    beforeEach(() => {
        // cy.intercept('GET', '**/*').as('apiCheck');
        cy.auth0Login('/users/Andreivan/assets/new');
        // cy.wait('@apiCheck');
    });

    it.only('Create fixed income asset', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 2', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 3', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 4', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 5', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 6', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 7', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 8', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 9', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 10', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 11', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 12', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 13', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 14', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 15', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 16', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 17', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 18', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 19', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

    it.only('Create fixed income asset 20', () => {
        cy.get(':nth-child(1) > .fieldCategA').type(`Asset auto ${faker.lorem.word()} ${faker.datatype.number()}`);
        cy.get(':nth-child(3) > .fieldCategA').type('123');
        cy.get(':nth-child(7) > .fieldCategA').type('456')
        cy.get('.btn-success').click();
    });

});