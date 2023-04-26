
const ferrari = {
  modelo: 'F40',
  velMax: 320
}

const volvo = {
  modelo: 'V40',
  velMax: 240
}

console.log(ferrari.__proto__) // para acessar o prototype do obj
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ == null)

function meuObj() {}

console.log(typeof Object, typeof meuObj)
console.log(Object.prototype, meuObj.prototype)
