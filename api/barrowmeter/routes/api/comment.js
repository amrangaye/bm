var keystone = require('keystone');

var Comment = keystone.list('Comment');

/**
 * List Comments
 */
exports.list = function(req, res) {
  Comment.model.find(function(err, items) {

    if (err) return res.json({ err: err });

    res.json({
      Comment: items
    });

  });
}

/**
 * Get Comment by ID
 */
exports.get = function(req, res) {
  Comment.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json({
      Comment: item
    });

  });
}

