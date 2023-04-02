// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

function potenciacao(base, expoente){
  let result = 1

  for(i = 0; i < expoente; i++){
   result *= base
  }
  return result
}
console.log(potenciacao(2,3))

// OU

function potencia(base, expoente){
  return Math.pow(base, expoente)
}

console.log(potencia(2, 3))
