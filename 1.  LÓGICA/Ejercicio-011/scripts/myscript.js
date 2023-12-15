/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*   Nota: - Resolver de forma "clasica"
*         - Resolver empleando el objeto Math
*
***************************************************************************************************************/
    
let num1 = parseInt(prompt(`Ingrese número`));
let num2 = parseInt(prompt(`Ingrese número`));
let num3 = parseInt(prompt(`Ingrese número`));

let max = Math.max(num1,num2,num3)
console.log(`El número mas alto es ${max}`)

