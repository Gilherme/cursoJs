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