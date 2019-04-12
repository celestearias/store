var controllerprendas = require('./controllerprendas.js');
var controllerAdministrador = require('./controlleradministrador.js');  
var controllerusuario = require('./controllerusuario.js');   
var claseadm = new controllerAdministrador();
var claseus= new controllerusuario();

module.exports = function(app){

	var clasetienda= new controllerprendas();
	app.post('/api/nuevaprenda', clasetienda.Guardar);
	//app.post('/api/modifiprenda', clasetienda.Modificar);
	//app.post('/api/eliminaprenda', clasetienda.Eliminar);
	app.post('/api/seleccionartodos', clasetienda.Seleccionartodos);
	app.post('/api/seleccionarporid', clasetienda.Seleccionarporid);
	app.post('/api/seleccionarportipo', clasetienda.Seleccionarportipo);
  	app.post('/api/nuevoadm',  claseadm.Guardar);
 	app.post('/api/loginadm',  claseadm.Login);
 	app.post('/api/nuevous',  claseus.Guardar);
 	app.post('/api/loginus',  claseus.Login);
 	
	app.get('*', function(req,res){//localhost:8080
		res.sendfile('./FrontEnd/indexsinloguear.html');//Carga unica de la vista
	});

	
};

    