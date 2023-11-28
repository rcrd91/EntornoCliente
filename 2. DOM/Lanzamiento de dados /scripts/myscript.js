const $d=document,
      $imagen1 = $d.querySelector(".img1"),
      $imagen2 = $d.querySelector(".img2"),
      $boton = $d.querySelector("#jugar"),
      $h1 = $d.querySelector("h1"),
      $victoria1 = $d.querySelector(".victoria1"),
      $victoria2 = $d.querySelector(".victoria2");

function tirar(max) {
  return Math.floor(Math.random() * max)+1;
}

function lanzarDados() {
  let dado1 = tirar(6);
  let dado2 = tirar(6);
  
  if(dado1 > dado2){
    $h1.innerHTML = "&#x1F6A9; Jugador1 gana";
    $victoria1.innerHTML = parseInt($victoria1.innerHTML) +1
  } else if(dado2 > dado1){
    $h1.innerHTML = "Jugador2 gana &#x1F6A9;";
    $victoria2.innerHTML = parseInt($victoria2.innerHTML) +1
  } else {
    $h1.innerHTML = "&#x1F6A9; Empatamos &#x1F6A9;";
  }
  
  $imagen1.src=`imagenes/dado${dado1}.png`
  $imagen2.src=`imagenes/dado${dado2}.png`
}

$boton.addEventListener("click",lanzarDados)

$d.addEventListener("DOMContentLoaded",lanzarDados)

