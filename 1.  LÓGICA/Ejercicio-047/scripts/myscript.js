/***************************************************************************************************************
*  
*   Objetivo: Devolver el salto mas largo entre elementos de la version ordenada de un array
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function obtenerSaltoMasLargo(arr) {

    const arrOrdenado = arr.slice().sort((a, b) => a - b);
  
    let saltoMasLargo = 0;
  
    for (let i = 1; i < arrOrdenado.length; i++) {
        const saltoActual = arrOrdenado[i] - arrOrdenado[i - 1];
        if (saltoActual > saltoMasLargo) {
            saltoMasLargo = saltoActual;
        }
    }
  
    return saltoMasLargo;
}
  

const arrayNumeros = [4, 2, 9, 1, 7, 5];
const saltoMaximo = obtenerSaltoMasLargo(arrayNumeros);
console.log("El salto más largo entre elementos es:", saltoMaximo);
  