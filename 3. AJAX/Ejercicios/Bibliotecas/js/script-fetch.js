document.getElementById('tipo').addEventListener('change',renderBibliotecas)

function renderBibliotecas() {
    fetch("bibliotecas.php")
     .then(respuesta=>{
        if (respuesta.ok) 
            return respuesta.text()
        else
            return Promise.reject(respuesta)
    })
    .then(data=>{
        parser=new DOMParser()
        xml=parser.parseFromString(data,"application/xml")
        let opcion=document.getElementById('tipo').value;
        let resultados=xml.documentElement.querySelectorAll("item")
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
      })
     .catch(error=>{
         console.log(error)
         console.log("Error!")
         let mensaje=error.status.text || "Ocurrió un error"
         document.getElementById("resultados").innerHTML=`Error ${error.status}: ${mensaje}`
     })
}