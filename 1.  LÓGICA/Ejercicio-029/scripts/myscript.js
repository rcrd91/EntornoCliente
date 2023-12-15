/***************************************************************************************************************
*  
*   Objetivo: n es pandigital si contiene al menos una vez todos los digitos del 0 al 9
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let numStr1 = '47458892414';
let numStr2 = '53657687691428890';

let isPandigital = numStr => {
   let legend = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   for(let i = 0; i < numStr.length; i++){
      if(!legend.includes(numStr[i])){
         continue;
      };
      legend.splice(legend.indexOf(numStr[i]), 1);
   };
   return !legend.length;
};

console.log(isPandigital(numStr1)); //falso
console.log(isPandigital(numStr2)); //verdadero
