
var express = require('express');
var app=express();		
var mongoose=require('mongoose');	
var port= process.env.PORT || 8080;

//mongoose.connect('mongodb://bb-sita:pass123@ds341825.mlab.com:41825/cedespruebas');	//conexion a la base de datos de mongodb llamada 'Taquilla'
mongoose.connect('mongodb://localhost:27017/pegasus'); 
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