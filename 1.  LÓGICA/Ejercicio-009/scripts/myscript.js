/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/

let num;
    
while (isNaN(nCaramelos = parseInt(prompt(`Ingrese un número de caramelos`))));
while (isNaN(nPeques = parseInt(prompt(`Ingrese un número de niños`,))));

let calc = parseInt(nCaramelos / nPeques)
let resto = nCaramelos % nPeques

console.log(`El número de caramelos por niño es: ${calc}`)
