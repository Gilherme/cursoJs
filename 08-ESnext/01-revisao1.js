// let e const 
{
  var a = 1
  let b = 2
}
console.log(a) // var só tem escopo de função e global
//console.log(b) // let tem escopo de bloco

// template string 
const produto = 'ipad'
console.log(`${produto} é mt 
caro!`)

//destructuring // desestruturar uma string em array
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)  // isso é FODA!

// desestruturar arrays
const [x, ,y] = [1, 2, 3]
console.log(x, y)

// desestruturar objetos
const { idade: i, nome } = {nome: 'Ana Laura', idade: 18}
console.log(i, nome)