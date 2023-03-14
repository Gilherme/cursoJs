// o while é recomendade para quandos e tem um um numero indeterminado de repetições
//       randon = aleatorio 
function getNumberRandon(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
console.log(getNumberRandon(5, 10))

let opcao = 0
// while significa enquanto, e ficara repetindo enquanto a condição for true
// logo, o laço só será encerrado quando a opcao for = -1
while(opcao != -1){
  opcao = getNumberRandon(-1, 10)
  console.log(`Opção escolhida = ${opcao}.`)
}
console.log('fim do while')
// Math.random() gera valores aleatorios entre 0 e 1
// console.log(Math.randon)
