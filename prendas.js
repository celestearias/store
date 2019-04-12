var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var prendas = new Schema(
{
	TIPO : String, //blusa,pantalon..
	DEPARTAMENTO: String,
	PRECIO:Number,
	IMAGEN:String,
	ESTADO:Number
});
module.exports = mongoose.model('Prendas',prendas); 