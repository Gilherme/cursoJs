// Reduce modifica os itens de um array percorrendo-o e armazenando o valor anterior e o atual
const alunos = [ 
  { nome: 'João', nota: 9.3, bolsista: true},
  { nome: 'Maria', nota: 8.3, bolsista: false},
  { nome: 'Pedro', nota: 5.3, bolsista: false},
  { nome: 'Lelis', nota: 9.8, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador, atual)
  return acumulador + atual
}, 0) // esse 10 é o valor inicial, para começar a soma, ele pode ser omitido
console.log(resultado)