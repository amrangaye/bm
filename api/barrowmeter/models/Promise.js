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
	fulfilledDate: { type: Types.Date, index: true, dependsOn: { state: 'fulfilled' } },
	notes: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
	percentCompleted: { type: Number, default: 0 },
	categories: { type: Types.Relationship, ref: 'PromiseCategory', many: true },
});

Promise.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Promise.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Promise.register();
