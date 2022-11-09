console.log('Linha 01')
console.log('Linha 03')
console.log('Linha 05')
console.log('Linha 07')

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0
  console.log(`Linha de número ${par}`)
}