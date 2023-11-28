/***************************************************************************************************************
*  
*   Objetivo: puntuacionGolf. En el golf cada hoyo tiene un par, es decir, el número medio de golpes que se espera hacer para meter la bola en el hoyo. 
*             Dependiendo de como de lejos, por arriba o abajo, estamos del par, la clasificacion recibirá un nombre diferente.
*             Crearemos una funcion que al pasarle el par y el número de golpes que se hicieron devuelva el nombre de la clasificacion de acuerdo con la siguiente tabla:
*
*             Golpes	    Clasificacion
*              1	         "Hole-in-one!"
*              <= par - 2	 "Eagle"
*              par - 1	     "Birdie"
*              par	         "Par"
*              par + 1	     "Bogey"
*              par + 2	     "Double Bogey"
*              >= par + 3	 "Go Home!"
*
*   Entrada : 
*
*
*   Salida  : La cadena que representa la clasificion
*     
*                puntuacionGolf(4, 1) debería devolver Hole-in-one!
*                puntuacionGolf(4, 2) debería devolver Eagle
*                puntuacionGolf(5, 2) debería devolver Eagle
*                puntuacionGolf(4, 3) debería devolver Birdie
*                puntuacionGolf(4, 4) debería devolver Par
*                puntuacionGolf(1, 1) debería devolver Hole-in-one!
*                puntuacionGolf(5, 5) debería devolver Par
*                puntuacionGolf(4, 5) debería devolver Bogey
*                puntuacionGolf(4, 6) debería devolver Double Bogey
*                puntuacionGolf(4, 7) debería devolver Go Home!
*                puntuacionGolf(5, 9) debería devolver Go Home!
*
***************************************************************************************************************/

let par = parseInt(prompt("Par"))
let ngolpes = parseInt(prompt("Número de golpes"))

function clasificacion(par, ngolpes){
    switch(true) {
        case ngolpes == 1:
            console.log("Hole-in-Hole")
            break;
        case ngolpes <= par -2:
            console.log("Eagle")
            break;
        case ngolpes - 1 == par:
            console.log("Birdie")
            break;
        case ngolpes:
            console.log("Par")
            break;
        case par + 1:
            console.log("Bogey")
            break;
        case par + 2:
            console.log("Double Bogey")
            break;
        case par >= + 3:
            console.log("Go Home!")
            break;
  }
}