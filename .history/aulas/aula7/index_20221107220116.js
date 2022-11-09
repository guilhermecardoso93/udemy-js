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
  return w > h ? true : false;
}

console.log(ePaisagem(1920, 1080));
