let varA = "A" // b
let varB = "B" // c
let varC = "C" // a

console.log(varA, varB, varC)
varC = varA
varA = varB
varB = varC

console.log(varA, varB, varC)
