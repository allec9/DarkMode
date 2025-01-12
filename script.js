var btn = document.querySelector(".btn")
var body = document.querySelector("body")
var circulo = document.querySelector(".circulo")

function darkMode() {
    body.classList.toggle("darkMode")
    circulo.classList.toggle("move")
    btn.classList.toggle("bg-blue")


}

btn.addEventListener("click", darkMode)