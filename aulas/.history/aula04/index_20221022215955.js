const NameProp = prompt("Digite seu Nome!")
const LastNameProp = prompt("Digite seu Sobrenome!")
console.log(NameProp)

window.document.body.innerHTML = `O seu nome é ${NameProp} ${LastNameProp}`

nameInput.innerText = NameProp
