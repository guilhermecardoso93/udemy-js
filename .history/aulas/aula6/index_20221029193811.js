//Swith
function getDayWeekText() {
  switch (dayOfWeek) {
    case 0:
      dayOfWeekText = "Domingo"
      break
    case 1:
      dayOfWeekText = "Segunda-Feira"
      break
    case 2:
      dayOfWeekText = "Terça-Feira"
      break
    case 3:
      dayOfWeekText = "Quarta-feira"
      break
    case 4:
      dayOfWeekText = "Quinta-feira"
      break
    case 5:
      dayOfWeekText = "Sexta-Feira"
      break
    case 6:
      dayOfWeekText = "Sabado"
      break
    default:
      dayOfWeekText = "Dia invalido"
  }
}
const date = new Date("1993-09-24 11:00:00")
const dayOfWeek = date.getDay()
let dayOfWeekText
console.log(dayOfWeek, date.getDate())

console.log(dayOfWeekText)
