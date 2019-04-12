 class _usuario {
         constructor(_id, 
          _USUARIO,
          _CLAVE,
          _EMAIL
                  ) {
             this._id=_id;
          this._USUARIO=_USUARIO;
          this._CLAVE=_CLAVE;
          this._EMAIL=_EMAIL;
         }
      Guardar() {
         var objetoaenviar = this;
        return new Promise(function(resolve, reject) {
            try {
                 
                     var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/nuevous'); //nuevoadmin viene del archivo routes
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
            xhr.open('POST','/api/loginus');
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
