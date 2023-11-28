const $d = document,
    $contenedor = $d.querySelector(".contenedor"),
    $codigo = $d.querySelector(".codigo"),
    $digitos = $d.querySelectorAll(".digito"),
    $info = $d.querySelector(".info"),
    $enviar = $d.querySelector("#enviar");

    $digitos.forEach($digito=>{

        $digito.addEventListener("keyup",event=>{

            if ($digito.value.length>1) {
                $digito.value=""
               setTimeout(()=>$digito.focus(),5)
            } else {
               let digitoIdx=Array.from($digitos).findIndex(el=>el==$digito)
               if (digitoIdx!=$digitos.length-1) {
                    $digitos[++digitoIdx].focus()
                }

                $enviar.addEventListener("click",e=>{

                    $pass = 111111;
            
                    //Valores
                    $val0 = $digitos[0].value
                    $val1 = $digitos[1].value
                    $val2 = $digitos[2].value
                    $val3 = $digitos[3].value
                    $val4 = $digitos[4].value
                    $val5 = $digitos[5].value
                   
                    const valores = [];
                    valores.push($val0, $val1, $val2, $val3, $val4, $val5);
            
                    let valoresTotal = parseInt(valores.join(""));
            
                    if(valoresTotal == $pass){
                        $info.innerHTML = "Código correcto";
                    } else $info.innerHTML = "Código incorrecto"; 
                }) 

            }
        })    
    })