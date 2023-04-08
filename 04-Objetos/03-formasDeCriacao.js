// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object) // object é uma função, mas quando eu instancio uma função, vira um novo obj
const obj2 = new Object
console.log(obj2)

// Function construtora
function produto(nome, preco, desconto){
    this.nome = nome // usando o this ele fica exposto para contexto global
    this.getPrecoComDesconto = () => {
      return preco * (1 - desconto)
    }
}
const p1 = new produto('Caneta', 1.99, 0.2)
const p2 = new produto('Celular', 799.99, 0.25)
// com essa estrutura, de fora da função eu consigo alterar o nome do produto mas não o preço e nem o desconto
// porque eles não tem o this, logo, eles estão disponiveis apenas dentro da função. Isso pode ajudar quanto a segurança 
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1.nome, p1.preco) // o nome visivel, preço não

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalario(){
     return (salarioBase / 30) * (30 - faltas) 
    }
  }
}
const f1 = criarFuncionario('João', 3000, 7)
const f2 = criarFuncionario('Maria', 4599, 2)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

// Object.crate
const filha = Object.create(null)
filha.nome = 'Beatriz'
console.log(filha)


// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse(`{"info": "sou um JSON"}`) // JSON.parse() transforma um JSON em obj
console.log(fromJSON)

