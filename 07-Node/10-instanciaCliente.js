const contadorA = require('./08-instanciaUnica')
const contadorB = require('./08-instanciaUnica')

// O modulo requerido retorna uma função, logo é nescessario passar os () para evoca-la
const contadorC = require('./09-instanciaNova')()
const contadorD = require('./09-instanciaNova')()

contadorA.incremento()
contadorA.incremento()

// mesmo sem mecher no contador B ele foi alterado porque o node faz cach
console.log(contadorB.valor, contadorA.valor)

contadorC.incremento()
contadorC.incremento()

// O valor não é alterado porque o que é exportado é uma função 
console.log(contadorC.valor, contadorD.valor)
