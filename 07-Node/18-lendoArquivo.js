// para ler arquivos temos que importar o modulo do node "fs"
const fs = require('fs')

const caminho = __dirname + '/17-arquivo.json' // __dirname representa o diretorio/pasta atual

// Sincrono... Colocando diretamante no event loop, se for grande vai travar 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
// Aqui ao inves de passar diretamente o que precisa ser feito, passamos uma callback que
// vai tratar o erro, caso exista e vou poder manipular a resposta
// o mais importante dessa forma é que o event Loop fica livre em quanto o arquivo não for lido
// e quando ler ele chama a callback e ela retorna a resposta
fs.readFile(caminho, 'utf-8', ( err, conteudo) => {
  if(err) console.log('erro ao ler o arquivo');

  // para ter acesso aos dados do conteudo lido usando o . (ponto) os dados recebidos precisam
  // ser um obj, por isso é importante fazer um parse do que é retornado
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)
})

// Uma maneira de fazer tudo acima só que sem a biblioteca fs (sincrono), para arquivos pequenos até vale a pena
const config = require('./17-arquivo.json')
console.log(config.db)

// Lendo pastas
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta')
  console.log(arquivos)
})