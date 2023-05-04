const aprovados = ['Guilherme', 'Gilherme', 'Luiz', 'Barreto', 'Egoista']

// percorrendo o array acima e executando uma função para cada interação, essa função tem
aprovados.forEach(function(nome, indice){ // 3 parametros default que é nome, indice e um array. nessa ordem
  console.log(`${indice + 1}) ${nome}`)
})

// usando arrow function
aprovados.forEach(nome => console.log(nome))

//  armazenando em uma variavel para depois chamar 
const exibirAprovados = (nome, indice) => {console.log(indice, nome,)}
aprovados.forEach(exibirAprovados)