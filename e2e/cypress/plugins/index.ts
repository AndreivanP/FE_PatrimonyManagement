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

const seeder = require('cypress-mongo-seeder');
import { MONGOURI } from "../../../src/Properties"
const ObjectId = require('mongodb').ObjectId;
const { MongoClient } = require('mongodb');
const fs = require('fs')

module.exports = async (on, config) => {

  const client = new MongoClient(MONGOURI);

  async function connect(databaseName: string) {
    // Connect the client to the server
    await client.connect();
    await client.db(databaseName).command({ ping: 1 });
    return client.db(databaseName);
  }

  async function disconnect() {
    // Ensures that the client will close when you finish/error
    await client.close();
  }


  async function readJsonFile(jsonPath: string) {
    let arrayIds: any = [];
    await fs.readFile(jsonPath, 'utf8', (err: any, jsonString: any) => {
      if (err) {
        console.log("File read failed:", err)
        return
      }
      const json = JSON.parse(jsonString)
      for (let i = 0; Object.keys(json).length > i; i++) {
        try {
          arrayIds.push(json[i]._id.$oid)
        } catch (error) {
          console.log("id not found -> " + error + "...json reading will continue")
        }
      }
    })
    return arrayIds;
  }

  on('task', {
    //Files names are collection names
    async seedDbAll({ folderPath, dropCollections }: any) {
      return await seeder.seedAll(MONGOURI, folderPath, dropCollections);
    },

    //File name is collection name
    async seedDbSingle({ filePath, dropCollections }: any) {
      return await seeder.seedSingleCollection(MONGOURI, filePath, dropCollections);
    },

    async deleteMongoEntry({ filePath, databaseName, collectionName }: any) {
      let arraysIDs: any = await readJsonFile(filePath);
      const db = await connect(databaseName);
      const collection = db.collection(collectionName);

      for (let i = 0; arraysIDs.length > i; i++) {
        const o_id = new ObjectId(arraysIDs[i]);
        const del = await collection.deleteOne({ _id: o_id });
        if (del.deletedCount === 1) {
          console.log(`Id ${o_id} has been successfully deleted`);
        } else {
          console.log(`Id ${o_id} not found in the database.`);
        }
      }
      return null;
    },
  });
};