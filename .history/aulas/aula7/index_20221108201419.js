//setTimeOut 

function mostraHora() {
  let data = new Date()

  return data.toLocaleString("pt-BR", {
    hour12: false
  })
}

function Interval() {
  console.log(mostraHora())
}

setInterval(Interval, 1000)