const $d = document,
      $generar=$d.querySelector("#generar"),
      $resultado = $d.querySelector("#resultado"),
      $portapapeles = $d.querySelector("#portapapeles"),
      $valueLongitud = $d.querySelector("#longitud"),
      $checkMayusculas = $d.querySelector("#mayusculas"),
      $checkMinusculas = $d.querySelector("#minusculas"),
      $checkNumeros = $d.querySelector("#numeros"),
      $checkSimbolos = $d.querySelector("#simbolos");


//Variables
const mayusculas = "QWERTYUIOPASDFGHJKLZXCVBNM"
const minusculas = "qwertyuiopasdfghjklzxcvbnm"
const numeros = "1234567890"
const simbolos = "!·$%&/()=?¿;:_-.,€"


//Si click en Generar Contraseña
$generar.addEventListener("click",(e)=>{

  let contraseña = ""

  let longitud= parseInt($valueLongitud.value) 

    if(longitud > 0){

        while (contraseña.length<longitud) {

          //Mayúsculas
          if ($checkMayusculas.checked) {
              //Caracter aleatorio
              let mayus = mayusculas.charAt(Math.floor(Math.random()* mayusculas.length));
              contraseña+=mayus; 
          }

          //Minúsculas
          if ($checkMinusculas.checked) {
              let minus = minusculas.charAt(Math.floor(Math.random()*minusculas.length));
              contraseña+=minus;
          }

          //Números
          if ($checkNumeros.checked) {
              let num = numeros.charAt(Math.floor(Math.random()*numeros.length));
              contraseña+=num;       
          }

          //Símbolos
          if ($checkSimbolos.checked) {
              let simb = simbolos.charAt(Math.floor(Math.random()*simbolos.length));
              contraseña+=simb;
          }
        }

      if (contraseña.length>=longitud) {
        contraseña=contraseña.split("").slice(0,longitud)
      }

      let nuevaClave=""

      do {
          let posicion=Math.floor(Math.random()*contraseña.length) //Posición aleatoria
          nuevaClave+=contraseña[posicion]
          contraseña.splice(posicion,1)
      } while (contraseña.length>0)

      //Inner
      $resultado.innerHTML=nuevaClave
    }
})

