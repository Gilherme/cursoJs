// v e v -> v
// v e f -> f
// f e v -> f

// v ou ? -> v
// f ou v -> v
// f ou f -> f

// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> v 

// !v -> f
// !f -> v

function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  // const comprarTv35 = trabalho1 = !!(trabalho1 ^ trabalho2) // bitwise xor 
  const comprarTv35 = trabalho1 != trabalho2   // maneira mais facil do xor 
  const manterSaudavel = !comprarSorvete

  // retorna um obj, os valores automaticamanete vão ser as atribuições acima 
  return {comprarSorvete, comprarTv50, comprarTv35, manterSaudavel}
}

console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(true, true))
console.log(compras(false, false))