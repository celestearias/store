 class _Underwear {
         constructor(_id, 
          TIPO,
          DEPARTAMENTO,
          PRECIO,
          IMAGEN,
          ESTADO
                  ) {
             this._id=_id;
          this.TIPO=TIPO;
          this.DEPARTAMENTO=DEPARTAMENTO;
          this.PRECIO=PRECIO;
          this.IMAGEN=IMAGEN;
          this.ESTADO=ESTADO;
         }
      Guardar() {
         var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff
             
            try {
                 
                     var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/nuevaprenda'); //nuevaprenda viene del archivo routes
        //xhr.open('POST', 'https://bbceles.herokuapp.com/api/Nuevapelicula');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          }
          else
              {
                 reject(xhr); 
              }
      };
      xhr.send(JSON.stringify(objetoaenviar));   
                
                
                
      }
      catch(err) {
           reject(err.message);

      }
          });
      }
          
       Modificar(req,res) {
         var objetoaenviar = this; //devuelve una nueva promesa
        return new Promise(function(resolve, reject) {
             
            try {
                 
                     var xhr = new XMLHttpRequest();
                      xhr.open('POST', 'http://localhost:8080/api/modifiprenda');
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/modificapelicula');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          }
          else
              {
                 reject(xhr); 
              }
      };
      xhr.send(JSON.stringify(objetoaenviar));   
                
                
                
      }
      catch(err) {
           reject(err.message);

      }
          });
    }   
          
          Eliminar() {

             var objetoaenviar = this;
        return new Promise(function(resolve, reject) {
             
            try {
                 
                     var xhr = new XMLHttpRequest();
                      xhr.open('POST', 'http://localhost:8080/api/eliminaprenda');
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/Eliminapelicula');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          }
          else
              {
                 reject(xhr); 
              }
      };
      xhr.send(JSON.stringify(objetoaenviar));   
                
                
                
      }
      catch(err) {
           reject(err.message);

      }
          });
          
          
      }
      Seleccionartodos() {
        
             var objetoaenviar = this;
        return new Promise(function(resolve, reject) {

             
            try {
                 
                     var xhr = new XMLHttpRequest();
                      xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/seleccionartodos');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          }
          else
              {
                 reject(xhr); 
              }
      };
      xhr.send(JSON.stringify(objetoaenviar));   
                
                
                
      }
      catch(err) {
           reject(err.message);

      }
          });
          
          
      }
          
          
          Seleccionarporid(req,res) {
        
            var objetoaenviar = this;
        return new Promise(function(resolve, reject) {
             
            try {
                 
                     var xhr = new XMLHttpRequest();
                      xhr.open('POST', 'http://localhost:8080/api/seleccionarporid');
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/seleccionarporid');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          }
          else
              {
                 reject(xhr); 
              }
      };
      xhr.send(JSON.stringify(objetoaenviar));   
                
                
                
      }
      catch(err) {
           reject(err.message);

      }
          });
          
      }
          
          Seleccionarportipo(req,res) {

          
          
            var objetoaenviar = this;
        return new Promise(function(resolve, reject) {
             
            try {
                 
                     var xhr = new XMLHttpRequest(); 
                     xhr.open('POST', 'http://localhost:8080/api/seleccionarportipo'); //llama al servidor
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/seleccionarpornombre');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              resolve(JSON.parse(xhr.responseText));
          }
          else
              {
                 reject(xhr); 
              }
      };
      xhr.send(JSON.stringify(objetoaenviar));   
                
                
                
      }
      catch(err) {
           reject(err.message);

      }
          });
          
      }

}



                  
            let imagenenbase64 = "";
            $("#imgprenda").change(function(){
             readURL(this);
       });
          
              function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
          
           
                var departamentos = new Object();

                 var asientoA1 = new Object();
                  asientoA1.NOMBREESTUDIANTE = null;
                  asientoA1.SECCION=null;
                  asientoA1.CARNET=null;
                  asientos.A1= asientoA1;
                  
                  
                  var asientoA2 = new Object();
                  asientoA2.NOMBREESTUDIANTE = null;
                  asientoA2.SECCION=null;
                  asientoA2.CARNET=null;
                  asientos.A2= asientoA2;

                  
                  var asientoA3 = new Object();
                  asientoA3.NOMBREESTUDIANTE = null;
                  asientoA3.SECCION=null;
                  asientoA3.CARNET=null;
                  asientos.A3= asientoA3;

                  
                  var asientoA4 = new Object();
                  asientoA4.NOMBREESTUDIANTE = null;
                  asientoA4.SECCION=null;
                  asientoA4.CARNET=null;
                  asientos.A4= asientoA4;
                   
                  
function botonguardarclick(){
                    var prendainstanciada = new _Pelicula(0,
                    document.getElementById("tipo").value,                    
                    document.getElementById("departamento").value,
                    document.getElementById("precio").value,
                    imagenenbase64,
                    document.getElementById("estado").value
                      );
                                                              
                      peliculainstanciada.Guardar().then(function(response){
                        console.log("SUCCESS!",response);
                        alert("Guardado con exito");
                      },function(error){
                        console.erro("CRITICAL ERROR",error);
                        alert("Error"+error);
                      });                                       
                                                              
                  }

//Funciones de mostrar departamento
function agregaimgdeprendaldiv(imgenbase64,iddeldiv,iddelaprenda)  //  Primero llega a la funcion de abajo cargarpeliculasdelmesyanno

    {
        document.getElementById(iddeldiv).innerHTML += "<img src='"+imgenbase64+"' height='42' width='42' id= "+iddelaprenda+" onclick='cargaprendas(\""+iddelaprenda+"\")'>"; //  El fec dentro del getElementById es porque solo reconoce los numeros y hay que concatenar el fec
    }

    
function cargaprendas(id){


             let claseprendainstanciada = new _Underwear(id);
               claseprendainstanciada.Seleccionarporid().then(function(response) {



               localStorage.setItem("prendaseleccionada",JSON.stringify(response));
                   location.href="underwear.html" // al apretar la imagen se ve todo el departamento
}, function(error) {
 console.log(error);
});
}
    