let number = prompt("Digite um numero")

let mainNumber = document.getElementById("numberMain")
mainNumber.innerText = number

let raiz = document.getElementById("raiz")
raiz.innerText = Math.sqrt(number)

let inter = document.getElementById("numberInter")
inter.innerText = Number.isInteger(number)

let nanNumber = document.getElementById("numberNAN")
nanNumber.innerText = number === NaN ? true : false

let numberDown = document.getElementById("numberDown")
numberDown = Math.floor(numberDown)

let numberUP = document.getElementById("numberUP")
numberUP = Math.ceil(number)
