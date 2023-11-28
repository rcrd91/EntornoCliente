
const formulario=document.querySelector("#libro-form")
const titulo=document.querySelector("#titulo")
const autor=document.querySelector("#autor")
const isbn=document.querySelector("#isbn")
const tbody=document.querySelector("#lista-libros")
const templateLibro=document.querySelector("#template-libro").content

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

function renderLibros(libros){
    tbody.innerHTML=""
    const fragmento=document.createDocumentFragment()
    libros.forEach(libro=>{
        const book=templateLibro.cloneNode(true)
        const tds=book.querySelectorAll("td")
        tds[0].textContent=libro.titulo
        tds[1].textContent=libro.autor
        tds[2].textContent=libro.isbn
        const a=tds[3].querySelector("a")
        a.dataset.id=libro.id       
        fragmento.appendChild(book)
    })
    tbody.appendChild(fragmento)
}

document.addEventListener("DOMContentLoaded",e=>{

    //Se todo OK mostramos os libros
    ajax({
        url:"http://localhost:3000/libros",
        fExito:(libros)=>{
            //console.log(libros)
            renderLibros(libros)
        },
        fError:(error)=>console.log(error)
    })
})


//Cando clickemos en tbody (BORRAR)
tbody.addEventListener("click",evento=>{
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

formulario.addEventListener("submit", evento => {
    evento.preventDefault(); // Evita el comportamiento predeterminado del formulario
  
    const nuevoLibro = {
        titulo: titulo.value,
        autor: autor.value,
        isbn: isbn.value
      };

    ajax({
        url:`http://localhost:3000/libros?isbn=${isbn.value}`,
        fExito:(json)=>{
            //console.log(json.length)
            if (json.length) {
                ajax({
                    url: `http://localhost:3000/libros/${json[0].id}` , // URL para agregar un nuevo libro
                    metodo: "PATCH", // Usa el método PATCH
                    datos: nuevoLibro, // Envía los datos del libro
                    fExito: libro => {
                      console.log(libro)
                      //formulario.reset(); // Reinicia el formulario
                      //location.reload()
                    },
                    fError: error => console.log(error)
                  });   
            } else {
                ajax({
                    url: "http://localhost:3000/libros/", // URL para agregar un nuevo libro
                    metodo: "POST", // Usa el método POST
                    datos: nuevoLibro, // Envía los datos del libro
                    fExito: libro => {
                        console.log(libro)
                        //formulario.reset(); // Reinicia el formulario
                        //location.reload()
                    },
                    fError: error => console.log(error)
                }); 
            }
        },
        fError:error=>console.log(error)
    })
});
  
  