let titulo = document.getElementById('titulo')
let nombre = document.getElementById('nombre')
let registro = document.getElementById('registro')
let nombreSolo = " "
registro.addEventListener('click', ()=>{
    let nombreSolo = nombre.value.split(" ")
    mensaje = nombreSolo[0] + ", gracias por registrarte.";

    alert(mensaje)
})