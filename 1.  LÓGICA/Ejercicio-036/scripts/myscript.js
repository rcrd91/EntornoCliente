/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semana/s, B día/s, C hora/s, D minuto/s, E segundo/s"
*             Para 183901 segundos la salida sería: "Hemos estado confinados 0 semanas, 2 días, 3 horas, 5 minutos, 1 segundo"
*
*   Nota: Emplear una funcion
*
***************************************************************************************************************/

let entrada

do{
    entrada = prompt("Introduce los segundos")
} while(isNaN(entrada))

let nSegundos = [3600 * 24 * 7,3600 * 24,3600,60,1]
let tiempo = ["semanas","dias","horas","minutos","segundos"]


function calculoRecursivo(entrada, i) {
    console.log(parseInt(entrada/nSegundos[i]))
    if (nSegundos[i] === 1)
       return entrada
    else
       return calculoRecursivo(entrada%nSegundos[i],i+1)
}

calculoRecursivo(entrada, 0)
