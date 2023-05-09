const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1239.99,
  desconto: 0.15
}

fs.writeFile(__dirname + '/20-arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo')
})