const $d = document,
      $templateLibro = $d.querySelector("#template-libro").content,
      $librosContenedor = $d.querySelector("#libros-container").querySelector("ul"),
      $buscar = $d.forms["buscarLibros"].querySelector("input"),
      $addLibro = $d.forms["libro-add"],
      $ocultar = $d.querySelector("#ocultar")

let libros = ["Eloquent Javascript", "Scope & Closures", "Understanding ECMAScript 6"]

let $fragmento = $d.createDocumentFragment()
libros.forEach(libro => {
    let $libroClon = $templateLibro.cloneNode(true)
    $libroClon.querySelector(".titulo").append(libro)
    $fragmento.appendChild($libroClon)
})

$librosContenedor.appendChild($fragmento)

$ocultar.addEventListener("change", e=> {
    if (e.target.checked)
        $librosContenedor.style.display = "none"
    else
        $librosContenedor.style.display = "initial"
})

$addLibro.addEventListener("submit", e=> {
    e.preventDefault()
    let $libroTxt = $addLibro.querySelector("input[type='text']")
    //console.log(libroTxt)
    $nuevoLibro = $templateLibro.cloneNode(true)
    $nuevoLibro.querySelector(".titulo").append($libroTxt.value)
    $librosContenedor.appendChild($nuevoLibro)
    $libroTxt.value = ""
})

$librosContenedor.addEventListener("click", e=> {
    if (e.target.className == "borrar") {
        $li = e.target.parentElement
        $librosContenedor.removeChild($li)
    }
})

$buscar.addEventListener("keyup", e=> {
    let texto = e.target.value.toLowerCase()
    const lis = $librosContenedor.querySelectorAll("li")
    lis.forEach(li=> {
        let titulo =  li.firstElementChild.textContent.toLowerCase()
        if (titulo.indexOf(texto)!= -1) {
            li.style.display = "block"
        } else {
            li.style.display = "none"
        }
    })
})