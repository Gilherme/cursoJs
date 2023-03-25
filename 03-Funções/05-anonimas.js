// Uma função anonima nada mais é do que uma função sem nome, como o exemplo abaixo

const soma = function(x, y){
  return x + y
}
// Passando uma função anonima como parametro 
const imprimirResultado = function (a, b, operacao = soma){
  console.log(operacao(a,b))
}

imprimirResultado(2,3)
imprimirResultado(2, 3, soma)
imprimirResultado(8, 3, function(y, x){
  return y - x
})
imprimirResultado(2, 2.5, (x, y) => x * y)

// Função anonima dentro de obj
const pessoa = {
  falar: function (nome) {
    console.log(`Olá ${nome} que bom te ver`)
  }
}
pessoa.falar('Beatriz')