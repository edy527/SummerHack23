/* CLASE 01 Y CLASSE 02 */
/* let titular = document.getElementById("titulo")
let ingreso = document.getElementById("ingreso")  
titular.innerHTML = "Hola desde JS" */


/* CLASE 03 */

let titular = document.getElementById("titulo")
let ingresoA = document.getElementById("ingresoA") 
let ingresoB = document.getElementById("ingresoB")  
let btn = document.getElementById("btn")


btn.addEventListener('click', ()=>{
    let resultado = parseInt(ingresoA.value) + parseInt(ingresoB.value)
    titular.innerHTML = resultado
})