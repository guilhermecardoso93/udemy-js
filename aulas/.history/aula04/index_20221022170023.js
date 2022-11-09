let varA = "A" // b
let varB = "B" // c
let varC = "C" // a

console.log(varA, varB, varC)

varA = varB
varB = varC
varC = varA

console.log(varA, varB, varC)
