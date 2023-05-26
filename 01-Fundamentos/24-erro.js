// try{ aqui vc coloca o código que pode dar erro } catch{ aqui a tratativa do erro}

function tratarErro(erro){
  // throw new Error('Erro! tente novamente mais tarde')
  throw "tente novamente mais tarde"
}

function imprimirNomeMaiusculo(nomes){
  try{
    console.log(nomes.nome.toUpperCase())
  }catch {
    tratarErro()
  }finally{
    console.log( 'esse bloco é exibido com ou sem erro nos acima ')
  }
}

// coloquei "name" para foeçar o erro
const nomes = {nome: 'Carlos' }

imprimirNomeMaiusculo(nomes)