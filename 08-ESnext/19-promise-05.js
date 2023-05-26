// tratamento de erro usando promises
// é recomendado que ao final dos thens tenha um catch 
// é recomendado que dentro da promise tenha um tratamento de erro(try{} catch{})

const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    try{
      con.log('temp')
      if(Math.random() < chanceErro){
        reject('Ocorreu um erro')
      }else{
        resolve(valor)
      }
    }
    catch(e){
      reject(e)
    }
  })
}

funcionarOuNao('testando...', 0.9)
  .then(v => console.log(v))
  .catch(err => console.log(`Erro: ${err}`)) 