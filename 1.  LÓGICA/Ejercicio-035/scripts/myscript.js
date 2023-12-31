/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*   Nota: Emplear una funcion a la que se le pasen dos parámetros, peso y altura, que imprima la salida
*         Si nos vieramos en la necesidad de que una función devolviera varios datos ¿cómo podríamos hacerlo?
*
***************************************************************************************************************/

function calcularIMC(peso, estatura) {
    const imc = peso / (estatura * estatura);
    const riesgo = (imc <= 22.0) ? (edad < 45 ? "bajo" : "medio") : (edad < 45 ? "medio" : "alto");
    
    return { imc: imc.toFixed(2), riesgo };
}
  
function mostrarResultadoIMC(peso, estatura) {
    const { imc, riesgo } = calcularIMC(peso, estatura);
    console.log(`Tu índice de masa corporal es ${imc}. Tienes un riesgo ${riesgo} de enfermedad coronaria.`);
}
  
const pesoUsuario = 70; // En kilogramos
const estaturaUsuario = 1.75; // En metros
  
mostrarResultadoIMC(pesoUsuario, estaturaUsuario);
  