// Parametros é o que passa dentro do (I_am_param), eles são opcionais, podem ser omitidos ou passados a mais que não da erro
// return é opcional, uma função pode retornar algo ou não

let pessoa = 'jaqueline'
// Função sem retorno // uma função que retonea apenas um console.log() é uma função sem retorno
function saudacao(pessoa){
  console.log(`Olá ${pessoa}! Tudo bem com você hoje ?`)
}
saudacao(pessoa);

// função com retorno, ela faz uma logica ou operação e retorna o resultado
function dy(precoDaAcao, pagoPorAcao){
  return precoDaAcao / pagoPorAcao + "%";
}
console.log(dy(100, 10))
t// Parametros variaveis 

// uma função que soma todos os numeros passados no argument, que é um modo de passar um array sem crialo ou colocar valores 

function soma(){
  let soma = 0
  for(i in arguments){
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 2.3, 3.4, 4.5, 'teste'))
console.log(soma('a', 'b', 'c') )

// parametros default

// 1 maneira, Usando o operador logico
function soma1(a, b){
  a = a || 1
  b = b || 1
  return a + b
}
// o problema desse maneira é que quando passado 0 ele assume o 1 porque o 0 retorna falso, logo ele pega o default
console.log(soma1(1), soma1(2,8), soma1(0,0))

// maneiras 2, 3 e 4 
function soma2(x,y,z){
  x = x !== undefined ? x : 1
  y = 1 in arguments ? y : 1
  z = isNaN(z) ? 1 : z
  return x + y + z
}
console.log(soma2(), soma2(2), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão ES2015
function subtracao(a = 5, b = 2){
  return a - b
}

console.log(subtracao(), subtracao(2), subtracao(10,5))

