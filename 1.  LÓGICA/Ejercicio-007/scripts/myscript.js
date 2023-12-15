/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : Número decimal
*
*
*   Salida  : Númeero decimal (2 dígitos como máximo en la parte decimal)
*             Ejemplo: Fahrenheit=100, Celsius=38.33
*
*   Notas: Emplear una funcion con un parámetro
*
***************************************************************************************************************/

let fah;
    
while (isNaN(fah = parseInt(prompt(`Ingrese temperatura en Fahrenheit`))));
    
function fahToCel(fah) {
    return 0.5556 * (fah - 32); 
}

let resultado = fahToCel(fah)

switch (true) {
    case (resultado <0):
        console.log(`Temperatura inferior a 0 grados`); 
        break;
    case (resultado <10 && resultado >= 0):
        console.log(`Temperatura inferior a 10 grados`); 
        break;
    case (resultado >=10 && resultado >= 25):
        console.log(`Temperatura mayor o igual a 25 grados`)
        break;
}
