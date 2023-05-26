
https = require('https')

const getCotacoes = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let cotacoes = ''
      
      res.on('data', dados => {
        cotacoes += dados
      })
      res.on('end', () => {
        try {
          resolve(JSON.parse(cotacoes))
        } catch(e){ 
          reject(e)
        }
      })
    })
  })
}


getCotacoes('https://brapi.dev/api/quote/list')
.then(json => {
  const stockLength = json.stock.length;
  if (stockLength === 5) {
    // O comprimento do atributo stock é igual a 5, faça algo com os dados aqui
    console.log(json);
  } 
})
.catch(error => {
  console.error(error);
});

