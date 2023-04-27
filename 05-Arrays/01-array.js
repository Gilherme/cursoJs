console.log(typeof Array, typeof new Array, typeof [])

// uma forma de criar array
let aprovados = new Array('Bia', 'Crlos', 'Joaquim')
console.log(aprovados)

// melhor forma
aprovados = ['Bia', 'Crlos', 'Joaquim']
console.log(aprovados[0]) // Maneiras de acesar um indice do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Um índice inexistente retorna undefined

aprovados['3'] = 'Donatello' //Uma maneira de adicionar ou editar um índice de um array já declarado
aprovados.push('Arya')       // Melhor maneira de adicionar, add no fim do array 
console.log(aprovados.length)// length retorna a quantidade de elementos em um array

aprovados['9'] = 'Rapha'     //Todos os indices do 4 ao 8 vão ficar em branco e na chamada do
console.log(aprovados.length)//Length o valor retornado será até onde o array vai, no caso, indice 9, mesmo que alguns estejam vazios 
console.log(aprovados)

aprovados.sort() // vai reordenar o array em ordem alfabética 
console.log(aprovados) 

delete aprovados[1] // maneira de excluir um indice e no lugar dele fica undefined
console.log(aprovados) 

aprovados = ['Bia', 'Crlos', 'Joaquim'] // voltando ao valor inicial para facilitar proximos exemplos

// Exclui e adiciona elementos, splice(x, y, z, w...) onde x é o indice onde vai começar a exclusão
aprovados.splice(1, 2, 'Roberto', 'Stella' )  // y é onde terminara a exclusão e z, w... é os elementos que vão ser adicionados no local
console.log(aprovados)