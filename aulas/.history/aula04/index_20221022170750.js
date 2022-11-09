let varA = "A" // b
let varB = "B" // c
let varC = "C" // a

;[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)

console.log(varA, varB, varC)
varaTemp = varA
varA = varB
varB = varC
varC = varaTemp
console.log(varA, varB, varC)
