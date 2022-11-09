const namesAlunos = ["Guilheme", "Thiago", "Diego"]
console.log(namesAlunos[2])

namesAlunos[3] = "Rahvi"
console.log(namesAlunos)

namesAlunos.push("Caio")
console.log(namesAlunos)

namesAlunos.unshift("Maria")
console.log(namesAlunos)

const removidoComeco = namesAlunos.shift("Maria")
console.log(namesAlunos, removidoComeco)

const removidoFim = namesAlunos.pop()
console.log(namesAlunos, removidoFim)

const remover = namesAlunos.slice(0, 5)
console.log(namesAlunos instanceof Array, remover)
