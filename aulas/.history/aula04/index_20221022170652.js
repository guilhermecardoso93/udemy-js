let varA = "A" // b
let varB = "B" // c
let varC = "C" // a

console.log(varA, varB, varC)
varaTemp = varA
varA = varB
varB = varC
varC = varaTemp
console.log(varA, varB, varC)[(varA, varB, varC)] = [varB, varC, varA]
console.log(varA, varB, varC)
