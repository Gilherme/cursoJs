const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res =>{
      let resultado = ''
  
      res.on('data', dados => {
        resultado += dados
      })
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))
        } catch(e){ 
          reject(e)
        }
      })
    })
  })
}

//  Novo recurso do ES8
//  Com objetivo de simplificar o uso de promise
let obterAlunos = async () => {
  const tA = await getTurma('A')
  const tB = await getTurma('B')
  const tC = await getTurma('C')
  return [].concat(tA, tB, tC)
} // retorna um objeto AsyncFunction

// é nescessário o then
obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))