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

function formatData(data) {
  const day = data.getDate()
  const month = data.getMonth() + 1
  const year = data.getFullYear()

  return `${day}/${month}/${year}`
}

const dataBR = formatData(data)
