var mongoose = require('../connections/mongoose')
var Schema = mongoose.Schema

var preguntaSchema = new Schema({
	user : {type : Schema.Types.ObjectId, ref : 'user'},
	titulo : {type : String},
	content: {type : String}

})

var pregunta = mongoose.model('pregunta', preguntaSchema);
module.exports = pregunta;
