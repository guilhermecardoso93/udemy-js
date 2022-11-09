function meuEscopo() {
  const form = document.querySelector(".form")

  function recebeEventoForm(evento) {
    evento.preventDefault()
    console.log("oi")
  }

  form.addEventListener("submit", recebeEventoForm)
}

meuEscopo()
