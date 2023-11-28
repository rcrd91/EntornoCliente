const $d = document,
      $formulario = $d.querySelector("#libro-form"),
      $titulo = $d.querySelector("#titulo"),
      $autor = $d.querySelector("#autor"),
      $isbn = $d.querySelector("#isbn"),
      $tbody = $d.querySelector("#lista-libros"),
      $templateLibro = $d.querySelector("#template-libro").content

$d.addEventListener("DOMContentLoaded",getLibros)

// 1
function ajax(options) {
    let {url,metodo,fExito,fError,datos}=options

    fetch(url,{
        method:metodo||"GET",
        headers:{"Content-type":"application/json; charset=utf-8"},
        body:JSON.stringify(datos)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>{
        let mensaje=error.statusText||"Ocurrio un error"
        fError({status:error.status,statusText:mensaje})
    })
}


// 2
function getLibros(){
    ajax({
        url:"http://localhost:3000/libros",
        fExito:libros => {
            console.log(libros)
            renderLibros(libros)
        },
        fError:(error)=>console.log(error)
    })
}


// 3
function renderLibros(libros){
    const $fragmento = $d.createDocumentFragment()

    libros.forEach(libro=>{
        $clon = $templateLibro.cloneNode(true)
        $tds = $clon.querySelectorAll("td")
        $tds[0].textContent=libro.titulo
        $tds[1].textContent=libro.autor
        $tds[2].textContent=libro.isbn
        $a= $tds[3].querySelector("a")
        $a.dataset.id = libro.id    
        $fragmento.appendChild($clon)
    })
    $tbody.appendChild($fragmento)
}


// 4
$formulario.addEventListener("submit", evento => {
    evento.preventDefault(); 
  
    const nuevoLibro = {
        titulo: $titulo.value,
        autor: $autor.value,
        isbn: $isbn.value
    };

    ajax({
        url:`http://localhost:3000/libros?isbn=${$isbn.value}`,
        fExito:(json)=>{
            if (json.length) {
                ajax({
                    url: `http://localhost:3000/libros/${json[0].id}` , 
                    metodo: "PATCH", 
                    datos: nuevoLibro, 
                    fExito: libro => {
                      //console.log(libro)
                    },
                    fError: error => console.log(error)
                  });   
            } 

            else {
                ajax({
                    url: "http://localhost:3000/libros/",
                    metodo: "POST", 
                    datos: nuevoLibro, 
                    fExito: libro => {
                        //console.log(libro)
                    },
                    fError: error => console.log(error)
                }); 
            }
        },
        fError:error=>console.log(error)
    })
});
  

// 5
$tbody.addEventListener("click",evento=>{

    evento.preventDefault()
    
    if (evento.target.dataset.id) {
        ajax({
            url: "http://localhost:3000/libros/" + evento.target.dataset.id,
            metodo: "DELETE",
            fExito: (respuesta) => {
                console.log(respuesta);
                location.reload();
            },
            fError: (error) => console.log(error)
        });
    }
})
