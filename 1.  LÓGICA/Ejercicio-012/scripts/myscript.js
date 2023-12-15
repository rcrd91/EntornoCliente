/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
*
*
*   Entrada : numero entero n
*
*
*   Salida  : 0,1,2,3,4,5,....,n
*
*
***************************************************************************************************************/

let n = parseInt(prompt(`Ingrese número entero`));

let salida=""
for (let i = 0; i <= n; i++) { 
   	salida += `${i} `
} 
console.log(salida)



