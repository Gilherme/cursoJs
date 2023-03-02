const pessoa = {
  nome: "Ana Julia",
  idade: "27 Anos ",
  endereco: {
    cidade: "cidade de deus",
    rua: " rua ABC"
  }
}

// tire de dentro do obj pessoa, nome e idade
const {nome, idade } = pessoa
console.log(nome, idade )

// tire e armazene em variaveis 
const { nome: n, idade: i} = pessoa
console.log(n, i )

// tire atributos que não existe, atribua um valor como default a um deles
const {sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)

// Tire de dentro de endereço
const {endereco: {cidade, rua, logradouro = 132 }} = pessoa 
console.log(cidade, rua, logradouro)