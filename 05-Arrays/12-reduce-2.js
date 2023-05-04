const alunos = [ 
  { nome: 'João', nota: 9.3, bolsista: true},
  { nome: 'Maria', nota: 8.3, bolsista: false},
  { nome: 'Pedro', nota: 5.3, bolsista: false},
  { nome: 'Lelis', nota: 9.8, bolsista: true}
]

// Todos os alunos são bolsistas ? 
const todosBolsistas =  (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))