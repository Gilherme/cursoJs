
// for (<declaração e atribuição de vaor a uma variavel>; <Criterio de continuação>; <incremento, decremento...>)
// Se não colocar a palavra let ou var, para declarar a variavel, ela ficará disponivel fora do bloco
for(let i = 0; i <= 5; i++ ){
  console.log( `Eu sou o numero  ${i}` )
}

const notas = [2, 5, 6.3, 10, 3.2, 9, 6.75, 8]
// for também é usado para percorrer arrays
for(let i = 0; i < notas.length; i++ ){
  console.log(`Nota: ${notas[i]}`)
}

// For in, Percorre o array pelos indices e não pelos valores 
// para fazer o mesmo que o exemplo acima acaba sendo mais facil, rapido
for(i in notas){
  console.log(`${i}-Nota: ${notas[i]}`)
}

// percorrendo obj
 const pessoa = {
  nome: 'Lavinia',
  sobrenome: 'Mendes',
  idade: 03,
  peso: '12kg'
 }

 for(atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`)
 }