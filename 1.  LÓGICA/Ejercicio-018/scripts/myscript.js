/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos tipo persona (con nombre y edad) y determinar cuantos son mayores de edad
*             Devolver el promedio de todas las edades
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : --
*
*
*   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
*
*   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas 
*         La edad de la persona será un número aleatorio entero entre 1 y 100
*
***************************************************************************************************************/


let personas =[ {"nombre":"Ricardo", "edad":30},
                {"nombre":"Paco", "edad":54},
                {"nombre":"Juan", "edad":15} ]

//console.log(personas[0].edad)

let mayorEdad=0, menorEdad=0, total=0, nMayorEdad=0,nMenorEdad=0

// for of 
 for (persona of personas) {
    if (persona.edad>=18) {
        nMayorEdad++
        mayorEdad+=persona.edad
    } else {
        nMenorEdad++
        menorEdad+=persona.edad
    }
    total+=persona.edad
} 

console.log(`El promedio de las personas de mayor edad es ${mayorEdad/nMayorEdad}`)
console.log(`El promedio de las personas de menor edad es ${menorEdad/nMenorEdad}`)
console.log(`El promedio de las personas de edades es ${total/personas.length}`)

