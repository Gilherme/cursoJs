// Object.preventExtensions ==> proibe que um obj seja extendido, Ele pode ser modificado, só não extendido

const produto = Object.preventExtensions({
  nome: 'viga 5x15', preco:20.99, tag: 'Promoção!' 
})

console.log('Extensível: ', Object.isExtensible(produto)) // testa se o obj pode ser extendido

produto.nome = 'borracha'                     // modificação
produto.descricao = 'Borracha escolar branca' // extendendo
delete produto.preco                          // deletando
// conclusão: Pode deletar e modificar atributos mas não criar novos
console.log(produto)


// Object.seal  ==> proibe que os atributos do obj sejam excluidos ou criados

const pessoa = {nome: 'juliana', idade: 143}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) // verifica se o obj está selado

pessoa.sobrenome = 'gutemberg'
pessoa.nome = 'Julianinha'
delete pessoa.idade

console.log(pessoa)

// alem desses existe o Object.freeze que proibe qualquer alteração, explicado na aula 4
