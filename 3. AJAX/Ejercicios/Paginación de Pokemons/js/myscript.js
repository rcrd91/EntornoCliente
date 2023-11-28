const $d = document,
      $main = $d.querySelector("main"),
      $links = $d.querySelector(".links")

    let pokeAPI="https://pokeapi.co/api/v2/pokemon/"

    async function cargarPokemons(url) {
        try {
            $main.innerHTML=`<img class="loader" src="assets/loader.svg" alt="Cargando...">`
            let res = await fetch(url) 
            let json = await res.json()
            let $template=""
            let $prevLink
            let $nextLink
            
            //console.log(json)

            if (!res.ok) throw {status:res.status, statusText:res.statusText}

            for (i=0; i<json.results.length; i++) {
                try {
                    let resp = await fetch (json.results[i].url)
                    let pokemon = await resp.json()

                    //* Datos pokemon:
                    //console.log(pokemon)

                    $template += `
                     <figure>
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>
                    `
                } catch (err) {
                    console.log(err)
                    let mensaje = err.statusText || "Ocurrió un error"
                    $template += `
                        <figure>
                            <figcaption>
                                Error ${err.status}: ${mensaje}
                            </figcaption>
                        </figure>
                    `
                }
            }

            $main.innerHTML = $template
                $prevLink = json.previous?`<a href="${json.previous}"> Anterior </a>`:""
                $nextLink = json.next?`<a href="${json.next}"> Siguiente </a>`:""
                $links.innerHTML = $prevLink+" "+$nextLink

        } catch(error) {
            console.log(error)
            let mensaje = error.statusText || "Ocurrió un error"
            $main.innerHTML = `<p>Error ${error.status}:${mensaje}</p>`
        }
    }

$d.addEventListener("DOMContentLoaded", e=> cargarPokemons(pokeAPI))
$d.addEventListener("click", e=> {
    if (e.target.matches(".links a")) {
        e.preventDefault()
        cargarPokemons(e.target.getAttribute("href"))
    }
})