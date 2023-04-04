// objeto é um conjunto com onde cada elemento é um par chave/valor

// cria um objeto chamado produto
const produto = new Object

// Acrescentar elementos dentro do obj
produto.nome = 'Cadeira'
produto['Marca do produto'] =  'Generico' // normalmente usa-se [] para descrever chaves com espaços
produto.preco = 220

console.log(produto)

// excluir elementos de um obj
delete produto.preco
delete produto['Marca do produto']

console.log(produto)

// Os elementos de um obj podem ser outros objetos, arrays, funções e mais... 
const carro = {
  modelo: 'Fusca',
  valor: 23000,
  proprietario:{
    nome: 'Raul',
    idade: 26,
    endereco: {
      rua: 'abc',
      numero: 109,
      cidade: 'Pindamonhangaba'
    }
  },
  condutores: [{
    nome: 'junior',
    idade: 22
  },
  {
    nome: 'Julia',
    idade: 32
  }],
  calcularValorDoSeguro: function(){
    // ...
  }
}
// assessando o objeto acima

carro.proprietario.endereco.numero = 1230
carro['proprietario']['endereco']['rua'] = 'Rua dos parafusos'
// console.log(carro)

delete carro.condutores
delete carro.calcularValorDoSeguro
delete carro.proprietario.endereco

console.log(carro)
console.log(carro.condutores)  // Undefined // n da erro acessar  um elemento que n existe em um obj existente
// console.log(carro.condutores.length) // mas da problema caso tente acessar algo de um elemento undefined
