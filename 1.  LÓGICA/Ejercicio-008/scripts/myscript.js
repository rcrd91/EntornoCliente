/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
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

let num=pedirDato(`Ingrese un número entero`,"entero")
const isPar=(n)=>num%2===0?"par":"impar"
console.log(`Número ${n} es ${isPar(n)}`);


