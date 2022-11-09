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

function getMonthText(month) {
  let monthText

  switch (month) {
    case 0:
      monthText = "Janeiro"
      return monthText

    case 1:
      monthText = "Fevereiro"
      return monthText

    case 2:
      monthText = "Março"
      return monthText

    case 3:
      monthText = "Abril"
      return monthText

    case 4:
      monthText = "Maio"
      return monthText

    case 5:
      monthText = "Junho"
      return monthText

    case 6:
      monthText = "Julho"
      return monthText
    case 7:
      monthText = "Agosto"
      return monthText
    case 8:
      monthText = "Setembro"
      return monthText
    case 9:
      monthText = "Outubro"
      return monthText
    case 10:
      monthText = "Novembro"
      return monthText
    case 11:
      monthText = "Dezembro"
      return monthText
    default:
      monthText = "Dia invalido"
      return monthText
  }
}

console.log(getDayWeekText(dayOfWeek), dayOfWeek)
const newDateFormat = getDayWeekText(dayOfWeek)
const infos = `${newDateFormat}, ${dayOfWeek} de ${month} de ${year} ${hour}:${minute}`

const pDate = document.querySelector("#date")

pDate.innerHTML = infos
