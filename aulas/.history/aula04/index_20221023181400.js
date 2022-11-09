function meuEscopo() {
  const form = document.querySelector(".form")

  function recebeEventoForm(evento) {
    evento.preventDefault()
    const name = form.querySelector(".nome")
    const sobrenome = form.querySelector(".sobrenome")
    const peso = form.querySelector(".peso")
    const altura = form.querySelector(".altura")

    console.log(name, peso)
  }

  form.addEventListener("submit", recebeEventoForm)
}

meuEscopo()
