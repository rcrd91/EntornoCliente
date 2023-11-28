let contador = 0

const $d=document,
    $valor = $d.querySelector("#valor"),
    $botones=$d.querySelectorAll("button"),
    $contenedorBtn=$d.querySelector(".button-contenedor")

$contenedorBtn.addEventListener("click", e=> {
        const clases = e.target.classList
        if (clases.contains("decrementar"))
            contador--
        else {
            if (clases.contains("incrementar"))
                contador ++
            else
                contador = 0
        }
        if (contador > 0) $valor.style.color = "green"
        if (contador < 0) $valor.style.color = "red"
        if (contador === 0) $valor.style.color = "#222"
        $valor.innerHTML = contador
    })

