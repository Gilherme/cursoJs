// CODIGO NAO EXECUTAVEL

// Procedural
// Antigamente existia apenas o procedural que basicamente é funções que manipulam  valores e esse valores eram manipulados
// de maneiras diferentes por funções diferentes o que pode acontecer de uma dessas funções manipular o dado de uma maneira 
// não esperada afetando outras partes de codigo
processamento( valor1, valor2, valor3)

// OO -> Orientação a Objeto  
// Nesse paradigma os dados é que tem as funções, colocamos os dados e as funções dentro de objetos e a partir dos objetos manupulamos os dados
const objeto = {
  valor1,
  valor2,
  valor2,
  processamento(){
    //...
  }
}

// para usar as funções ou variaveis
objeto.processamento()

// Principios importantes 
// Abstração      -> Imaginar como algo funciona no mundo real e trazer isso para o código
// Encapsulamento -> Encapsular as abstrações que não são tão usuais para que quando modifica-las não tenha impacto nas outras, ou um impacto controlado
// Herança        -> Prototype, Possibilita quebrar o problemas em problemas menores, por exemplo, imagine um obj carro, nele havera motor, chasi, etc
// Com herança podemos falar que o objrto pai "carro" tem o obj "motor" e tratar o motor de maneira separada 