//Swith
const date = new Date()
const dayOfWeek = date.getDay()

console.log(dayOfWeek)

switch (dayOfWeek) {
  case 1:
    dayOfWeek = 1
    return "Segunda-Feira"
    break
  case 2:
    dayOfWeek = 2
    return "Terça-Feira"
    break
  default:
    dayOfWeek > 0 || dayOfWeek < 6
    return "Dia invalido"
}

console.log(dayOfWeek)
