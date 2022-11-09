let varA = "A" // b
let varB = "B" // c
let varC = "C" // a

console.log(varA, varB, varC)

varA = varB
varB = varC
varC = varC = !varA ? "A" : "B"

console.log(varA, varB, varC)
