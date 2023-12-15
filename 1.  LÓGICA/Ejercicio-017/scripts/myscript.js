/***************************************************************************************************************
*  
*   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let nombre = prompt("Nombre:")
let edad = prompt("Edad:")

const persona = {
    name:nombre,
    age:edad,
    mayorEdad: function() {
        return (this.age >= 18)
    }
};

if (persona.mayorEdad()) 
    console.log(`${persona.name} é maior de idade`)
else
    console.log(`${persona.name} é menor de idade`) ;
