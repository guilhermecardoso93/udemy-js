//Swith
const date = new Date()
const dayOfWeek = date.getDay()

function getDayWeekText(dayOfWeek) {
  let dayOfWeekText

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

  return dayOfWeekText
}

console.log(dayOfWeekText)
