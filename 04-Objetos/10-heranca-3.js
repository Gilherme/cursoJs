const pai = {nome: 'Guimili', raça: 'Anões' }

const filha1 = Object.create(pai) // defini filha1 como prototipo de pai
filha1.nome = 'Nord'
console.log(filha1.raça)

const filha2 = Object.create(pai, {
  nome: {value: 'Blur', writable: false, enumerable: true} //writable: define se pode ser alterado, enumerable: define se sera exibido quando fizer o object.keys, por exemplo
})

filha2.nome = 'Donatela'
console.log(`${filha2.nome} é da raça dos ${filha2.raça}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
  // console.log(key)

  filha2.hasOwnProperty(key) ? // uma forma de saber se o atributo veio por heraça ou se é dele
  console.log(key) : console.log(`Por herança: ${key}`)
}