/***************************************************************************************************************
*  
*   Objetivo: Eliminar caracteres expeciales de una cadena. Se permiten 
*             guion, subrayado y espacios
*
*
*
*   Entrada : cadena
*
*
*   Salida  : cadena sin . ! @ # $ % & \ * ( )
*
*
***************************************************************************************************************/

let cadena = "abc's test#s";
alert(cadena.replace(/[^a-zA-Z ]/g, ""));
