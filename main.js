const nameUser = document.querySelector(".user")
const material = document.querySelector(".select")
const sizeBox = document.querySelector("box")
const coments = document.querySelector(".text")
const button = document.querySelector("#button")
const result = document.querySelector("#result")

button.onclick = () => {
    result.textContent = (`${nameUser.value} ha pedido una caja de ${material.value} con unas dimensiones ${sizeBox}. Y ${coments.value} .`)
}
