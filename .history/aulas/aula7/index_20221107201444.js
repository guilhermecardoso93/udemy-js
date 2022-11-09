//for in

const frutas = [
  'banana',
  'maça',
  'pera',
  'melancia',
  'uva'
]

for ( let i in frutas) {
  console.log(frutas[i])
}

const pessoa = {
  name: 'Guilherme',
  age: 29,
  height: 1.79,
  weight: 105
}

for (let key in pessoa) {
  console.log(pessoa.name[key])
}


