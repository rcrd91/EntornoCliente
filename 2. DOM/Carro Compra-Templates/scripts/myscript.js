const $d=document,
      $formPrecio=$d.querySelector(".formPrecio"),
      $columnas=$formPrecio.querySelector("div"),
      $templateLibro=$d.querySelector("#template-libro").content

    let libros=[
        {
            titulo:"Java 17. Fundamentos prácticos de programación",
            imagen:"./imagenes/libro1.jpg",
            precio:45
        },
        {
            titulo:"HTML y CSS",
            imagen:"./imagenes/libro2.jpg",
            precio:35
       },
       {
            titulo:"JavaScript",
            imagen:"./imagenes/libro3.jpg",
            precio:94
       }
      ]

$d.addEventListener("DOMContentLoaded",e=>{
    let $fragmento=$d.createDocumentFragment()
    libros.forEach((libro,indice)=>{
        let $clon=$templateLibro.cloneNode(true)
        $clon.querySelector("div").setAttribute("data-id",indice+1)
        let $tituloPrecio=$clon.querySelectorAll("strong")
        $tituloPrecio[0].append(libro.titulo)
        $tituloPrecio[1].append(libro.precio+"€")
        $clon.querySelector("img").src=libro.imagen
        $clon.querySelector("input").setAttribute("value",libro.precio)
        $fragmento.appendChild($clon)
    })
    $columnas.appendChild($fragmento)
})

function calcularTotal(event) {
    const $checkboxes=$d.getElementsByName("libro")
    let total=0
    for (let $checkbox of $checkboxes)
       if ($checkbox.checked)
            total+=parseFloat($checkbox.value)
    $formPrecio.resultado.value=total
}

$columnas.addEventListener("click",event=>{
    event.preventDefault()
    const $libros=$d.querySelectorAll(".libro")

    let padre=event.target
    while (padre.getAttribute("data-id")==null) {
        padre=padre.parentElement
    }
    padre.classList.toggle("seleccionado")
    if (event.target.getAttribute("type")!="checkbox")
        padre.querySelector("input").checked=!padre.querySelector("input").checked
    calcularTotal(event)
},true)

$formPrecio.addEventListener("reset",event=>{
    $columnas.querySelectorAll("div").forEach($libro=>{
        if ($libro.classList.contains("seleccionado"))
            $libro.classList.remove("seleccionado")
    })
})
