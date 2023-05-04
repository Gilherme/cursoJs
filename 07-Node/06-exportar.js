// Defininfo o exports

console.log(module.exports === this)
console.log(module.exports === exports)

// maneiras de exportar 
this.a = 1
exports.b = 2
module.exports.c = 3

// Ainda sim o b será visivel, porque todos apontam para a mesma memória
exports = null
console.log(module.exports)

// isso não funciona, porque quem realmente exporta é o module.exports
exports = {
  nome: ' Beatriz'
}