console.log('Linha 01')
console.log('Linha 03')
console.log('Linha 05')
console.log('Linha 07')

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar'
  console.log(`Linha de número ${i} ${par}`)
}

const frutas = ['maça', 'pera', 'banana', 'uva']

for (let i = 0; i < frutas.length; i++) {
  console.log(i)
}