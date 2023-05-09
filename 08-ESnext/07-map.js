// Map é como um obj (chave <-> valor) diferença é que no map a chave pode ser função, obj, array, etc
// Map não aceita repetição na chave, quando redeclara uma chave ele sobreescreve o elemento anterior

// sintaxe 
const tecnologia = new Map() 

tecnologia.set('react', {framework: false}) // adiciona ao map
tecnologia.set('angular',{ framework: true})

console.log(tecnologia.get('react').framework) // como acessar elementos

const chavesVariadas = new Map([
  [function(){ }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Numero'],
])

chavesVariadas.forEach((ch, vl) => {
  console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // checa se a chave 123 está presente no map
chavesVariadas.delete(123)           // deleta um elemento
console.log(chavesVariadas.has(123)) // Agora n está presente 
console.log(chavesVariadas.size)     // retorna quantos elementos existem no map
