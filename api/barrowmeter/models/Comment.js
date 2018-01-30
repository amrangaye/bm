var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Comment Model
 * ==========
 */

var Comment = new keystone.List('Comment', {
	map: { name: 'username' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: true,
});

Comment.add({
	username: { type: String, required: true },
	body: { type: Types.Html },
	rating: { type: Types.Select, numeric: true, options: [{ value: 1, label: '1 Star' }, { value: 2, label: '2 Stars' }, { value: 3, label: '3 Stars' }, { value: 4, label: '4 Stars' }, { value: 5, label: '5 Stars' }] },
	published: { type: Boolean, default: false },
});

Comment.defaultColumns = 'username,body,rating';
Comment.register();
