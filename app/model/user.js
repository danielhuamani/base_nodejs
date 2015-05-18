var mongoose = require('../connections/mongoose');
//con schema se puede declarar los schmeas
var Schema = mongoose.Schema;
//se define elmodelo
var userSchema = new Schema({

	id : {type : String},
	username : {type : String, require : true, index : { unique : true}},
	email : {type : String, require : true},
	first_name : {type: String},
	last_name : {type: String}

})

var User = mongoose.model('user', userSchema);

module.exports = User;
