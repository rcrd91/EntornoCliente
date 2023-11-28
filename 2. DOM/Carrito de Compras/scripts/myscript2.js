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

const listaProductosCarrito=[]

const $d = document,
    $listaProductos = $d.querySelector("#lista-productos"),
    $bodyCarrito=$d.querySelector("tbody"),
    $tproducto = $d.querySelector("#template-producto").content,
    $tproductoCarrito = $d.querySelector("#template-producto-carrito").content,
    $tfooterCarrito = $d.querySelector("#template-footer-carrito").content,
    $fragmento = $d.createDocumentFragment()

function renderProductos() {
    productos.forEach(producto =>{
        let $clon = $tproducto.cloneNode(true)
        $clon.querySelector("img").src = `${producto.thumbnailUrl}`
        $clon.querySelector(".card-title").textContent = `${producto.title}`
        $clon.querySelector(".card-text").textContent = `${producto.precio}`
        $clon.querySelector("a").dataset.productoId=`${producto.id}`
        $fragmento.appendChild($clon)
    })
    $listaProductos.appendChild($fragmento)
}

function renderCarrito(){
    $bodyCarrito.innerHTML=""
    listaProductosCarrito.forEach((producto,indice)=>{
        const $clon=$tproductoCarrito.cloneNode(true)
        const $tds=$clon.querySelectorAll("td")
        $tds[0].textContent=indice+1
        $tds[1].textContent=productos[producto.id-1].title
        $tds[2].textContent=producto.cantidad
        $tds[4].textContent=producto.cantidad*productos[producto.id-1].precio
        $bodyCarrito.appendChild($clon)
    })
}

$listaProductos.addEventListener("click",e=>{
    //console.log(e.target.dataset.productoId)
    const producto=listaProductosCarrito.find(producto=>producto.id==e.target.dataset.productoId)
    if (producto)
       producto.cantidad++
    else
    listaProductosCarrito.push({
        id:e.target.dataset.productoId,
        cantidad:1
    })
    renderCarrito()
    //console.log(listaProductosCarrito)
})

    
$d.addEventListener("DOMContentLoaded",e=>{
    renderProductos()
})