/***************************************************************************************************************
*  
*   Objetivo: Determinar en un texto el número de palabras, la primera palabra y la última
*
*   Entrada : una cadena
*
*   Salida  : Se muestra el texto(cadena) introducido por el usuario
*             Número de palabras: XXX
*             Primera palabra: YYYYY
*             Última palabra: ZZZZZ
*             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
*             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW 
*
***************************************************************************************************************/


function analizarTexto(texto) {
    const palabras = texto.trim().split(/\s+/);
    const numeroPalabras = palabras.length;
    const primeraPalabra = palabras[0];
    const ultimaPalabra = palabras[numeroPalabras - 1];
    const palabrasAscendente = palabras.slice().sort((a, b) => a.localeCompare(b));
    const palabrasDescendente = palabras.slice().sort((a, b) => b.localeCompare(a));
  
    console.log(`Texto introducido por el usuario: ${texto}`);
    console.log(`Número de palabras: ${numeroPalabras}`);
    console.log(`Primera palabra: ${primeraPalabra}`);
    console.log(`Última palabra: ${ultimaPalabra}`);
    console.log(`Palabras ordenadas de la a a la z: ${palabrasAscendente.join(' ')}`);
    console.log(`Palabras ordenadas de la z a la a: ${palabrasDescendente.join(' ')}`);
}
  
const textoUsuario = "Esta es una prueba de texto para contar palabras y ordenarlas";
analizarTexto(textoUsuario);
  