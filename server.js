var express = require('express'); //libreria ya instalada en el package.json
var app=express();		
var mongoose=require('mongoose');	
var port= process.env.PORT || 8080;

//mongoose.connect('mongodb://todos:todos123@ds017165.mlab.com:17165/cedesprimerproyecto');	//conexion a la base de datos de mongodb
mongoose.connect('mongodb://localhost:27017/tienda1'); 
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'));

app.configure(function(){
	app.use(express.static(__dirname + '/'));
	app.use(express.logger('dev'));	//se activa el log en modo 'dev'
	app.use(express.methodOverride());
});
var bodyParser=require('body-parser');
app.use(bodyParser.json({limit: '50mb',extended:true}));

require('./routes.js')(app);	//cargamos las rutas

//escuchamos el puerto
app.listen(port);
console.log("APP por el puerto "+port);