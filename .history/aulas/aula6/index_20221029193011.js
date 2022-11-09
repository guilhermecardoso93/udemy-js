//Swith
const date = new Date()
const dayOfWeek = date.getDay()
let dayOfWeekText
console.log(dayOfWeek)

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
  default:
    dayOfWeekText = "Dia invalido"
}

console.log(dayOfWeekText)
