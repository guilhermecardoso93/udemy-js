//setTimeOut 

function mostraHora() {
  let data = new Date()

  return data.toLocaleString("pt-BR", {
    hour12: false
  })
}

setInterval( function () {
  console.log(mostraHora())
}, 6000)