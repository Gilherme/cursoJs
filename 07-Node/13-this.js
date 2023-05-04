console.log(this === global)
console.log(this === module)
console.log(this === exports)
console.log(this === module.exports)

function logThis(){
  console.log('Dentro da função')
  console.log(this === exports) // dentro da função o this n aponta para exports
  console.log(this === module.exports) // Também não 
  console.log( this === global) // THIS DENTRO DE UMA FUNÇÃO APONTA PARA O OBJ GLOBAL DO NODE
}

logThis()

thisEmArrow = () => {
  console.log('Dentro da função Arrow')
  console.log(this === exports) // Se for dentro de uma arrow function o this volta 
  console.log(this === module.exports) // a apontar para o module.exports 
  console.log( this === global) // e não mais para o global do node 
}

thisEmArrow()
