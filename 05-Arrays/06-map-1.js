// O map pega um array e cria outro a partir dele, com as especificações desejadas
const nums = [1, 2, 3, 4, 5]

// O map é um for com propósito
let resultado = nums.map(function(e){
 return e * 2
})
console.log(resultado)

// Funções para passar de callback para map
const soma10 = e => e + 10;
const triplo = e => e * 3;
const emRS = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado2 = nums.map(soma10).map(triplo).map(emRS)
console.log(resultado2)
