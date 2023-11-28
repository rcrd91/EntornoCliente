const $d = document

$contenedor1 = $d.querySelector("#container1"),
$contenedor2 = $d.querySelector("#container2"),
$ul = $d.querySelector("ul"),
$li3 = $d.querySelector("li:nth-child(3)")
$parrafos = $d.querySelectorAll("p") //selector

primero = $contenedor1.firstElementChild
//console.log(primero)

ultimo = $contenedor1.lastElementChild.textContent
//console.log(ultimo)

//console.log($li3.previousElementSibling)

//console.log($li3.parentElement)

//console.log($contenedor1.childNodes)

//console.log($contenedor1.firstElementChild.nextElementSibling.textContent)

//console.log($contenedor1.hasChildNodes())

//console.log($contenedor1.hasChildNodes())

const $li5 = $d.createElement("li")
//const $texto = $d.createTextNode("Item 5")
//$li5.appendChild($texto)
$li5.append("Item5")
$ul.appendChild($li5)

const $liN = $d.createElement("li")
$liN.append("Insertado")
$ul.insertBefore($liN,$li3)

$ul.lastElementChild.remove()

const $parrafo = $d.createElement("p")
$parrafo.append("Parrafo sustituido")
$contenedor1.replaceChild($parrafo,$contenedor1.firstElementChild)

$li3.previousElementSibling.previousElementSibling.classList.add("blackWhite") //añade el estilo
$li3.previousElementSibling.previousElementSibling.classList.remove("blackWhite") //quita el estilo

$contenedor1.firstElementChild.nextElementSibling.backgroundColor="white"

$ul.firstElementChild.setAttribute("data-list","4")
console.log($ul.firstElementChild.getAttribute("data-list","4"))