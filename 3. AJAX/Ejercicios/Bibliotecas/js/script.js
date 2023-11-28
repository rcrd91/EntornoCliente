const solicitar = () => {
    let peticion = new XMLHttpRequest();
    peticion.open('GET', "bibliotecas.php"); 
    peticion.send();
    peticion.addEventListener("readystatechange", e=>{
        if (e.target.readyState !== 4 ) {
            return;
        }
        if (e.target.status>=200 && e.target.status<300) {
            let opcion=document.getElementById('tipo').value;
            let resultados = e.target.responseXML.documentElement.getElementsByTagName("item");
            //console.log(e.target.responseXML)        
            let xmlDoc=e.target.responseXML.documentElement
            //console.log(xmlDoc.querySelectorAll("CODIGO")) 
            //console.log(xmlDoc.querySelectorAll("item"))

            //let items=Array.from(xmlDoc.querySelectorAll("item"))
            //let accesoLibre=items.filter(item=>item.querySelector("TIPO_ACCESO").textContent=="Acceso libre")
            //console.log(accesoLibre)
            
            //).filter(item=>item.querySelector("TIPO_ACCESO")=="Acceso libre"))

            /*
            // Con XPath
            let documento=e.target.responseXML
            const iterator=documento.evaluate("/list/item[TIPO_ACCESO='Acceso libre']",documento,null,XPathResult.ANY_TYPE,null)
            try {
                let thisNode = iterator.iterateNext();
                while (thisNode) {
                  console.log(thisNode);
                  //console.log(thisNode.textContent);
                  thisNode = iterator.iterateNext();
                }
              } catch (e) {
                console.error(`Error: Document tree modified during iteration ${e}`);
              }            
            */

            // Parseamos la respuesta en formato texto a XML
            /*
            const parser=new DOMParser()
            xmlDoc=parser.parseFromString(e.target.responseText,"text/xml")
            console.log(xmlDoc)
            console.log(xmlDoc.querySelectorAll("CODIGO")) 
            */

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
        }
    
    });
}

document.getElementById('tipo').addEventListener('change',solicitar)

