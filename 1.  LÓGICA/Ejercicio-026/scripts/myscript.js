/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/

let filas = parseInt(prompt("Introduce número de filas"));

function piramide() {
    let salida = '';
    for (let i = 1; i <= filas; i++) { //Eje X
        for (let j = 1; j <= i; j++) { //Eje Y
            salida+= `${i} `;
        }
        salida += '\n';
    }
    return salida
}

console.log(piramide())