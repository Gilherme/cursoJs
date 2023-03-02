// Valores booleanos são verdadeiro ou falso

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(`Os Verdadeiros...`)
console.log(!!4)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(`Os Falsos...`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`Pra Finalizar...`)
console.log(!!('' || null || 0 || ' ') )

// Uma boa coisa a saber 
const nome = ''
console.log(nome || 'Desconhecido') 