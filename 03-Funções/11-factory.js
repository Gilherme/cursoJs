// Função factory é uma função que normalmente retorna um obj, é uma maneira
// mais simples de criar varios objetos 

// factory simples 
function criarPessoa(){
  return{
    nome: 'Ana',
    Idade: 23,
  }
}
console.log(criarPessoa())

// factory 
function criarProduto(prod, preco = 100, desconto) {
  return{
    produto: prod,
    preco: preco,
    desconto: `${desconto}%`
  }
} 

console.log(criarProduto('Mesa', 199, 10))