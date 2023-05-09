// Não aceita repetição e não é associado 
const times = new Set()
// maneira de adicionar elementos
times.add('vasco')
times.add('Gremio').add('Corinthians') // pode adicionar encadeado quantos quiser
times.add('Palmeiras')
times.add('vasco')     // repetição

console.log(times)
console.log(times.size) // Retorna a quantidade de elementos 
console.log(times.has('Gremio')) // Checa se o elemento existe 
times.delete('Palmeiras')
console.log(times)

// passando em um array com um nome repetido
const nomes = ['Raquel', 'Tiago', 'Camila', 'Luciano', 'Raquel']
const nomesSet = new Set(nomes)
console.log(nomesSet) // ignora a repetição "Raquel"
