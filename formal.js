var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var formal = new Schema(
{
	TIPO : String, //blusa,pantalon..
	PRECIO:Number,
	IMAGEN:String,
	ESTADO:Number
});
module.exports = mongoose.model('Formal',formal); 