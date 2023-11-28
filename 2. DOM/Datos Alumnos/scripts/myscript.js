const $d = document,
$formulario=$d.querySelector("form"),
$nombre = $formulario.querySelector("#nombre"),
$apellidos = $formulario.querySelector("#apellidos"),
$email = $formulario.querySelector("#email"),
$telefono = $formulario.querySelector("#telefono"),
$fechaNacimiento = $formulario.querySelector("#fechaNacimiento"),
$sexo=$d.getElementsByName("sexo"),
$estudios = $formulario.querySelector("#estudios"),
$tabla=$d.querySelector("table")

$formulario.addEventListener("submit",e=>{
    e.preventDefault()
    
    let $fila=$d.createElement("tr")

    let $celdaNombre=$d.createElement("td")
    $celdaNombre.append($nombre.value)
    $fila.append($celdaNombre)

    let $celdaApellidos=$d.createElement("td")
    $celdaApellidos.append($apellidos.value)
    $fila.append($celdaApellidos)

    let $celdaEmail=$d.createElement("td")
    $celdaEmail.append($email.value)
    $fila.append($celdaEmail)

    let $celdaTelefono=$d.createElement("td")
    $celdaTelefono.append($telefono.value)
    $fila.append($celdaTelefono)

    let $celdaFechaNacimiento=$d.createElement("td")
    $celdaFechaNacimiento.append($fechaNacimiento.value)
    $fila.append($celdaFechaNacimiento)
    
    let $celdaSexo=$d.createElement("td")
    let sexo
    if($sexo[0].checked){
        sexo = "Hombre"
    } else {
        sexo = "Mujer"
    }
    $celdaSexo.append(sexo)
    $fila.append($celdaSexo)

    let $celdaEstudios=$d.createElement("td")
    $celdaEstudios.append($estudios.options[$estudios.selectedIndex].textContent)
    $fila.append($celdaEstudios)

    $tabla.append($fila)
    $formulario.reset()
})
