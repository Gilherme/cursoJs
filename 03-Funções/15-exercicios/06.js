// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function quantoVouReceberJS(capitalInicial, juros, tempo){
  let j = capitalInicial * juros * tempo
  return `Com juros simples, Você recebera no final do pediodo de ${tempo}anos o montante de R$${capitalInicial + j}`
}
console.log(quantoVouReceberJS(1000, 0.2, 3))

function quantoVouReceberJC(capitalInicial, juros, tempo){
  let m = capitalInicial * Math.pow((1 + juros), tempo)
  return  `Com juros compostos, Você recebera no final do pediodo de ${tempo}anos o montante de R$${m.toFixed(2)}`
}
console.log(quantoVouReceberJC(1000, 0.2, 3))

// Obs: o tempo deve ser passado em anos, o juros deve ser passado em decimal
