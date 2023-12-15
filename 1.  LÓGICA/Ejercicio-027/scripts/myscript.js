/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : nfilas, ncols (números enteros)
*
*
*   Salida  : tabla html con nfilas y ncols. Cada celda contendrá el producto del número de fila por la columna
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
  
function leerDato(msg){
    let num
    do{
        num = pedirDato(msg,"entero")
    } while(num < 1 || num > 20)
    return num
}

let filas = leerDato("Numero de filas: ")
let columnas = leerDato("Numero de columnas: ")

function tabla(filas,columnas){
    let tabla = `<table>`
    for(i = 1; i <= filas; i++){
        tabla += `<tr>`
        for(j = 1; j <= columnas; j++)
            tabla += `<td>${i*j}</td>`
        tabla += `</tr>`
    }
    tabla += `</table>`
    return tabla
}

document.getElementById("tabla").innerHTML=tabla(filas,columnas)