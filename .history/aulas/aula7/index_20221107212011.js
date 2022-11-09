//while do while

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

function random(min, max ) {
  const r = Math.random() * (max - min) + min;
  return r
}

let rand = random(1,5)
console.log(rand)