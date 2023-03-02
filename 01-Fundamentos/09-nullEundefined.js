let valor // uninitialized (não inicializada) 
console.log(valor)  // undefined 
//console.log(valor1) // Error

valor = null // Lack of value  (Ausencia de valor) 
//console.log(valor.toString()) //Error! Não pode acessar nenhum atributo ou método de uma varivael null

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 1.34
console.log(produto)

