/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
*
*
*   Entrada : edad
*
*
*   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
*             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
*             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
*
*   Notas   : Debemos comprobar si:
*                   - La edad es un número entero mayor que 0 (indicaremos el error)
*                   - La edad no puede ser superior a 120 (indicaremos el error)
*
***************************************************************************************************************/

let edad;
    
while (isNaN(edad = parseInt(prompt(`Ingrese una edad`, `Edad`))));

if (edad==0) {
    console.log(`Error: Edad tiene que ser mayor a 0`)
} else if (edad >120) {
    console.log(`Error: Edad superior a 120`) 
} else if (edad <30) {
    console.log(`! Ponte a trabajar !`); 
} else if (edad >=30 && edad <=64) { 
    console.log(`¡ Que ganas tengo de jubilarme !`); 
} else if (edad >65) { 
    console.log(`¡ Descansa un poco !`);
} 

