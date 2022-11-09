const nome = prompt("Digite seu nome completo:")
const nomelength = nome.length
const second = nome.charAt(2)
const firstIndice = nome.indexOf(nome.length[1])
const LastIndice = nome.lastIndexOf(nome)

document.body.innerHTML += `Seu nome é: ${nome}<br />`
document.body.innerHTML += `Seu nome tem ${nomelength} letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${second}<br />`
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${firstIndice}<br />`
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome?${lastIndice}<br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`
document.body.innerHTML += `As palavras do seu nome são: ______<br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ______<br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ______<br />`

window.document.body.innerHTML = `O seu nome é ${NameProp} ${LastNameProp}`

nameInput.innerText = NameProp
