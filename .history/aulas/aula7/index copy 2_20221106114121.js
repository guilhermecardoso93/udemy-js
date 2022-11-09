const pessoa = {
  nome: "Luiz",
  sobrenome: "Cardoso",
  idade: 29,
  endereco: {
    rua: "Avenida Brasil",
    numero: 320,
  },
};

const { nome: teste = "Gui" } = pessoa;
console.log(teste);
