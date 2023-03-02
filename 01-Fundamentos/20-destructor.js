// uma função que vai retornar numeros aleatorios
function rand({ min = 0, max = 1000 }){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {min:40, max: 50}
console.log(rand(obj))

// se passar só um ele assume o valor default
console.log(rand({min: 995}))

// passando nenhum ele assume os 2 valores default
console.log(rand({}))

// o mesmo exemplo só que com array 
function rand2([min = 0, max = 1000]){
  // e o min for maior que o max, inverta os 2
  if(min > max)[min, max] = [max,min]
  const valor = Math.random() * (max - min ) + min
  return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([990]))
console.log(rand2([, 20]))
console.log(rand2([]))