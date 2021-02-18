// Maria Cristal Valdez Leonardo #24 #5tob


const saludar = (nombre) =>  {
    console.log ('creando etiqueta h1, en el html');
// Comentario de una sola linea.
// El codigo comentado no lee el interprete de JS.

/* 
Comentario de varias lineas.
Uso basico del DOCUMENTO OBJECT MODEL (DOM)
permite a JS modificar el html.
*/

const h1= document.createElement('h1')
h1.innerText = ´Hola, $ {  nombre } ´ ;
document.body.append(h1)
}
const user = "Juancho";
saludar (user);
