/*
# Uma função é um bloco de código que tem a responsabilidade de fazer um determinado trabalho
# Toda função tem retorno, se não explicitado o retorno é undefined
# Função é um dado como qualquer outro e pode ser passado como parametro
# Uma função pode conter/retornar uma outra função
*/

// forma literal 
function fun1() {
  // corpo da função
}

// Armazenar em variavel 
const fun2 = function() {
  // corpo da função
}

// Armazenar em Array 
const array = [function(a, b){return a+b}, fun1, fun2]

// Executando função dentro do array
console.log(array[0](2,3))

// Armazenar em atributos de objetos
const obj = {}
obj.falar = function(){ console.log('Eaeeee Pessoall!') }
obj.falar()

// Passar função como parametro 
const run = function(fun){
  fun()
}
run(function () {console.log('Executano..') } ) 

// função dentro de função 

const soma = function(a, b){
  return function(c){
    console.log( a+ b + c)
  }
}
soma(2, 3)(4) //ou
const cincoMais = soma(2, 3)
cincoMais(4 )