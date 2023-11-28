/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la consola el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que:
*                   - la división entre los números puede dar un número con muchos decimales
*                     ¿Cómo podríamos limitar el número de decimales que se mostrarán?
*                   - ¿Qué pasaría en la division si numero2=0 ?
*
***************************************************************************************************************/

// Dado que muchos ejercicios piden datos, sería aconsejable crear una función con dos parametros:
// el mensaje a mostrar y el tipo de datos a pedir. Después ya sólo tenemos que usarla

function pedirDato(msg, tipo) {
    let centinela;
    let dato;
    do {
      dato = prompt(msg);
      if (tipo == "cadena") centinela = isNaN(dato) ? true : false;
      if (tipo == "entero")
        centinela =
          !isNaN(dato) && Number.isInteger(parseFloat(dato)) ? true : false;
      if (tipo == "flotante")
        centinela =
          !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
      if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
    } while (!centinela);
    return dato;
}

let numero1=prompt("Ingresa un número entero", "entero")
let numero2=prompt("Ingresa un número entero", "entero")

let suma = numero1+numero2;
let resta = numero1-numero2;
let producto = numero1*numero2;
let division = numero1/numero2;

let salida=""
if(numero2==0)
    salida=`No se puede dividir entre 0`
else {
    salida+=`La suma de ${numero1} y ${numero2} es: ${suma} \b`
    salida+=`La resta de ${numero1} y ${numero2} es: ${resta} \b`
    salida+=`El producto de ${numero1} y ${numero2} es: ${producto} \b`
    salida+=`La division de ${numero1} entre ${numero2} es: ${division}`
}
console.log(salida)
