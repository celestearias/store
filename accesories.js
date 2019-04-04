var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var underwear = new Schema(
{
	TIPO : String, //blusa,pantalon..
	PRECIO:Number,
	IMAGEN:String,
	ESTADO:Number
});
module.exports = mongoose.model('Underwear',underwear); 