console.log("Oi")
const pontuaçao = 9999

const vip = pontuaçao >= 1000 ? "Pontuação Ok" : "Pontuação Invalida"
console.log(vip)

const treshoras = 60 * 60 * 3 * 1000
const data = new Date(1993, 8, 24, 11)
console.log("Dia", data.getDate())
console.log("Mês", data.getMonth())
console.log("Ano", data.getFullYear())
console.log(data)

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`
}

function formatData(data) {
  const day = zeroLeft(data.getDate())
  const month = zeroLeft(data.getMonth() + 1)
  const year = zeroLeft(data.getFullYear())

  return `${day}/${month}/${year}`
}

const dataBR = formatData(data)
console.log(dataBR)
