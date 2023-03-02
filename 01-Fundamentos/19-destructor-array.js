// pra array pode ficar complexo, se for o caso vale a pena buscar outras soluções
const [a] = [10]

// aqui ta criando varias variaveis com os valores do array depois da =
const [n1, ,n3, ,n5, n6 = 0] = [11, 2, 5, 7]
console.log(n1,n3, n5, n6)

// aqui está pegando uma nota especifica dentro do array e atribuindo a const nota
const [, [, nota]] = [[1, 4, 5], [3, 7, 8]]
console.log(nota)