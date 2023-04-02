// call e aply são mais duas maneiras de chamar uma função 

function getPreco(imposto = 0, moeda = 'R$'){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 1999,
  desc: 0.15,
  getPreco
}

// chamar diretamente
global.preco = 10
global.desc = 0.1
console.log(getPreco())

// chamar pelo obj
console.log(produto.getPreco())

// Usando call para chamar a função, o parametro do call determina o contexto do this
const carro = { preco: 20000, desc: 0.3}
console.log(getPreco.call(carro))

// o mesmo funciona para o aply
console.log(getPreco.apply(carro))

// com o call podemos passar como parametro os proprios parametros da função
console.log(getPreco.call(carro, 0.17, '$'))

// com aplay passamos varios parametros como se fosse array, o primeiro param é o contexto e dentro do array fica os param da função
console.log(getPreco.apply(carro, [0.1, 'U$']))

