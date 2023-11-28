/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                2.- Devuelve los elementos del primer array que no están en el segundo array
*                3.- Devuelve los elementos del segundo array que no están en el primer array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: .... (los elementos comunes separados por comas)
*             Elementos del primer array no presentes en el segundo array: ...
*             Elementos del segundo array no presentes en el primer array: ....
*
***************************************************************************************************************/

const LENGTH=5;

const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random());
const numeros1 = Array.from({length:LENGTH},()=>aleatorio(-100,100));
const numeros2 = Array.from({length:LENGTH},()=>aleatorio(-100,100));

//console.log(numeros);

const elementosComunes=numeros1.filter(el=>numeros2.includes(el))
const elementosNoComunes1=numeros1.filter(el=>!numeros2.includes(el))
const elementosNoComunes2=numeros2.filter(el=>!numeros1.includes(el))

console.log(`Los elementos del Array 1: ${numeros1.join(", ")}`)
console.log(`Los elementos del Array 2: ${numeros2.join(", ")}`)
console.log(`Los arrays tienen ${elementosComunes.length} elementos comunes: ${elementosComunes.join(", ")}`)
console.log(`Elementos del primer array no presentes en el segundo array: ${elementosNoComunes1.join(", ")}`)
console.log(`Elementos del segundo array no presentes en el primer array: ${elementosNoComunes2.join(", ")}`)