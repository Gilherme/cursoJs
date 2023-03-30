
// As funções tradicionais sofrem hosting para o topo do código, isso possibilita chama-la antes da declaração
console.log(soma(2,3))

// console.log(sub(2, 3))  Essa só pode ser chamada após a declaração

// Function declaration  => tradicional
function soma(x, y){
  return x + y
}

// Function expression  => armazenando em variaveis
const subtracao = function(a, b){
  return a - b 
}

// Named function expression => as duas acima juntas 
const mult = function mult(c, d){
  return c * d
}

// o objstivo dessa aula foi explicar os 3 tipos de funções, Declaration, Expression e Named a primeira é 
// a mais usada e a maior caracteristica dela é que o interpretador js le todas elas antes de executar o código
// logo, se eu declara-la na ultima linha e chamar na primeira, funcionará normalmente.
// A Expression também muito usada não sofre o hosting como a anterior, logo precisa ser chamada depois de sua 
// criação para não haver problemas, ela descreve bem como o js é de poder armazenar funções em constantes 
// e facilita em diversos problemas
// A named é a menos usada, o beneficio dela é que na hora de debugar o seu nome aparece, o que pode facilitar
// na manutenção ou na resolução de bugs