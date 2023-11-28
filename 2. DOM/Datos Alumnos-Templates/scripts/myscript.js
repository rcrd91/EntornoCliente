const $d=document,
      $formulario = $d.forms[0],
      $contactos = $d.querySelector("tbody");
      $submit = $d.querySelector("#add"),
      datosContactos=[];

// Con template
function render(datosUsuarios) {
  const $tabla = $contactos.getElementsByTagName("table")[0];
  const $template=$d.querySelector("#template-fila").content
  const $fragmento = $d.createDocumentFragment()

  $contactos.innerHTML=""
  datosUsuarios.forEach(usuario =>{
    let $clon = $template.cloneNode(true)
    const $celdas = $clon.querySelectorAll("td")
    Object.values(usuario).forEach((val, indice)=>{
        $celdas[indice].append(val)
    })
    $celdas[$celdas.length-1].querySelectorAll("a").forEach(enlace =>{
        enlace.setAttribute("data-row",i)
    })
    $fragmento.append($clon)
  })
  $contactos.append($fragmento)
}

function addContact(e) {
  e.preventDefault();

  const datos = {
    nombre:$formulario.nombre.value,
    apellidos:$formulario.apellidos.value,
    email:$formulario.email.value,
    fechaNacimiento:$formulario.fechaNacimiento.value,
    telefono:$formulario.telefono.value,
    sexo:$formulario.hombre?"Hombre":"Mujer",
    estudios:$formulario.estudios.options[$formulario.estudios.selectedIndex].textContent,
  };
  datosContactos.push(datos)
  render(datosContactos);
  $formulario.reset()
}

function procesaAccion(e) {
    e.preventDefault()
    switch(e.target.textContent) {
        case "Delete":
            datosContactos.splice(e.target.getAttribute("data-row"),1)
            render(datosContactos)
        case "Update":
            $formulario.nombre.value = datosContactos[e.target.getAttribute("data-row")].nombre
            $formulario.apellidos.value = datosContactos[e.target.getAttribute("data-row")].apellidos
            $formulario.email.value = datosContactos[e.target.getAttribute("data-row")].email
            $formulario.fechaNacimiento.value = datosContactos[e.target.getAttribute("data-row")].fechaNacimiento
            $formulario.telefono.value = datosContactos[e.target.getAttribute("data-row")].telefono
            datosContactos[e.target.getAttribute("data-row")].sexo=="Hombre"?$formulario.hombre.checked:$formulario.mujer.checked
            $formulario.estudios.options[$formulario.estudios.selectedIndex].textContent,
            $formulario.estudios.options.forEach((option,i) =>{
                if (option.textContent == datosContactos[e.target.getAttribute("data-row")].estudios)
                $formulario.estudios.selectedIndex = i
            })

            $submit.textContent = "Actualizar"
    }
}

$formulario.addEventListener("submit", addContact);
$contactos.addEventListener("click", procesaAccion);
