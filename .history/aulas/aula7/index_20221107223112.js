//Escreva un funçãoq ue receba dis numero e retorne um o maior numeor

function max(x, y) {
  return x > y ? x : y;
}
console.log(max(5, 8));

const max2 = (x, y) => {
  return x > y ? x : y;
};
console.log(max2(5, 8));

const max3 = (x, y) => (x > y ? x : y);
console.log(max3(5, 8));

//Escreva um função chamada ePaiagem que recebe dois argumetos, largura e altura de uma imagem)number.

//Retorne true se a imagem estiver no modo paisagem

function ePaisagem(w, h) {
  return w > h ? "Paisagem" : "Retrato";
}

console.log(ePaisagem(1920, 1080));

//Fizz & Buzz

function FizzBuzz(numero) {
  if(typeof numero !== "number") return numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "Número é FIZZ"
  } else if (numero % 5 === 0) {
    return "Número é Buzz"
  } else if (numero % 3 === 0) {
    return "Número é FizzBuzz"
  } else {
    return`Número não é FizzBuzz ${numero}`
  }
}


for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i))
}