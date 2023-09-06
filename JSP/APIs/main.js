const url = 'https://pokeapi.co/api/v2/pokemon/';

fetch (url)
.then((res) => res.json())
.then((data)=> mostrarListado(data))
.catch((err)=> console.error(err))

let pokemones = document.getElementById('pokemones')
let titulo = document.getElementById('tit')
let pic = document.getElementById('pic')

let mostrarListado= (res) =>{
    res.results.map((item)=>{
        let modelo = `<li> <button onclick='mostrar("${item.url}")'> ${item.name} </button> </li>`
        pokemones.innerHTML += modelo 
    })
}
let mostrar = (url)=>{
    fetch (url)
.then((res) => res.json())
.then((data)=> mostrarPoke(data))
.catch((err)=> console.error(err))
}

let mostrarPoke = (poke)=>{
    console.log(poke)
    titulo.innerHTML = poke.name
    pic.src = poke.sprites.back_default
}



