var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Promise Model
 * ==========
 */

var Promise = new keystone.List('Promise', {
	map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    track: true,    
});

Promise.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'unfulfilled,fulfilled', default: 'unfulfilled', index: true },
	link: { type: String },
	fulfilledDate: { type: Types.Date, index: true, dependsOn: { state: 'fulfilled' } },
	notes: {
		type: String, height: 150,
	},
	percentCompleted: { type: Number, default: 0 },
	categories: { type: Types.Relationship, ref: 'PromiseCategory', many: true },
});


Promise.defaultColumns = 'title, state';
Promise.register();
