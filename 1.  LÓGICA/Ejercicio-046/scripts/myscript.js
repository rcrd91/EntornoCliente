/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
*
*
***************************************************************************************************************/

const entrada = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

let mayor = Math.max(...entrada)
console.log(`El número mas alto es ${mayor}`) 

let menor = Math.min(...entrada)
console.log(`El número mas bajo es ${menor}`)

let sum = entrada.reduce((previous, current) => current += previous);
let avg = parseInt(sum / entrada.length);
console.log(`El promedio es ${avg}`);
