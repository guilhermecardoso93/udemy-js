function meuEscopo() {
  const form = document.querySelector(".form")
  const name = form.querySelector(".nome")
  const sobrenome = form.querySelector(".sobrenome")
  const peso = form.querySelector(".peso")
  const altura = form.querySelector(".altura")

  function recebeEventoForm(evento) {}

  form.addEventListener("submit", recebeEventoForm)
}

meuEscopo()
