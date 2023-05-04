// não precisa criar uma variavel porque é só carregar que já tem acesso ao obj global
require('./11-global') //e para usar em outros arquivos também n é nescessário requerir novamente

console.log(minhaApp.saudacao())

// pode mudar e adicionar atributos 
minhaApp.nome =  'Eita!'
console.log(minhaApp)