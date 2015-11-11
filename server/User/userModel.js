var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userInfo = new Schema({

	firstName: {
		type: String,
		// unique: true,
		// required: true
	},
	lastName: {
		type: String,
		// unique: true,
		// required: true
	},
	password: {
		type: String,
		// unique: true,
		// required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	goal: {
		type: String
	},
	streak: {
		type: Number
	}
});

module.exports = mongoose.model('User', userInfo);
