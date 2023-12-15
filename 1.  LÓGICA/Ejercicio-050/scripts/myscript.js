/***************************************************************************************************************
*  
*   Objetivo: Formula de Legendre  ep(n!)=[27/2]+[27/2²]+[27/2³]+[27/2⁴]=13+6+3+1=23
*
*
*   Entrada : p y n, dos enteros positivos
*
*
*   Salida  : Si p>n, devuelve 0. 
*
*
***************************************************************************************************************/

function calcularEp(p, n) {
    if (p > n) {
      return 0;
    }
  
    let resultado = 0;
    let base = 2;
    let potencia = 1;
  
    while (potencia <= n) {
      const valor = Math.floor((p + potencia) / base);
      resultado += valor;
      base *= 2;
      potencia++;
    }
  
    return resultado;
}
  
const p = 3;
const n = 4;
const resultado = calcularEp(p, n);

console.log(`Para p = ${p} y n = ${n}, el resultado es: ${resultado}`);
  