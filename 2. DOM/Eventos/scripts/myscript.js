const $d = document,
        $contenedorI = $d.querySelector("#contInt"),
        $contenedorE = $d.querySelector("#contExt"),
        $enlace = $d.querySelector("a"),
        $enlaces = $d.querySelector("a")

/* $contenedorE.onclick = function (event) {
    alert("Contenedor Exterior")
}

$contenedorI.onclick = function (event) {
    event.stopPropagation() //Para que no vaya en cascada hacia arriba
    alert("Contenedor Interior")
} */


$contenedorE.addEventListener("click",event=>{
    alert("Contenedor Exterior")
})

$contenedorI.addEventListener("click",event=>{
    //event.stopPropagation()
    //alert("Contenedor Interior")
    event.preventDefault()
    alert(`${event.target.textContent}`)
})

/* $enlaces.forEach($enlace => $enlace.addEventListener("click",evento=>{
        evento.stopPropagation()
        alert(`${evento.target.textContent}`)
})) */
