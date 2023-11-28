let contador = 0

const $d=document,
    $valor = $d.querySelector("#valor"),
    $botones=$d.querySelectorAll("button"),
    $contenedorBtn=$d.querySelector(".button-contenedor")

$botones.forEach(btn=>{
    btn.addEventListener("click", e=>{
        switch(e.target.id) {
            case "plus": contador++
                         break
            case "minus": contador--
                         break
            case "reset": contador = 0
        }
        switch(true){
            case contador>0:
                $valor.style.color="green"
                break
            case contador<0:
                $valor.style.color="red"
                break
            case contador===0:
                $valor.style.color="#222"
                break
        }
        $valor.textContent=contador
    })
})
