/***************************************************************************************************************
*  
*   Objetivo: Declarar el script mediante un fichero
*             Mostrar en la consola el mensaje "Hola Mundo !"
*             Mostrar en el documenho HTML el mensaje "Hola Mundo!"
*
*   Entrada : --
*
*
*   Salida  : Hola Mundo !
*
*
***************************************************************************************************************/

console.log("Hola Mundo !");

// Para mostrarlo en el documento HTML
document.addEventListener("DOMContentLoaded", function() {
  const mensaje = document.createElement("p");
  mensaje.textContent = "Hola Mundo!";
  document.body.appendChild(mensaje);
});
