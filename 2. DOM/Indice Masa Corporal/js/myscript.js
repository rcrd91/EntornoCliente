const $d = document,
      $altura = $d.querySelector("#altura"), //in_altura
      $peso = $d.querySelector("#peso"), //in_peso
      $submit = $d.querySelector("button"), //btn_submit
      $resultado= $d.querySelector("#resultados"), //Mostra imc
      $guiaPeso = $d.querySelector("#guia-peso") //Mostra bajopeso, normal, sobrepeso

      $submit.addEventListener("click",event=>{ 
        event.preventDefault() //Evita que ao actualizar a páxina se borre altura e peso
        let altura = parseFloat($altura.value)
        //console.log(altura)
        let peso = parseFloat($peso.value) 
        //console.log(peso)

        let imc = (peso / (altura * altura))
        
        if(imc < 18.6) {
            //Mostramos o resultado debaixo do submit "Calcular"
            $resultado.innerHTML = `IMC: ${imc.toFixed(2)} <br> Tienes bajopeso` //2 decimales
        } else if(imc >= 18.6 && imc <= 24.9){
            $resultado.innerHTML = `IMC: ${imc.toFixed(2)} <br> Tu peso es normal`
        } else {
            $resultado.innerHTML = `IMC: ${imc.toFixed(2)} <br> Tienes sobrepeso`
        }
      })

$altura.addEventListener("focus",evento=>{ //Limpia o campo altura unha vez clickemos en el
    evento.target.value="" 
})

$peso.addEventListener("focus",evento=>{ 
    evento.target.value=""
})



