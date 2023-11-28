const $d=document,
      $figuras = $d.querySelector("#figuras"),
      $palo = $d.querySelector("#palo"),
      $numero = $d.querySelector("#numero"),
      $addCarta = $d.querySelector("#addCarta"),
      $delCarta = $d.querySelector("#delCarta"),
      $operacion = $d.getElementsByName("operacion"),
      $ncartas = $d.querySelector("#ncartas"),
      $realizar = $d.querySelector("#btnOperar");

let cartas=[]

function renderCartas() {
    $figuras.innerHTML=""
    $ncartas.innerHTML=""
    cartas.forEach((carta,indice)=>{
        imagen=$d.createElement("img")
        imagen.src=`imagenes/${carta}.png`
        $figuras.appendChild(imagen)

        opcion=$d.createElement("option")
        opcion.value=indice+1
        opcion.textContent=indice+1
        $ncartas.appendChild(opcion)
    })
}

function addCarta(numero,palo) {
   if (cartas.includes(`${palo}${numero}`))
      alert("La carta ya esta sobre la mesa")
    else {
       cartas.push(`${palo}${numero}`)
    }
    renderCartas()
}

function sustCarta(numero,palo,posicion) {
    if (cartas.includes(`${palo}${numero}`))
       alert("La carta ya esta sobre la mesa")
     else {
        cartas[posicion-1]=`${palo}${numero}`
     }
     renderCartas()
 }
 
function insertCarta(numero,palo,posicion) {
if (cartas.includes(`${palo}${numero}`))
    alert("La carta ya esta sobre la mesa")
    else {
    cartas.splice(posicion-1,0,`${palo}${numero}`)
    }
    renderCartas()
}

function deleteCarta(numero,palo) {
    if (cartas.includes(`${palo}${numero}`)) 
    cartas.splice(cartas.indexOf(`${palo}${numero}`),1)
    else {
        alert("La carta no esta sobre la mesa")
    }
    renderCartas()
}

$addCarta.addEventListener("click",e=>{
    e.preventDefault()
    addCarta($numero.value,$palo.value)
})

$delCarta.addEventListener("click",e=>{
    e.preventDefault()
    deleteCarta($numero.value,$palo.value)
})

$realizar.addEventListener("click",e=>{
    e.preventDefault()
    if ($operacion[0].checked) 
       insertCarta($numero.value,$palo.value,$ncartas.value)
    else
       sustCarta($numero.value,$palo.value,$ncartas.value)
})



