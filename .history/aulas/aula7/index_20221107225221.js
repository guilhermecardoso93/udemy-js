//try catch

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "não são numero";
  }

  return x + y;
}



try {
  console.log(soma(4, 2));
  console.log(soma(4, 2));
} catch (e) {
  console.log(e);
}
