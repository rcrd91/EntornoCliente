/***************************************************************************************************************
*  
*   Objetivo: n es automorfico si su cuadrado termina en n
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let x = parseInt(prompt("Ingrese un número entero"));

let calculo=((x*x-x)%10==0);

if(calculo==true)
	console.log("Es automórfico");
else 
	console.log("No es automórfico");	

//const esAutomorfico=numero=>Math.pow(numero,2).toString().endsWith(numero)
//console.log(`El numero ${x} ${isAutomorfico(x)?"es":"no es"} automorfico`)


