//Swith
const date = new Date()
const dayOfWeek = date.getDay()
const year = date.getFullYear()
const month = date.getMonth()
const hour = date.getHours()
const minute = date.getMinutes()

function getDayWeekText(dayOfWeek) {
  let dayOfWeekText

  switch (dayOfWeek) {
    case 0:
      dayOfWeekText = "Domingo"
      return dayOfWeekText

    case 1:
      dayOfWeekText = "Segunda-Feira"
      return dayOfWeekText

    case 2:
      dayOfWeekText = "Terça-Feira"
      return dayOfWeekText

    case 3:
      dayOfWeekText = "Quarta-feira"
      return dayOfWeekText

    case 4:
      dayOfWeekText = "Quinta-feira"
      return dayOfWeekText

    case 5:
      dayOfWeekText = "Sexta-Feira"
      return dayOfWeekText

    case 6:
      dayOfWeekText = "Sabado"
      return dayOfWeekText

    default:
      dayOfWeekText = "Dia invalido"
      return dayOfWeekText
  }
}

console.log(getDayWeekText(dayOfWeek), dayOfWeek)
const newDateFormat = getDayWeekText(dayOfWeek)
const infos = `${newDateFormat}, ${dayOfWeek} de ${month} de ${year} ${hour}:${minute}`

const pDate = document.querySelector("#date")

pDate.innerHTML = infos
