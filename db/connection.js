const MongoClient = require('mongodb').MongoClient;

const mongodbURI = process.env.MONGODB_URI;
const connection = new MongoClient(mongodbURI);

module.exports = connection;
