var keystone = require('keystone');

/**
 * PromiseCategory Model
 * ==================
 */

var PromiseCategory = new keystone.List('PromiseCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

PromiseCategory.add({
	name: { type: String, required: true },
	description: {type: String},
});

PromiseCategory.relationship({ ref: 'Promise', path: 'promises', refPath: 'categories', many:true });

PromiseCategory.schema.virtual('postCount').get(function() {
	return this._postCount;
  });
  
  PromiseCategory.schema.virtual('postCount').set(function(postCount) {
	return this._postCount = postCount;
  });
  
  PromiseCategory.schema.set('toObject', {
	getters: true
  });

  PromiseCategory.schema.set('toJSON', {
	getters: true
  });

PromiseCategory.register();
