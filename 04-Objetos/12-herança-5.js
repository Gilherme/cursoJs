console.log(typeof String)
console.log(typeof Object)
console.log(typeof Array)

String.prototype.reverse = function() {
  return this.split('').reverse().join('') // o split quebra a string em cada caracter incluindo os espaços e forma array com ela
  // O reverse inverte a ordem e o join junta tudo em string novamente 
}
console.log('Escola de superHerois'.reverse()) // usando a função acima

Array.prototype.first = function(){
  return this[0]
}
console.log([1, 2, 3].first())
console.log(['a', 'b', 'c'].first())

// A função toString já existe, logo estou sobreescrevendo ela, e isso pode causar muitos
// Efeitos colaterais, Não faça isso, não é algo nescessário, pode-se criar outro nome
String.prototype.toString = function(){
  return 'Lascou tudo'
}
// como mencionado acima sobrescrever uma função nativa da merda, como evidenciado abaixo
console.log('harry potter'.reverse())
