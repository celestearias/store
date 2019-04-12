 class _Prendas {
         constructor(_id, //aqui si se llena el constructor que habiamos dejado en el back end
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
        //xhr.open('POST', 'https://bbceles.herokuapp.com/api/nuevaprenda');
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
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/modifiprenda');
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
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/eliminaprenda');
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
      //xhr.open('POST', 'https://bbceles.herokuapp.com/api/seleccionarportipo');
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
                   
                  
function botonguardarclick(){
                    var prendainstanciada = new _Prendas(0,
                    document.getElementById("tipo").value0,   
                    document.getElementById("departamento").value,                 
                    document.getElementById("precio").value,
                    imagenenbase64,
                    document.getElementById("estado").value,
                      );
                                                              
                    prendainstanciada.Guardar().then(function(response){
                        console.log("SUCCESS!",response);
                        alert("Guardado con exito");
                      },function(error){
                        console.erro("CRITICAL ERROR",error);
                        alert("Error"+error);
                      });                                       
                                                              
                  }

/*Funciones de mostrar departamento
function agregaimgdeprendaldiv(imgenbase64,iddeldiv,iddelaprenda){  // para mostrar las imagenes en los cuadros
        document.getElementById(iddeldiv).innerHTML += "<img src='"+imgenbase64+"' height='42' width='42' id= "+iddelaprenda+" onclick='cargaprendas(\""+iddelaprenda+"\")'>"; //  El fec dentro del getElementById es porque solo reconoce los numeros y hay que concatenar el fec
    }

    
function cargaprendas(id){

  let claseprendainstanciada = new _Prendas(id);
  claseprendainstanciada.Seleccionarporid().then(function(response) {



               localStorage.setItem("prendaseleccionada",JSON.stringify(response));
                   location.href="catalogo.html" // al apretar la imagen se ve todo el departamento
}, function(error) {
 console.log(error);
});
}

function cargarprendasentable(){
  let claseprendainstanciada = new _Prendas();
    claseprendainstanciada.cargarprendasentable(document.getElementById("total").value).then(function(response) {
                             
    for(var elemento in response){
      
    }
                             
                             
                             
                             
          }, function(error) {
           console.log(error);
          });
    }*/

    function logout(){
      localStorage.removeItem("Usuariologueado"); 
      location.href=("indexsinloguear.html");
    }

    