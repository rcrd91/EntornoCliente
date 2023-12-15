/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/ 

let porcentaje = parseInt(prompt(`Ingrese porcentaje`));
let salida

switch(true) {
    case porcentaje <= 100 && porcentaje >= 90:
        salida = "El examen se cualifica con un A"
        break;
    case porcentaje >= 80 && porcentaje <= 90:
        salida = "El examen se cualifica con un B"
        break;
    case porcentaje >= 70 && porcentaje <= 79:
        salida = "El examen se cualifica con un C"
        break;
    case porcentaje >= 60 && porcentaje <= 69:
        salida = "El examen se cualifica con un D"
        break;
    case porcentaje <= 59 && porcentaje >= 0:
        salida = "El examen se cualifica con un E"
        break;
} 

console.log(salida)
        
 




