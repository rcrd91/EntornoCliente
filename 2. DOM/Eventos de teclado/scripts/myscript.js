const $d = document,
      $insertar = $d.querySelector("#insertar"),
      $templateResultado = $d.querySelector('#resultado').content;

function renderResultado(event) {
    $insertar.innerHTML=""
    $clon = $templateResultado.cloneNode(true)
    const $teclas = $clon.querySelectorAll(".tecla")

    //event.key = r
    //event.keyCode = 82
    //event.code = KeyR

    $teclas[0].insertBefore(
        $d.createTextNode(`${event.key===" "?"Space":event.key}`),
        $teclas.lastElementChild
    )
    $teclas[1].insertBefore(
        $d.createTextNode(`${event.keyCode}`),
        $teclas.lastElementChild
    )
    $teclas[2].insertBefore(
        $d.createTextNode(`${event.code}`),
        $teclas.lastElementChild
    )
    $insertar.append($clon)
}

$d.addEventListener('keydown', event => {
    //console.log(event.key);
    renderResultado(event)
});

