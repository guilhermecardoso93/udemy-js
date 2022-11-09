function meuEscopo() {
  const form = document.querySelector(".form")
  const name = document.querySelector(".nome")
  const sobrenome = document.querySelector(".sobrenome")
  const peso = document.querySelector(".peso")
  const altura = document.querySelector(".altura")

  function recebeEventoForm(evento) {}

  form.addEventListener("submit", recebeEventoForm)
}

meuEscopo()
