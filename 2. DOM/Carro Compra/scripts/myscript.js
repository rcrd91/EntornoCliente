const $d = document,
      $formPrecio = $d.querySelector(".formPrecio"),
      $columnas = $d.querySelector("div")
      
      let libros =[
        {
            titulo:"Java 17. Fundamentos práticos de programación",
            imagen:"./imagenes/libro1.jpg",
            precio: 45   
        },
        {
            titulo:"HTML y CSS",
            imagen:"./imagenes/libro2.jpg",
            precio: 35    
        },
        {
            titulo:"JavaScript",
            imagen:"./imagenes/libro3.jpg",
            precio: 94    
        }
      ]


//* Convertimos el siguiente div:
/* <div class="libro" data-id="1">
        <strong data-id="1">Java 17. Fundamentos práticos de programación</strong>
        <figure data-id="1">
            <img src="./imagenes/libro1.jpg" alt=""  data-id="1">
    </figure>
    <p class="linea" data-id="1">
        <strong data-id="1">45€</strong>
        <input type="checkbox" name="libro" id="libro1" value="45" data-id="1">
    </p>
</div>  */

//* En:
$d.addEventListener("DOMContentLoaded", e=>{
    libros.forEach((libro,indice)=>{

        let $div = $d.createElement("div")
        $div.setAttribute("data-id", indice+1)
        $div.classList.add("libro")

        let $strong1 = $d.createElement("strong")
        $strong1.setAttribute("data-id", indice+1)
        $strong1.append(libro.titulo)

        let $figure = $d.createElement("figure")
        $figure.setAttribute("data-id", indice+1)

        let $imagen = $d.createElement("img")
        $imagen.setAttribute("data-id", indice+1)
        $imagen.src = libro.imagen
        $figure.appendChild($imagen)

        let $p = $d.createElement("p")
        $p.classList.add("linea")
        $p.setAttribute("data-id", indice+1)

        let $strong2 = $d.createElement("strong")
        $strong2.setAttribute("data-id", indice+1)
        $strong2.append(libro.precio.toString()+"€")

        let $input = $d.createElement("input")
        $input.setAttribute("data-id", indice+1)
        $input.setAttribute("type","checkbox")
        $input.setAttribute("name","libro")
        $input.setAttribute("value", libro.precio)
        
        $p.appendChild($strong2)
        $p.appendChild($input)
        $div.appendChild($strong1)
        $div.appendChild($figure)
        $div.appendChild($p)
        $columnas.appendChild($div)
    })
})   

function calcularTotal(event) {
    const $checkboxes = $d.getElementsByName("libro")
    let total = 0
    for (let $checkbox of $checkboxes)
        if($checkbox.checked)
            total+= parseFloat($checkbox.value)
    $formPrecio.resultado.value = total
}

$formPrecio.addEventListener("click", event=>{
    const $libros = $d.querySelectorAll(".libro")
    let id = parseInt(event.target.getAttribute("data-id"))
    $libros[id-1].classList.toggle("seleccionado")
    if (event.target.getAttribute("type")!="checkbox")
        $libros[id-1].querySelector("input").checked=!$libros[id-1].querySelector("input").checked
    calcularTotal(event)
})

