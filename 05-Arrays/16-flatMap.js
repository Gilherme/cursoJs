const escola = [{
  Nome: 'Turma M1',
  Alunos: [{
    nome: 'Gustavo',
    nota: 8.1,
  }, {
    nome: 'Anabelle',
    nota: 4.5
  }]
},{
  nome: 'Turma M2',
  Alunos: [{
    nome: 'Rebeca',
    nota: 9.8
  }, {
    nome: 'Ronaldo',
    nota: 9.3
  }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = t => t.Alunos.map(getNotaDoAluno)

// o resultado disse gera um array com 2 arrays dentro
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// o flat map é para unir esses 2 arrays 
Array.prototype.flatMap = function(callback){
  return Array.prototype.concat.apply([], this.map(callback))
}

notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)