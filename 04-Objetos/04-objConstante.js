// quando estamos subrescrevendo atributos de um obj definido como constante não da problema porque 
// o que mudamos é o que está dentro do obj, a const continua apontando pra o mesmo obj
// mas como toda const se eu alterar ou sobrescrever o nome do obj, aí sim da problema

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// nesse caso da problema porque estou sobreescrevendo a const pessoa
// pessoa = {nome: 'Ana'}

// para que os atributos/elementos do obj não seja alterados 
Object.freeze(pessoa)
pessoa.nome = 'maria'
delete pessoa.nome
pessoa.endereco = 'Rua abc'

// não gera erro, mas depois de usar o freeze, nenhuma alteração é aceita 
console.log(pessoa.nome)
