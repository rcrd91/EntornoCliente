let horas = 0, minutos = 0, segundos = 0
let cronometro = null;

const $d = document,
    $horas = $d.querySelector(".tiempo.horas"),
    $minutos = $d.querySelector(".tiempo.minutos"),
    $segundos = $d.querySelector(".tiempo.segundos"),
    $botones = $d.querySelectorAll(".btn"),
    $contenedor = $d.querySelector(".button-contenedor");


function contar() {
    segundos++
    if(segundos == 60) {
        minutos ++
        segundos = 0
    }
    if (minutos == 60) {
        horas ++
        minutos = 0
    }
    $horas.innerHTML = horas.toString().padStart(2,"0")
    $minutos.innerHTML = minutos.toString().padStart(2,"0")
    $segundos.innerHTML = segundos.toString().padStart(2,"0")

}

$contenedor.addEventListener("click", (e)=>{

    switch(e.target.id) {
        case "start":
                    if (!cronometro) {
                        cronometro = setInterval(contar,1000)
                        e.target.textContent = "Stop" 
                    } else {
                        clearInterval(cronometro)
                        cronometro = null;
                        e.target.textContent = "Continue"
                    }
                    break
        case "reset":
                    clearInterval(cronometro)
                    cronometro = null
                    e.target.nextElementSibling.textContent = "Start"
                    horas = minutos = segundos = 0
                    $horas.innerHTML = "00"
                    $minutos.innerHTML = "00"
                    $segundos.innerHTML = "00"
    }
});
