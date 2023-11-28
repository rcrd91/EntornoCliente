const $d = document,
      $diaN = $d.querySelector("#dia"),
      $mesN = $d.querySelector("#mes"),
      $anhoN = $d.querySelector("#anho"),
      $edad = $d.querySelector("#edad"),
      $submit = $d.querySelector("#submit")

$submit.addEventListener("click",event=>{
    let diaN = $diaN.value 
    //console.log(diaN)
    let mesN = $mesN.value
    let anhoN = $anhoN.value

    let hoy = new Date()
    let diaH = hoy.getDate()
    //console.log(diaH)
    let mesH = 1 + hoy.getMonth() //los meses empiezan en 0. +1
    //console.log(mesH)
    let anhoH = hoy.getFullYear()

    let mes = [31,28,31,30,31,30,31,31,30,31,30,31]

    if (diaN > diaH ) {
        diaH = diaH + mes[mesH-1]
        mesH--
    }

    if(mesN > mesH) {
        mesH = mesH + 12
        anhoH--
    }

    let d = diaH - diaN
    let m = mesH - mesN
    let a = anhoH - anhoN

    $edad.innerHTML = `Tu edad es ${a} años ${m} meses ${d} días.`
})