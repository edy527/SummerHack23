let entrada = document.getElementById('entrada');
let meter = document.getElementById('meter');
let contenedor = document.getElementById('contenedor');
let carrito = document.getElementById('carrito');

meter.addEventListener('click', ()=>{

})

let arreglo = ['Pepe', 'Loro', 'Perrito'];
/* OBJETOS */
let objeto = [
    { id: 1, nombre: 'Torta Matilda', precio: '3500', txt: 'Tortita Matilda' },
    { id: 2, nombre: 'Brownie', precio: '2500', txt: 'Brpwnie con dulce de leche' },
    { id: 3, nombre: 'David', precio: '10', txt: 'Hola, como estas?' },
    { id: 4, nombre: 'Torta de limon', precio: '500', txt: 'Porcion de torta de limon' },
    { id: 5, nombre: 'Lemon pie', precio: '3000', txt: 'Porcion de lemon con merengue?' },

];


let productosBaratos = objeto.filter((producto)=>{
    return producto.precio <= 100;
})

let productosCaros = objeto.filter((producto)=>{
    return producto.precio >= 100;
})


productosCaros.map((producto)=>{
let modelo =
    "<li>" +
    producto.nombre +
    " precio: $<strong>" +
    producto.precio +
    "</strong> <button onClick='agregarCarrito(" +
    producto.id + 
    ")'>Comprar</button> </li>";
    contenedor.innerHTML += modelo;
})

let cuantosGatos = objeto.reduce((contador, producto)=>{
    if (producto.nombre == "David") {
        return contador +1
    }else{
        return contador;
    }
},0)

console.log(cuantosGatos)

let dameRamdom = (min, max)=>{
    return Math.round(Math.random()*max)+min
}
console.log(dameRamdom(1,9))

//alert (objeto[dameRamdom(0, arreglo.length)].nombre)

carritou = [];
let agregarCarrito = (e)=>{
    objeto.filter((producto)=>{
        if(producto.id == e) carritou.push(producto)
    })
    carrito.innerHTML = ""
    carritou.map((producto)=>{
        carrito.innerHTML += "<li>" + producto.nombre + "</li>";
    })
    
}

