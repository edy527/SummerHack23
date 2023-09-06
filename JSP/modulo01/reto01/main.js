/* TOGGLE BUTTON */
document.getElementById("toggleButton").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
  });
  
/* FIN DE TOGGLE BUTTON  */

let convert = document.getElementById('convert')
let cantidad = document.getElementById('cantidad')
let divisa = document.getElementById('divisa')
let resultado = document.getElementById('resultado')
let pic = document.getElementById('pic')
let cerrar = document.getElementById('cerrar')
let creditos = document.getElementById('creditos')
let mostrar = document.getElementById('mostrar')

mostrar.addEventListener('click', () =>{
    creditos.style.display = 'block'
})

cerrar.addEventListener('click', () =>{
    creditos.style.display = 'none'
})

divisa.addEventListener('change', (e)=>{
    console.log(e.target.value)
})



let convertilos = ()=>{
    let valor = 0;
    console.log('soy convertilos')
    if(divisa.value == "usd"){
        valor = 370
        moneda = 'usd'
        resultado.style.color = "green"
        pic.src = "https://previews.123rf.com/images/tpabma/tpabma1511/tpabma151100015/48806279-una-moneda-de-un-d%C3%B3lar-estatua-de-la-libertad-aislado-en-el-fondo-blanco.jpg"
    }else{
        valor = 380
        moneda = 'eur'
        resultado.style.color = "blue"
        resultado.style.border = "1px solid black"
        pic.src = "https://upload.wikimedia.org/wikipedia/commons/5/56/Reverso_1_euro.jpg"
    }
    
    let elegida = parseInt(divisa.value)
    let cuanto = parseInt(cantidad.value)
    let result = cuanto * valor
    resultado.innerHTML = (cuanto + " " + moneda + " son: " + result + "pesos")
}


convert.addEventListener('click', convertilos )

let saludadora = (nombre, apellido)=>{

    console.log('Saludos queride', nombre, 'tu apellido es', apellido)
}


