/***************************************************************************************************************
*  
*   Objetivo: MiniSudoku 3x3. Un sudoku es una cuadricula 9x9 con cuadriculas cuadradas 3x3. El Sudoku estará completo
*             cuando relleanmos cada cuadricula 3x3 con número de 1 a 9, de forma que cada fila y cada columna de la
*             cuadricula 9x9 también está formada por números de 1 a 9.
*             Crea una funcion que compruebe si la cuadricula 3x3 contiene todos y cada uno de los número del 1 al 9
*
*   Entrada : 
*
*
*   Salida  : true, false
*
*
***************************************************************************************************************/


function verificarCuadricula3x3(cuadricula) {
    const numeros = cuadricula.flat(); 
    return numeros.sort().join('') === '123456789'; 
}
  

  const cuadriculaEjemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(verificarCuadricula3x3(cuadriculaEjemplo)); 
  