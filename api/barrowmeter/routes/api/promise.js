var keystone = require('keystone');

var Promise = keystone.list('Promise');

/**
 * List Promises
 */
exports.list = function(req, res) {
  Promise.model.find(function(err, items) {

    if (err) return res.json({ err: err });

    res.json({
      Promise: items
    });

  });
}

/**
 * Get Promise by ID
 */
exports.get = function(req, res) {
  Promise.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json({
      Promise: item
    });

  });
}

