/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores, empezando con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,1,2,3,5,8,13,....
*
*   Notas:  ¿Cómo hacerlo de forma iterativa?
*           ¿Cómo hacerlo de forma recursiva?
*
***************************************************************************************************************/

function fibonacciIterativo1(limite) {
    let fib = [0, 1];
    for (let i = 2; i <= limite; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib
}

function fibonacciIterativo2(limite) {
    if (limite == 0)
      return 0
    if  (limite == 1)
      return "0 1"

    let salida = "0 1 "
    let fib0 = 0
    let fib1 = 1
    let fib
    let i = 2

    do {
        fib = fib0+fib1
        salida += `${fib} `
        fib0 = fib1
        fib1 = fib
        i++
    } while (i <= limite)

    return salida
}

function fibonacciRecursivo(limite) {
    if (limite==1)
        return 1
    if (limite==0)
        return 0
    
    return fibonacciRecursivo(limite-1)+fibonacciRecursivo(limite-2)
}

let limite = prompt("Ingrese número de corte:");
//console.log(fibonacciIterativo1(limite).join(", "));
console.log(fibonacciIterativo2(limite));
console.log(fibonacciRecursivo(limite));
