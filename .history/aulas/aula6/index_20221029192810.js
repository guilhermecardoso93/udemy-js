//Swith
const date = new Date()
const dayOfWeek = date.getDay()

console.log(dayOfWeek)

switch (dayOfWeek) {
  case (dayOfWeek = 1):
    return "Segunda-Feira"
    break
  case (dayOfWeek = 2):
    return "Terça-Feira"
    break
  default:
    return "Dia invalido"
}
