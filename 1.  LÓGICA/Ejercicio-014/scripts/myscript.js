/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/

let salida = ""
let cadena = prompt(`Ingrese cadena`)

while (cadena != "cancelar") {
    salida += `${cadena} <br>`
    cadena = prompt(`Ingrese cadena`)
}

document.write(cadena)
            