let number = prompt("Digite um numero")

let mainNumber = document.getElementById("numberMain")
mainNumber.innerText = number

let raiz = document.getElementById("raiz")
raiz.innerText = Math.sqrt(number)

let inter = document.getElementById("numberInter")
inter.innerText = Number.isInteger(number)
