// Operador ... rest(juntar)/spread(espalhar)

// usar spread com obj
// espalha todos os atributos de funcionarios no obj clone
const funcionarios = { nome: 'Maria', salario:5340.00}
const clone = {ativo: true, ...funcionarios}

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']

console.log(grupoFinal)