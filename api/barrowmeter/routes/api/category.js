var keystone = require('keystone');
var async = require('async');

var PromiseCategory = keystone.list('PromiseCategory');

/**
 * List PromiseCategorys
 */

exports.list = function(req, res) {
  PromiseCategory.model.find().populate('promises').exec(function(err, categories) {

    // keystone.list('Promise').model.find({categories: item._id}).exec(function(err, promises) {

    // });

    if (err) return res.json({ err: err });

    var counts = [10] 
    var results = {"categories": []};
      
    	// Load the counts for each category
			async.each(categories, function (category, next) {

				keystone.list('Promise').model.find({categories: category._id}).exec(function (err, promises) {
          
          category.postCount = promises.length;
          var res_cat = {};
          res_cat.name = category.name;

          res_cat.fulfilledPromises = 0;
          promises.forEach(promise => {
            if(promise.state == "fulfilled")
              res_cat.fulfilledPromises += 1; 
          });
          
          res_cat.totalPromises = promises.length;
          res_cat.description = category.description;
          res_cat.id = category._id;

          results['categories'].push(res_cat);

          console.log(res_cat); 
          console.log(promises);
          
					next(err);
				});
			}, function (err) {
        res.json(
          results.categories
        );
      }); // end of async
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

