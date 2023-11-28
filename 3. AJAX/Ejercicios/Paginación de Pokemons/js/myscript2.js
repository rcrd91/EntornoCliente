const $d = document,
      $main = $d.querySelector("main"),
      $loader = $d.querySelector(".loader"),
      $links = $d.querySelector(".links"),
      $scrollCentinel = document.querySelector("#scroll-centinel")

let pokeAPI = "https://pokeapi.co/api/v2/pokemon"

let paginaActual = 1
let nPaginas = 0
const limite = 20

function showLoader() {
    $loader.classList.remove("hide")
}

function hideLoader() {
    $loader.classList.add("hide")
}

function showPokemons(pokemons) {

    hideLoader()

    let $template=""

    pokemons.forEach(pokemon => {
        if (pokemon.sprites) {
            $template += `
                <figure>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <figcaption>${pokemon.name}</figcaption>
                </figure>
            `
        } else {
            $template += `
                <figure>
                    <figcaption>
                        Error ${pokemon.status}: ${pokemon.statusText}
                    </figcaption>
                </figure>
            `
        }
    });

    $main.innerHTML += $template
}


async function getPokemons(url) {
    try {
        let res = await fetch(url) 
        let json = await res.json()
        
        const pokemons = []
        
        for (let i=0; i<json.results.length; i++) {
            try {
                let resp = await fetch (json.results[i].url)
                let pokemon = await resp.json()

                //* Datos pokemon: (sprites, etc)
                //console.log(pokemon)

                if (!res.ok) throw {status:res.status, statusText:res.statusText}

                nPaginas = parseInt(json.count/limite)+1

                pokemons.push(pokemon)
            } catch (err) {
                console.log(err)
                let mensaje = err.statusText || "Ocurrió un error"
                pokemons.push({status:err.status, statusText:mensaje})
            }
        }
        showPokemons(pokemons)

    } catch(err) {
        console.log(err)
        let mensaje = err.statusText || "Ocurrió un error"
        $main.innerHTML = `<p>Error ${err.status}:${mensaje}</p>`
    }
}

function hayMasPokemons(pagina, totalPaginas) {
    return totalPaginas === 0 || pagina < totalPaginas;
}

//Con Scroll
/*  window.addEventListener("scroll", ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    if(scrollTop + clientHeight >= scrollHeight -5 && hayMasPokemons(paginaActual, nPaginas)) {
        paginaActual++
        getPokemons(`${pokeAPI}?offset=${(paginaActual-1)*limite}&limit=${limite}`)
    }
}) */

//Con Wheel
/*  window.addEventListener("wheel", ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    if(scrollTop + clientHeight >= scrollHeight -5 && hayMasPokemons(paginaActual, nPaginas)) {
        paginaActual++
        getPokemons(`${pokeAPI}?offset=${(paginaActual-1)*limite}&limit=${limite}`)
    }
}) */

const observer = new IntersectionObserver((entries, observer)=>{
    for (const entry of entries) {
        if(entry.isIntersecting) {
            paginaActual++
            getPokemons(`${pokeAPI}?offset=${(paginaActual-1)*limite}&limit=${limite}`)
        }
    }
})

observer.observe($scrollCentinel)
$d.addEventListener("DOMContentLoaded", e=> getPokemons(pokeAPI))
