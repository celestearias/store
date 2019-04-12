 class _adm {
         constructor(_id, 
          _NOMBRE,
          _CLAVE,
          _EMAIL,
          _IMAGEN,
          _ESTADO
                  ) {
             this._id=_id;
          this._NOMBRE=_NOMBRE;
          this._CLAVE=_CLAVE;
          this._EMAIL=_EMAIL;
          this._IMAGEN=_IMAGEN;
          this._ESTADO=_ESTADO;
         }
      Guardar() {
         var objetoaenviar = this;
        return new Promise(function(resolve, reject) {
            try {
                 
                     var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/nuevoadm'); //nuevoadmin viene del archivo routes
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
      Login(){
        var objetoaenviar=this;
        return new Promise(function(resolve,reject){
          try{
            var xhr= new XMLHttpRequest();
            xhr.open('POST','/api/loginadm');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload=function(){
              if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
              }
              else{
                reject(xhr);
              }
            };
            xhr.send(JSON.stringify(objetoaenviar));
          }
          catch(err){
            reject(err.message);
          }
        });
      }
}//class

 function logout(){
      localStorage.removeItem("Usuariologueado"); 
      location.href=("indexsinloguear.html");
    }

