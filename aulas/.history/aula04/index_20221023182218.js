function meuEscopo() {
  const form = document.querySelector(".form")
  const resultado = document.querySelector(".resultado")

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()
    const name = form.querySelector(".nome")
    const sobrenome = form.querySelector(".sobrenome")
    const peso = form.querySelector(".peso")
    const altura = form.querySelector(".altura")

    pessoas.push({
      nome: name.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    })

    console.log(pessoas)

    resultado.innerHTML += `
      <p>${name.value}</p>
       <p>${sobrenome.value}</p>
        <p>${altura.value}</p>
         <p>${peso.value}</p>
    `
  }

  form.addEventListener("submit", recebeEventoForm)
}

meuEscopo()
