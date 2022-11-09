//try catch

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw ("não são numero");
  }

  return x + y;
}

console.log(soma(a, 2));
