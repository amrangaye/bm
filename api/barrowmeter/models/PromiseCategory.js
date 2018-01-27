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
	description: {type: String}
});

PromiseCategory.relationship({ ref: 'Promise', path: 'promises', refPath: 'categories' });

PromiseCategory.register();
