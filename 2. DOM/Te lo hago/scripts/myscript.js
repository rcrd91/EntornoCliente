const $d = document,
      $formulario=$d.querySelector("form"),
      $canes = $d.querySelector("#canes"),
      $hijos = $d.querySelector("#hijos"),
      $coches = $d.querySelector("#coches"),
      $itv = $d.querySelector("#itv"),
      $taller = $d.querySelector("#taller"),
      $lavado = $d.querySelector("#lavado"),
      $fecha = $d.querySelector("#fecha"),
      $localidad = $d.querySelector("#localidad"),
      $cantidad = $d.querySelector("#cantidad"),
      $efectivo = $d.querySelector("#efectivo"),
      $tarjeta = $d.querySelector("#tarjeta");

const precio={
   canes: 2,
   hijos: 5,
   coches: {
    ITV:2,
    Taller:2,
    Lavado:3
   },
   localidades:{
    santiago:0,
    negreira:2,
    silleda:2,
    lalin:3
   },
   finDeSemana:5,
   efectivo:0.8
}

//Al cargar la página itv, taller y lavado estan deshabilitados
$d.addEventListener("DOMContentLoaded",e=>{
    $itv.disabled=true
    $taller.disabled=true
    $lavado.disabled=true
})

//Si interactuamos con algo
$formulario.addEventListener("change",(e)=>{

    //+1 en coches: itv, taller, lavado activos
    if (parseInt($coches.value) > 0) {
        $itv.disabled=false
        $taller.disabled=false
        $lavado.disabled=false
    } else {
        $itv.checked=false
        $itv.disabled=true
        $taller.disabled=true
        $taller.checked=false
        $lavado.disabled=true
        $lavado.checked=false
    }

    let total=0
    
    if(parseInt($coches.value) > 0 || parseInt($hijos.value) > 0 || parseInt($canes.value) > 0){

        //Hijos
        total+= parseInt($hijos.value)*precio.hijos

        //Canes
        total+= parseInt($canes.value)*precio.canes 

        //Coches
        if($itv.checked){
            total+=parseInt($coches.value)*precio.coches.ITV
        } 

        if($taller.checked) {
            total+=parseInt($coches.value)*precio.coches.Taller
        } 

        if($lavado.checked) {
            total+=parseInt($coches.value)*precio.coches.Lavado
        }

        //Obtener día (Sábado=0 Domingo=6)
        const dia = new Date($fecha.value)
        if(dia.getDay() == 0 || dia.getDay() == 6){
            total+=precio.finDeSemana 
        }
    }
    $cantidad.innerHTML=total.toFixed(2);    
})

