/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores. 
*             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 <= numero <= 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota:  * Mostraremos el resultado de dos formas:
*            - En la consola del navagador, empleando template strings
*            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
*          * Declararemos y emplearemos funciones
*
***************************************************************************************************************/
let num;
do{
    num = parseInt(prompt(`Ingrese número entre 1 y 9`))
} while(num<1 || num>9)

let salida_consola=""
let i=1

let salida="<h1>Tabla de multiplicar</h1>"
salida+="<table>"
do{
    salida_consola+=`${num} * ${i} = ${num*i} \n`
    salida+=`<tr><td>${num}</td><td> * </td><td>${i}</td><td> = </td><td>${num*i}</td></tr> `
    i++
} while(i<=9) 
salida+="</table>"

//console.log(salida_consola)

const $contenedor=document.getElementById("contenedor")
$contenedor.innerHTML=salida
