const insertOne = (payload, collection, callback) => {
  collection.insertOne(payload, (err, result) => {
    callback(result);
  });
};

module.exports.insertOne = insertOne;
