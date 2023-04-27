// quando declarado como const ele não poderá ser reatribuido
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! *Remove o ultimo elemento*
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos, expliquei os parametro na aula 01

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // bottas e massa são add antes do indice 2
console.log(pilotos)

// remover 
pilotos.splice(3,1) // remove o indice 3
console.log(pilotos)

const algunsPilotos01 = pilotos.slice(2) // gera um novo array do indice 2 em diante
console.log(algunsPilotos01)

const algunsPilotos02 = pilotos.slice(1, 4) // Um novo array do indice 1 ao 3
console.log(algunsPilotos02)