function meuEscopo() {
  const form = document.querySelector(".form")

  form.onsubmit = function (evento) {
    evento.preventDefault()
  }
}

meuEscopo()
