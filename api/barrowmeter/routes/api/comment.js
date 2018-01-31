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


/**
 * Create a Comment
 */
exports.create = function(req, res) {

  var item = new Comment.model(),
    data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {

    if (err) return res.json({ error: err });

    res.json({
      Comment: item
    });

  });
}


/**
 * Delete Comment by ID - currently not exposed in API 
 */
exports.remove = function(req, res) {
  Comment.model.findById(req.params.id).exec(function (err, item) {

    if (err) return res.json({ dberror: err });
    if (!item) return res.json('not found');

    item.remove(function (err) {
      if (err) return res.json({ dberror: err });

      return res.json({
        success: true
      });
    });

  });
}
