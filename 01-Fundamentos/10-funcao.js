// Almost everything is function (quase tudo é função)

console.log(typeof Object)  // Object is function

class produto {}
console.log(typeof produto) // Class is function

// No return function (Função sem retorno)

function imprimirSoma(a, b){
  console.log(a + b )
}

imprimirSoma(2,3)
imprimirSoma(3)        // 3 + Undefined = null
imprimirSoma(3,5,6,7)  // Ignore the last ones (ignora os ultimos)
imprimirSoma()         // undefined + undefined = null

// Function with return
function soma(a, b = 0){ // Default Value
  return a + b 
}

console.log(soma(2,6))
console.log(soma(2))
console.log(soma())

