//Swith
const date = new Date()
const dayOfWeek = date.getDay()
let dayOfWeekText
console.log(dayOfWeek)

switch (dayOfWeek) {
  case (dayOfWeek = 1):
    dayOfWeekText = "Segunda-Feira"
    break
  case (dayOfWeek = 2):
    dayOfWeekText = "Terça-Feira"
    break
  default:
    dayOfWeekText = "Dia invalido"
}
