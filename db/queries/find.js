const findAll = (collection, callback) => {
  collection.find({}).toArray(function (err, docs) {
    callback(docs);
  });
};

const findOne = (collection, callback, identifier) => {
  collection.find(identifier).toArray(function (err, docs) {
    callback(docs);
  });
};

module.exports.findAll = findAll;
module.exports.findOne = findOne;
