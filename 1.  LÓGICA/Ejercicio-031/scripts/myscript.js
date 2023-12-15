/***************************************************************************************************************
*  
*   Objetivo: Funcion que devuelve un objeto con la frecuencia de cada vocal en una frase
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
*
*
*
***************************************************************************************************************/

let frase = prompt("Ingresa una frase:");

function contar(frase) {

    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;

    for (let p = 0; p < frase.length; p++) {
        switch(frase[p]) {
            case 'a': a++
                break;
            case 'e': e++
                break;
            case 'i': i++
                break;
            case 'o': o++
                break;
            case 'u': u++
                break;
        }
    }
   console.log("a:"+a + " e:"+e + " i:"+i + " o:"+o + " u:"+u );
}

contar(frase);  


