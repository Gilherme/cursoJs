function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(() => resolve(), tempo)
  })
}

esperarPor(3000)
.then(esperarPor)
.then(() =>console.log('Executando promessa...'))
.then(esperarPor)
.then(() =>console.log('Executando promessa...'))
.then(esperarPor)
.then(() =>console.log('Executan do promessa...'))