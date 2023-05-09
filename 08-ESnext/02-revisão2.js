// Arrow function
const soma = (a, b) => a + b
console.log(soma(2,3))

// This em Arrow function 
const lexico1 = () => (console.log(this === exports))
const lexico2 = lexico1.bind({}) // O bind não funciona nesse caso
lexico1()
lexico2()

// Parametros default 
function log(texto = 'Node'){
  console.log(texto)
}
log()
log('Sou mais forte')

// Operador rest  => ...parametros = [p1, p2, p3]
function total (...nums) {
  total = 0
  nums.forEach(n => total += n)
  return total
}

console.log(total(1,2,2,3,4,2))