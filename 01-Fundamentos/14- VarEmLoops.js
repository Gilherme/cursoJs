
for (i = 0; i < 10; i++){
  console.log(i)
}
console.log(`i = ${i}`)  // i assume o valor que o fez sair do loop

for(let y = 1;  y < 5; y++){
  console.log(y)
}
// console.log(`y = ${y}`) // Error!

// a cada laço acrescenta uma função anonima
const funcs = []

for(i = 100; i > 89; i--){
  funcs.push(function(){
    console.log(i)
  })
}
// sempre vai imprimir 98 se mudar a declaração do i para let ele funciona como o esperado
funcs[2]()
funcs[8]()