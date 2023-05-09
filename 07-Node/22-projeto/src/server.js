const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3003

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
  // res.send(bancoDeDados.getProdutos())
  res.render('index')
})
// ta funcionando mas como o produto não fica salvo ele retorna um obj vazio, decidi não implemetar mais coisas, como fazer um push do conteudo recebido porque já estou fugindo mt do curso
app.get('/produto/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/addProduto', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/addProduto', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.listen(port, () => {
  console.log('Servidor executando na porta http://localhost:3003/produtos')
})