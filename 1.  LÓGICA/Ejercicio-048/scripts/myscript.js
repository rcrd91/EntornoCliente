/***************************************************************************************************************
*  
*   Objetivo: n es de Harshad si es divisible por la suma de sus dígitos
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

function esNumeroHarshad(numero) {
    const digitos = numero.toString();
    const sumaDigitos = digitos.split('').reduce((suma, digito) => suma + parseInt(digito), 0);
    return numero % sumaDigitos === 0;
}
  
const numero = 18; 
console.log(`¿El número ${numero} es un número de Harshad?:`, esNumeroHarshad(numero));
  