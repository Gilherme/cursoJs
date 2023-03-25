// Função arrow é uma maneira mais simples de escrever funções
// quando usamos funcção arrow o this fica preso a ela, o que é bom para evitar bugs

// função normal
let dobro = function (a) {
  return 2 * a
}

// Arrow de retorno inplicito, quando tem apenas uma linha de retorno, as {} se tornam opcionais
dobro = (a) => 2 * a
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' // Qauando tem apenas 1 parametro da para tirar os ()
console.log(ola())

// this em função errow
// Na aula 4 tem esse mesmo exemplo abaixo usando function normal e amarrano o this
// usando self ou bind, Aqui, com arrow function não é nescessários essas gambiarras
function pessoa (){
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}
new pessoa

// Comaparando o this 
function comparaComThis(param){
  return this === param
}

// com objeto global, ou window do crohme
console.log(comparaComThis(global))

// Amarrando o this a um obj
const obj = {}
comparaComThis = comparaComThis.bind(obj)
// logo, não aponto mais para o global
console.log(comparaComThis(global))
console.log(comparaComThis(obj))

// agora com arrow
const comparaComThisArrow = param => console.log(this == param)
// com arrow ele já não aponta mais para o obj global e sim para o modulo que está iserido
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// o bind não funciona com a arrow 
const obj2 = {}
comparaComThisArrow = comparaComThisArrow.bind(obj2)
comparaComThisArrow(obj2)
