/***************************************************************************************************************
*  
*   Objetivo: Buscar el numero perdido en un array de n elementos. 
*             Están todos los enteros en el array menos uno
*             Array desordenado
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function encontrarNumeroPerdido(arr) {
    const n = arr.length + 1;
    const sumaTotal = (n * (n + 1)) / 2;
    const sumaActual = arr.reduce((total, num) => total + num, 0);
    return sumaTotal - sumaActual;
}
  
const arrayEjemplo = [3, 7, 1, 2, 8, 4, 5];

console.log("El número perdido es:", encontrarNumeroPerdido(arrayEjemplo));
  