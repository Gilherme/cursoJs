const fs = require('fs')
const path = require('path')

const getArquivo = (arquivo) => {
  return new Promise(resolve => {
    fs.readFile(arquivo, (err, conteudo) => {
      resolve(JSON.parse(conteudo))
    })
  })
}

const caminho = path.join(__dirname, '00-acoes.json')

getArquivo(caminho)
  .then(cotacoes => cotacoes.stocks)
  .then(cotacoes => cotacoes.filter(acoes => acoes.stock.length == 5 ))
  .then(acoes => console.log(acoes))