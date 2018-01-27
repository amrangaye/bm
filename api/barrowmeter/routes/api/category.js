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
  PromiseCategory.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json({
      PromiseCategory: item,
      Items: item.promises
    });

  });
}

