let boton = document.getElementById("click")
let nav = document.querySelector(".nav-enlaces")
let cerrar = document.querySelector(".nav-cerrar-icon")

boton.addEventListener("click", ()=>{
    nav.classList.add("menu-activado")
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("menu-activado")
})