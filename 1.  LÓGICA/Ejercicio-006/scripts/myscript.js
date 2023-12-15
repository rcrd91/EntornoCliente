/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
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

let catetoA=pedirDato(`Ingrese primer cateto`, "flotante")
let catetoB=pedirDato(`Ingrese segundo cateto`, "flotante")
let hipotenusa=Math.sqrt((Math.pow(catetoA,2)) + (Math.pow(catetoB,2)));

console.log(`La hipotenusa del triángulo con catetos ${catetoA} y ${catetoB} es: ${hipotenusa}`)



