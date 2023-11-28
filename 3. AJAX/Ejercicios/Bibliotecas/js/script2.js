document.getElementById('tipo').addEventListener('change',renderBibliotecas)

function renderBibliotecas() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', "bibliotecas.php"); 
    xhr.send()

    xhr.addEventListener("readystatechange", e=>{
        if (e.target.readyState !== 4 ) return;
        if (e.target.status>=200 && e.target.status<300) {
            let opcion=document.getElementById('tipo').value;
            //let resultados = e.target.responseXML.documentElement.getElementsByTagName("item");
            let resultados=e.target.responseXML.querySelectorAll("item")
            let tbl='';
            if (opcion==1 || opcion==2) {
                if (opcion==1) 
                    cadena="Acceso libre"
                else
                   cadena="Acceso restringido"
                if (resultados.length>0) {
                    tbl+=`<table border>`;
                    tbl+=`<th>Nombre</th><th>Localidad</th><th>Pais</th>`;
                    for (let i=0;i<resultados.length;i++) {
                        if (resultados[i].getElementsByTagName('TIPO_ACCESO')[0].innerHTML==cadena) {
                            tbl+=`<tr>`;
                            tbl+=`<td>${resultados[i].getElementsByTagName('NOMBRE')[0].innerHTML}</td>`;
                            tbl+=`<td>${resultados[i].getElementsByTagName('LOCALIDAD')[0].innerHTML}</td>` ;
                            tbl+=`<td>${resultados[i].getElementsByTagName('PAIS')[0].innerHTML}</td>`;
                            tbl+=`</tr>`;
                        }
                    }
                    tbl+=`</table>`;
                }
            }
            document.getElementById("resultados").innerHTML = tbl;
        } else {
            console.log("Error!")
            let mensaje=e.target.status.text || "Ocurrió un error"
            $ol.innerHTML=`Error ${e.target.status}: ${mensaje}`
        }
        console.log("Este mensaje cargará de cualquier forma")
    })
}