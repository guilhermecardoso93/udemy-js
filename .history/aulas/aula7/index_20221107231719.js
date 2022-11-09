//try catch

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("não são numero)não são numero");
  }

  return x + y;
}

try {
  console.log(soma(4, 2));
  console.log(soma(4, 2));
} catch (e) {
  console.log(e);
}

try {
  //Executa quando não tem error
} catch (error) {
  //Executa e deu erro
} finally {
  //Finalizar independente so resultado
}

function retornaHora(data) {
  if (!(data instanceof Date)) {
    throw new TypeError("Esperando uma instancia de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleString("pt-BR", {
    hour12: false,
  });
}

retornaHora(new Date());
retornaHora(5);
