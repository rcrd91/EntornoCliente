/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*   Entrada : cadenas de texto: texto, palabra
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*   Notas: Métodos del objeto String
*
***************************************************************************************************************/

let texto = prompt("Ingrese un texto");
let palabra = prompt("Ingrese una palabra a buscar");

const posiciones=[]
let posicion = texto.indexOf(palabra);
while (posicion!=-1) {
  posiciones.push(posicion)
  posicion = texto.indexOf(palabra,posicion+palabra.length);
}
console.log(`La palabra ${palabra} se encuentra en las posiciones ${posiciones.join(", ")}`)
