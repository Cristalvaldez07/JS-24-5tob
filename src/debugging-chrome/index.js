// creamos una funcion llamada repetir 
function repetir (nombre,veces) {

    /**
     * Maria Cristal Valdez Leonardo #24
     * Imprimimos el nombre con el numero de veces que indique
     * Estos son unos comentarios especiales para indicar
     * a otros programadores que hace nuestra funcion.
    @author ; Cristal_Valdez
    @version 0.1.0
    @param  {nombre}
    @param {Number} veces
    @return {None}
     */

// creamos un ciclo for
    for (let index= 1 ; index <= veces; index ++) {
      let element = document.createElement ('p');
      element.innerText = nombre ;
      document.body.appendChild (element);
      } 
    } 

      const nom = prompt ("Escribe tu nombre")
      const vcs = parseInt ( prompt ("Escribe las vcs que lo mostraras"))

      repetir (nom, vcs);
