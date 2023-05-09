// tagged template - processar uma template string dentro de uma função
function tag(partes, ...valores){
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
// é uma maneira de recuperar o que é template e o que é valor 
console.log(tag `${aluno} está ${situacao}.`)
// sem a tag 
console.log(`${aluno} está ${situacao}.`)