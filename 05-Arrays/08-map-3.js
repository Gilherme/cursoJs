// Simulando o map

Array.prototype.map2 = function(callback){
  const newArray = []
  for(i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 2.54 }',
  '{ "nome": "caneta",   "preco": 3.49 }',
  '{ "nome": "Caderno",  "preco": 54.99 }'
]

const parse = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(parse).map2(apenasPreco)

console.log(resultado)
