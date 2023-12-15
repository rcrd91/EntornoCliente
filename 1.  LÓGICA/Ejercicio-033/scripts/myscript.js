/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*             ¿Podríamos resolverlo empleando métodos de Array?
*             ¿Podríamos resolverlo empleando recursividad?
*
***************************************************************************************************************/


function esPalindromo(str) {
    let strReverse = str.toLowerCase().replaceAll(" ","").split("").reverse().join("");
    return strReverse === str.toLowerCase().replaceAll(" ","")
}

let entrada=prompt("Palabra a comprobar:")
console.log(`La frase ${esPalindromo(entrada)?"es un palíndromo" : "no es un palíndromo"}`); 



