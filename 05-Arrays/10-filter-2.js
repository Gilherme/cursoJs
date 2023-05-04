// implementando filter

Array.prototype.filter2 = function(callback){
  const newArray = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)){
     newArray.push(this[i])
  }}
  return newArray
}

const produtos = [
  { nome: 'notebook', preco: 1299, fragil: true},
  { nome: 'celular', preco: 299, fragil: false},
  { nome: 'carregador', preco: 29.99, fragil: false}, 
  { nome: 'vaso de vidro', preco: 199.90, fragil: true}
]

const caro = produto => produto.preco >= 100
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))