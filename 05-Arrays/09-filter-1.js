const produtos = [
  { nome: 'notebook', preco: 1299, fragil: true},
  { nome: 'celular', preco: 299, fragil: false},
  { nome: 'carregador', preco: 29.99, fragil: false}, 
  { nome: 'vaso de vidro', preco: 199.90, fragil: true}
]

console.log(produtos.filter(function(p){
  return true
}))

const caro = produto => produto.preco >= 100 
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))