/***************************************************************************************************************
*  
*   Objetivo: Solicita la fecha de nacimiento de una persona (dia/mes/año) y calcule el número de la suerte
*             El número de la suerte se calcula sumando las cifras obtenidas en la suma
*             Por ejemplo: si la fecha de nacimiento es el 12/07/1980
*                                  12/07/1980 = 1999
*                                  1+9+9+9 = 28    
*                                  2+8 = 10
*                                  1+0 = 1   <---- Número de la suerte
*
*   Entrada : dia/mes/anho
*
*
*   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
*            
*
***************************************************************************************************************/

function calcularNumeroSuerte(fecha) {
    
    const numeros = fecha.split('/').join(''); 
    let sumaDigitos = 0;
  
    while (numeros.length > 1) {
      sumaDigitos = 0;
      for (let i = 0; i < numeros.length; i++) {
        sumaDigitos += parseInt(numeros[i]);
      }
      numeros = sumaDigitos.toString(); 
    }
  
    return sumaDigitos;
}
  
function obtenerNumeroSuerte(dia, mes, anho) {
    const fecha = `${dia}/${mes}/${anho}`;
    const numeroSuerte = calcularNumeroSuerte(fecha);
    console.log(`Como has nacido el ${dia} de ${mes} de ${anho}, tu número de la suerte es ${numeroSuerte}`);
}
  
const diaNacimiento = 12;
const mesNacimiento = 7;
const anhoNacimiento = 1980;
  
obtenerNumeroSuerte(diaNacimiento, mesNacimiento, anhoNacimiento);
  