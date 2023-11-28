const formulario = document.querySelector("form")
const nifCtl = formulario.nif
const nombreCtl = formulario.nombre
const apellidosCtl = formulario.apellidos
const domicilioCtl = formulario.domicilio
const poblacionCtl = formulario.poblacion
const provinciaCtl = formulario.provincia
const emailCtl = formulario.email
const btnAdd = formulario.querySelector("#enviar")
const ttabla = formulario.querySelector("#template-tabla")
const tbody = formulario.querySelector("tbody")
const trow = formulario.querySelector("#template-row")

//Al cargar la página
document.addEventListener("DOMContentLoaded",getSocios)


//! AJAX ----------------------------------------------------------------------------
function ajax(options) {
    let {url, metodo, fExito, fError, socios} = options

    fetch(url, {
        method:metodo||"GET",
        headers:{"Content-type":"application/json; charset=utf-8"},
        body:JSON.stringify(socios)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>{
        let mensaje = error.statusText||"Ocurrió un error"
        fError({status:error.status, statusText:mensaje})
    })
}

function inicializarFormulario(permitir){   
    enableCtl(permitir)
}


//! GET ----------------------------------------------------------------------------
function getSocios(){
    ajax({
        url:"http://localhost:3000/socios",
        fExito:(socios)=>{
            console.log(socios)
            renderRegistros(socios)
        },
        fError:(error)=>console.log(error)
    })
}


//! POST ----------------------------------------------------------------------------
function addRegistro() {
    const registro={
        nif:nifCtl.value,
        nombre:nombreCtl.value,
        apellidos:apellidosCtl.value,
        domicilio:domicilioCtl.value,
        poblacion:poblacionCtl.value,
        provincia:provinciaCtl.value,
        email:emailCtl.value,
    }

    ajax({
        url: "http://localhost:3000/socios",
        metodo: "POST",
        data: registro,
        fExito: (respuesta) => {
            console.log(respuesta);
            location.reload();
        },
        fError: (error) => console.log(error)
    });

    enableCtl(true)
}


//! CONTROL ----------------------------------------------------------------------------
function enableCtl(permitir) {
    controles=formulario.querySelectorAll("input").forEach(ctrl=>ctrl.disabled=permitir)
    nifCtl.disabled=!permitir
    nifCtl.focus()      
}


//! BLUR ----------------------------------------------------------------------------
nifCtl.addEventListener("blur",evento=>{
    if (checkNIF()) {
        ajax({
            url:`http://localhost:3000/socios?nif=${nifCtl.value}`,
            fExito:(socios)=>{
                //console.log(socios)
                if (socios.length) {
                    alert("Se cargan los socios existentes")
                    rellenarDatosFormulario(socios[0])

                    btnAdd.dataset.datoId=socios[0].id
                    enableCtl(false)
                } 
            },
            fError:(error)=>console.log(error)
        })
    }
}) 


//! CHECKS ---------------------------------------------------------------------------------
function checkNIF(){
    const expresion=/^[0-9]{8}\-[a-z,A-Z]{1}$/;
    //console.log(expresion.test(nifCtl.value))
    return nifCtl.value!=""&&expresion.test(nifCtl.value)
}

function checkNombre(){
    return nombreCtl.value!=""
}

function checkApellidos(){
    return apellidosCtl.value!=""
}

function checkEmail() {
    return emailCtl.value!=""
}

// CheckDomicilio, CheckPoblacion, CheckProvincia

function checkDomicilio(){
    return domicilioCtl.value!=""
}

function checkPoblacion(){
    return poblacionCtl.value!=""
}

function checkProvincia(){
    return provinciaCtl.value!=""
}


//! COMPROBAR ----------------------------------------------------------------------------
function comprobar() {
    return checkNIF() && checkNombre() && checkApellidos() && 
    checkEmail() && checkDomicilio() && checkPoblacion() && checkProvincia
}


//! TBODY ----------------------------------------------------------------------------
//CLICK OCULTAR LIBROS PRESTADOS
/* tbody.addEventListener("click",e=>{
    e.preventDefault()
    if (e.target.dataset.id) {
        ajax({
            url: "http://localhost:3000/socios/" + e.target.dataset.id,
            metodo: "GET",
            fExito: (respuesta) => {
                //console.log(respuesta);
                location.reload();
            },
            fError: (error) => console.log(error)
        });
    }
})
 */

//! SUBMIT ----------------------------------------------------------------------------
formulario.addEventListener("submit",e=>{
    e.preventDefault() 
    
    if (comprobar()){

        const registro={
            nif:nifCtl.value,
            nombre:nombreCtl.value,
            apellidos:apellidosCtl.value,
            domicilio:domicilioCtl.value,
            poblacion:poblacionCtl.value,
            provincia:provinciaCtl.value,
            email:emailCtl.value
        }

        if (btnAdd.dataset.datoId) {
            //PUT
            ajax({
                url:`http://localhost:3000/socios/${btnAdd.dataset.datoId}`,
                method:"PUT",
                fExito:json=>location.reload(),
                fError:error=>console.log(error),
                socios:registro
            })
        } else {
            //POST
            ajax({
                url:"http://localhost:3000/socios",
                method:"POST",
                fExito:json=>location.reload(),
                fError:error=>console.log(error),
                socios:registro
            })
        }
    } else {
        alert("Faltan datos por cubrir")
    }
})


//! RELLENAR --------------------------------------------------------------------------------
function rellenarDatosFormulario(registro){
    nifCtl.disabled=true
    nombreCtl.value=registro.nombre
    apellidosCtl.value=registro.apellidos
    domicilioCtl.value=registro.domicilio
    poblacionCtl.value=registro.poblacion
    provinciaCtl.value=registro.provincia
    emailCtl.value=registro.email
}


//! COINCIDENCIA ----------------------------------------------------------------------------
function actualiceRegistro() {
    coincidencia=registros.find(registro=>registro.nif==nifCtl.value)
    coincidencia.nombre=nombreCtl.value
    coincidencia.apellidos=apellidosCtl.value
    coincidencia.domicilio=domicilioCtl.value
    coincidencia.poblacion=poblacionCtl.value
    coincidencia.provincia=provinciaCtl.value
    coincidencia.email=emailCtl.value;

    sessionStorage.setItem("registros",JSON.stringify(registros))
}


//! RENDER ----------------------------------------------------------------------------
function renderRegistros(registros) {
    tbody.innerHTML=""
    const templateFila=document.querySelector("#template-fila").content
    registros.forEach(registro=>{
        fila=templateFila.cloneNode(true)
        socios=fila.querySelectorAll("td")
        socios[0].textContent=registro.nif
        socios[1].textContent=registro.nombre
        socios[2].textContent=registro.apellidos
        socios[3].textContent=registro.domicilio
        socios[4].textContent=registro.poblacion
        socios[5].textContent=registro.provincia
        socios[6].textContent=registro.email
        socios[8].querySelector("a").dataset.id=registro.id //! Ver libros prestados
        tbody.appendChild(fila)
    })
    const nRegistros=document.querySelector("tfoot tr th:last-child")
    nRegistros.textContent=registros.length
}
