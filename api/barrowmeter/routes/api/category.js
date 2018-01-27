var keystone = require('keystone');

var PromiseCategory = keystone.list('PromiseCategory');

/**
 * List PromiseCategorys
 */
exports.list = function(req, res) {
  PromiseCategory.model.find(function(err, items) {

    if (err) return res.json({ err: err });

    res.json({
      PromiseCategory: items
    });

  });
}

/**
 * Get PromiseCategory by ID
 */
exports.get = function(req, res) {
  PromiseCategory.model.findById(req.params.id).populate('promises').exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    keystone.list('Promise').model.find({categories: item._id}).exec(function(err, promises) {
        res.json({
          PromiseCategory: item,
          Promises: promises
        });
      })
  });
}

