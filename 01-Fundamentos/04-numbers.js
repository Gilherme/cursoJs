/* Type number */

const peso1 = 1.0
const peso2 = Number('2.0')

console.log( `peso1 é inteiro ? ${Number.isInteger(peso1)}. peso2 2 é inteiro ? ${Number.isInteger(peso2)}`)

const avaliacao1 = 9.342
const avaliacao2 = 6.350

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // fixa a quantidade de casas decimais 
console.log(media.toString()) // Converte para string 

// alguns cuidados com numbers 
console.log(3 / 0) // Any number divided by 0, equals infinity 
console.log('20.5' / 2) // Ele tenta converter e conseguindo ele faz a operação
console.log('show' * 2) // Ele não escreve show 2 vezes
console.log(0.1 + 0.7) // Não é 0.8 
//console.log(10.toString()) // Não funciona
console.log((10).toString()) // Funciona
console.log((3.5839.toFixed(2))) // Também funciona

/* usando Math */
// O obj Math nos da acesso a vairios metodos que nos ajudam em operações aritiméticas

// calculando a área de um circulo
const raio = 5.4
const area = Math.PI * Math.pow(raio, 2) // Math.PI = numero pi (3,14) . Math.pow(x, y) retorna x elevado a y  
console.log(area.toFixed(2))
console.log(typeof(Math)) // Math é um obj
