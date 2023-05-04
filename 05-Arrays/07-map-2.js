const carrinho = [
  '{ "nome": "Borracha", "preco": 2.54 }',
  '{ "nome": "caneta",   "preco": 3.49 }',
  '{ "nome": "Caderno",  "preco": 54.99 }'
]

// retornar array apenas com os preços 
const parse = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(parse).map(apenasPreco)

console.log(resultado)
