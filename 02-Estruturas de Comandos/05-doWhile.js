function getNumberRandon(min, max){
  valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 2

while(opcao != 2){
  opcao = getNumberRandon(2,10)
  console.log(opcao)
}

// acima tem um while, se a opcao iniciar com 2, ele nem entra no laço, no do while, ele entraria pelo
// menos uma vez, abaixo um exemplo da mesma estrutura só que com do while

do {
  opcao = getNumberRandon(2,10)
  console.log(opcao)
}while(opcao != 2)