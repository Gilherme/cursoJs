// obj um objeto é um par, chave e valor
// maneiras de criar e atribuir chaves e valores
const produto1 = {}
produto1.nome = 'Alface'
produto1.preco = `R$ 2,00`
produto1['caracteristicas'] = {peso: 1, altura: 1}

console.log(produto1)

// Pode-se ter um obj dentro de outro 

const dogs = {
  Kiara: {
    peso: '55kg',
    idade: '1 Ano e 3 meses',
    temperamento: 'Alegre, brincalhona, compulsiva'
  },
  Stella: {
    peso: '13kg',
    idade: '1 Ano e 6 meses',
    temperamento: 'Alpha, Meiga, Calculista'
  },
  ZePequeno: {
    peso: '15kg',
    idade: '11 meses',
    temperamento: 'brincalão, Medroso, Defonsivo'
  }
}

console.log(dogs.Kiara)