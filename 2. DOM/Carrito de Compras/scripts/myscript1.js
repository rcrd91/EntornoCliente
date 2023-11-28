const productos = [
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]
  
const $d = document,
    $listaProductos = $d.querySelector("#lista-productos"),
    $tproducto = $d.querySelector("#template-producto").content,
    $tproductoCarrito = $d.querySelector("#template-producto-carrito").content,
    $tfooterCarrito = $d.querySelector("#template-footer-carrito").content,
    $fragmento = $d.createDocumentFragment()

productos.forEach(producto =>{
    let $clon = $tproducto.cloneNode(true)
    $clon.querySelector("img").src = `${producto.thumbnailUrl}`
    $clon.querySelector(".card-title").textContent = `${producto.title}`
    $clon.querySelector(".card-text").textContent = `${producto.precio}`
    $fragmento.appendChild($clon)
})



$listaProductos.appendChild($fragmento)
    
  