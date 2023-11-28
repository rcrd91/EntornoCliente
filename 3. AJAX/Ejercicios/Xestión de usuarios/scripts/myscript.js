const $d = document,
      $formulario = $d.querySelector("form"),
      $nome = $formulario.nome, //input
      $apelidos = $formulario.apelidos,
      $nif = $formulario.nif,
      $email = $formulario.email,
      $engadirBtn = $formulario.querySelector("button"),
      $tbody = $formulario.querySelector("tbody"),
      $templateUsuario = $d.querySelector("#template-usuario").content


$d.addEventListener("DOMContentLoaded",getUsuarios)

// 1
function ajax(options) {
    let {url, metodo, fExito, fError, datos} = options
    
    fetch(url, {
        method:metodo||"GET",
        headers:{"Content-type":"application/json; charset=utf-8"},
        body:JSON.stringify(datos)
    })
    .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
    .then(json => fExito(json))
    .catch(error => {
        let mensaje = error.statusText||"Ocurrió un error"
        fError({ status:error.status, statusText:mensaje })
    })
}

// 2 
function getUsuarios(){
    ajax({
        url:"http://localhost:3000/usuarios",
        fExito: usuarios => {
            //console.log(usuarios)
            renderUsuarios(usuarios)
        },
        fError: error => console.log(error)
    })
}

// 3 
function renderUsuarios(usuarios) { //usuarios.json
    const $fragmento = $d.createDocumentFragment()

    usuarios.forEach(usuario => {
        $clon = $templateUsuario.cloneNode(true)
        $tds = $clon.querySelectorAll("td")
        //$tds[0].querySelectorAll("i")[0].dataset.usuarioId = usuario.id;
        //$tds[0].querySelectorAll("i")[1].dataset.usuarioId = usuario.id;
        $tds[0].querySelectorAll("i").forEach(i => i.dataset.usuarioId = usuario.id)
        $tds[1].textContent = usuario.nombre //nombre no json
        $tds[2].textContent = usuario.apellidos
        $tds[3].textContent = usuario.nif
        $tds[4].textContent = usuario.email

        $fragmento.appendChild($clon)
    });

    $tbody.appendChild($fragmento)
}


// 4. BOTÓN
$engadirBtn.addEventListener("click", e => {
    e.preventDefault()

    // 4.2 ACTUALIZAR 
    if (e.target.dataset.usuarioId) { 
        ajax({
            url:`http://localhost:3000/usuarios/${e.target.dataset.usuarioId}`, 
            metodo:"PUT",
            fExito: json => location.reload(),
            fError: error => console.log(error),
            datos: { //non recordo os nomes do json:
                nombre: $nome.value,
                apellidos: $apelidos.value,
                nif: $nif.value,
                email: $email.value
            }
        })
    } 
    
    // 4.1 AÑADIR
    else {
        const regExpresion = /^\d{8}-[a-z]$/i
        const inputsLlenos = Array.from($formulario.querySelectorAll("input")).every(input => input.value !== "");

        if (regExpresion.test($nif.value) && inputsLlenos) {
            ajax({
                url:`http://localhost:3000/usuarios?nif=${$nif.value}`,
                metodo:"GET",
                fExito: json => {
                    if (json.length) { //se devolve un resultado
                        alert("No puede haber dos usuarios con el mismo NIF")
                    } 
                    else {
                        ajax({
                            url:"http://localhost:3000/usuarios",
                            metodo:"POST",
                            fExito: json => location.reload(),
                            fError: error => console.log(error),
                            datos: {
                                nombre: $nome.value,
                                apellidos: $apelidos.value,
                                nif: $nif.value,
                                email: $email.value
                            }
                        })            
                    }
                },
                fError: error => console.log(error)
            })
        } 
        else {
            alert("Faltan datos o el NIF no tiene el formato")
        }
    }
}) 


// 5. BOTONCITOS
$tbody.addEventListener("click", e => {

    if (e.target.dataset.usuarioId) {

        //btn_actualizar
        if (e.target.classList.contains("fa-undo-alt")) { 
            //console.log(e.target.parentElement.parentElement)
            fillForm(e.target.parentElement.parentElement)
                     //<tr> que contén botoncitos,nome,apelidos,dni,email = $fila
            $tbody.querySelectorAll("i").forEach((i) => i.classList.add("off"));
        }

        // btn_borrar 
        else { 
            ajax( {
                url:`http://localhost:3000/usuarios/${e.target.dataset.usuarioId}`,
                metodo: "DELETE",
                fExito: json=>location.reload(),
                fError: error=>console.log(error)
            })
        }
    }
})


// 6. RELLENAR -> click btn_actualizar
function fillForm($fila){
    const $tds = $fila.querySelectorAll("td")

    // engadirBtn-->dataset<--btn_actualizar
    $engadirBtn.dataset.usuarioId = $tds[0].querySelector("i").dataset.usuarioId 
    $engadirBtn.textContent = "Actualizar Usuario" //td EngadirBoton-ActualizarUsuario
     
    $nome.value = $tds[1].textContent //td Nome
    $apelidos.value = $tds[2].textContent //td Apelidos
    $nif.value = $tds[3].textContent //td Nif
    $email.value = $tds[4].textContent //td Email
}
