const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

const chinese = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const menorSalario = (s, sAtual) => s.salario <= sAtual.salario ? s : sAtual

axios.get(url).then(response => {
  const funcionarios = response.data

  const func = funcionarios
  .filter(chinese)
  .filter(mulher)
  .reduce(menorSalario)
  console.log(func)
})
