/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número (positivo o negativo) tras otro al usuario hasta que ingresamos el número 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*   Nota:   : ¿Es necesario almacenar los números en un array?
*
***************************************************************************************************************/

 
const entrada = [];

let num = parseInt(prompt(`Ingrese número ${entrada.length +1 }`))

while (num != 0) {
    entrada.push(num)
    num = parseInt(prompt(`Ingrese número ${entrada.length +1 }`))
}

let mayor = Math.max(...entrada)
console.log(`El número mas alto es ${mayor}`)
