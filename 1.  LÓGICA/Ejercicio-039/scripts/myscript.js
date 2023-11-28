/***************************************************************************************************************
*  
*   Objetivo: Damo mes y año, determinar si el mes tiene un Viernes 13
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

function viernes13(mes,anho) {
    let fecha=new Date(anho,mes-1,13)
    return fecha.getDay()===5
}

let mes=parseInt(prompt("Dame un mes (1:enero,2:febrero,....)"))
let anho=parseInt(prompt("Dame un año"))

console.log(`El mes ${mes.toString().padStart(2,"0")} del año ${anho} ${viernes13(mes,anho)?"tiene Viernes 13":"no tiene Viernes 13"}`)