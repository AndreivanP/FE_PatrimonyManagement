// / <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const { MongoClient } = require('mongodb');
var ObjectId = require('mongodb').ObjectId;

/*  eslint-enable */

const path = require('path');
const seeder = require('cypress-mongo-seeder');

const mongouri = 'mongodb://localhost:27017/pat_manag';
const folder = './cypress/data';
const dropCollections = false;

module.exports = async (on, config) => {
  
  on('task', {
    //Files names are collection names
    async seedDbAll(folderPath: string) {
        return await seeder.seedAll(mongouri, folderPath, dropCollections);
    },

    //File name is collection name
    async seedDbSingle(filePath: string) {
      return await seeder.seedSingleCollection(mongouri, filePath, dropCollections);
  },
  });
};