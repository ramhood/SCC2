/**
 * Created by mehdi on 3/14/15.
 */
var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Program Model
 * =============
 */

var Program = new keystone.List('Program', {
	autokey: { from: 'title', path: 'key', unique: true }
});

Program.add({
	title: { type: String, initial: true },
	title_fa: { type: String },
	publishedDate: { type: Date, default: Date.now, required: true },
	description: {type: Types.Textarea, initial: true},
	description_fa: {type: Types.Textarea}
});

Program.defaultColumns = 'title, publishedDate|15%';

Program.register();
