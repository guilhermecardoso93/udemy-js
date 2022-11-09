function criarPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,

    fala() {
      console.log(`${this.name} ${this.idade}`)
    },
  }
}

const pessoaUm = criarPessoa("Guilherme", "Cardoso", 29)
const pessoaDois = criarPessoa("Caio", "Silva", 25)
console.log(pessoaUm, pessoaDois)
