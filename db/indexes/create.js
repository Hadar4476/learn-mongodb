const indexCollection = function (collection, callback) {
  collection.createIndex({ a: 1 }, null, function (err, results) {
    console.log(results);
    callback();
  });
};

module.exports.indexCollection = indexCollection;
