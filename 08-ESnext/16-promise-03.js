function gerarNumerosEntre(min, max){
  // Tratando caso o usuario passe valores invertidos
  if(min > max){          
    [max, min] = [min, max]//Invertendo valores com destructuring
  }

  return new Promise(resolve => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
  })
}

gerarNumerosEntre(10, 40)
  .then(n => n * 10)
  .then(n => `o numero gerado foi ${n}`)
  .then(console.log)