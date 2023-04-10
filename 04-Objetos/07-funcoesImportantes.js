const pessoa = {
  nome: 'Rebeca',
  idade: 10,
  peso: 25
}

console.log(Object.keys(pessoa))   // Retorna todas as chaves 
console.log(Object.values(pessoa)) // Retorna todos os valores
console.log(Object.entries(pessoa))// Retorna um Array com arrays dentro das chaves e valores 

Object.entries(pessoa).forEach(([chave, valor]) => { // usando entries e destruturing para percorrer arrays
  console.log(`${chave}: ${valor}`)
})

// Para definir propriedades, é uma maneira mais longa do que apenas usar o . (pessoa.idade = ...)
// Mas abre possibilidades, como, passar as caracteristicas de acesso, se é privado ou n, etc
Object.defineProperty(pessoa, 'dataDeNascimento', {
  enumerable: false,                                   // enumerable decide se ela vai ser listada, quando por exemplo alguem requisitar console.log(pessoa.keys),
  writable: false,                                    // writable decide se a propriedade vai poder ser alterada
  value: '25/06/1999'
})

pessoa.dataDeNascimento = '01/01/2012'                // como o writable foi definido "false", a data n é modificada 
console.log(pessoa.dataDeNascimento)

console.log(Object.keys(pessoa))                      // com enumerable = false a chave "dataDeNascimento" n é exposta

// Object.assign (ECMAscript 2015) cria um obj com os objetos passados como parametro, o primeiro é o destino dos outros 
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}                         // como já existe o "a: " no obj destino o valor vai ser sobrescrito pelo dessa linha
const obj = Object.assign(destino, o1, o2)

console.log(obj)
Object.freeze(obj)          // congela o obj, para que não possa ser alterado
obj.c = 123
console.log(obj)            // Como o esperado o obj.c não é açterado por que o obj estra freezado

