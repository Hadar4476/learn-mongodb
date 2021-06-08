const express = require('express');
const router = express.Router();

const connection = require('../db/connection');
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

const queries = require('../db/queries');

router.post('/', async (req, res) => {
  const user = req.body;
  connection.connect((error) => {
    const db = connection.db(dbName);
    const collection = db.collection(collectionName);
    queries.insertOne(user, collection, (result) => {
      connection.close();
      res.send(result);
    });
  });
});

router.get('/', async (req, res) => {
  connection.connect((error) => {
    const db = connection.db(dbName);
    const collection = db.collection(collectionName);
    queries.findAll(collection, (result) => {
      connection.close();
      res.send(result);
    });
  });
});

module.exports = router;
