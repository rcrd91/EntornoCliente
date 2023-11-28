/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*   Notas: Emplearemos la forma "clasica" de hacerlo.
*         ¿Cómo podemos hacerlo empleando arrays haciendo uso del método map? 
*
***************************************************************************************************************/

let inicio=parseInt(prompt("Ingresa número inicial"));
let fin=parseInt(prompt("Ingresa número final"));

let salida=""
if (inicio < fin) {
    for(let i= inicio; i<=fin; i++) {
        let cuadrado = Math.pow(i, 2)
        salida+=`${cuadrado} `
    }
    console.log(salida)
}
