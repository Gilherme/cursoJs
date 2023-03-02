/* todas as variaveis declaradas com var sofrem hoisting para o inicio do código
* quando o interpretador vai interpretar, só que ele a sobe sem o valor, ou seja
* undefined
*/

console.log(`a = ${a}`)
var a = "Olá"
console.log(`a = ${a}`)

// agora com let

// console.log(`b = ${b}`) com let não funciona
let b = ' q q é'
console.log(`b = ${b}`)
