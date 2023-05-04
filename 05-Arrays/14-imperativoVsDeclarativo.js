const alunos = [
  {nome: 'João', Nota: 7.45},
  {nome: 'Maria', Nota: 9.5}
]

// Imperativo 
let total1 = 0
for(let i = 0; i < alunos.length; i++){
  total1 += alunos[i].Nota
}
console.log(total1 / alunos.length)

// declarativo
const getNota = aluno => aluno.Nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)