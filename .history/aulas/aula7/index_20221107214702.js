//break continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numeros) {
  if (num === 2) {
    console.log("Pulou o 2");
    continue;
    //pula
  }
  if (num === 7) {
    console.log("Parou no 7");
    break;
    //para
  }
  console.log(num);
}
