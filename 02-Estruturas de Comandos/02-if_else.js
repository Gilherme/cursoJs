
function imprimirResultado(nota){
  if(nota >= 7){
    console.log(`Aprovado, nota = ${nota}`)
  }else{
    console.log(`Reprovado, nota = ${nota}`)
  }
}

imprimirResultado(10)
imprimirResultado('Epa') // tratar potenciais erros ou bugs 

Number.prototype.entre = function(inicio, fim){
  return this >= inicio && this <= fim
}

function aprovadosEreprovados(nota){
  if(nota.entre(9, 10)){
    console.log('Quadro De Honra!')
  }else if(nota.entre(7, 8.99)){
    console.log('Aprovado')
  }else if(nota.entre(4, 6.99)){
    console.log('Recuperação')
  }else if(nota.entre(0, 3.99)){
    console.log('Reprovado')
  }else{
    console.log('Nota Invalida')
  }
}

aprovadosEreprovados(9.7)
aprovadosEreprovados(7.8)
aprovadosEreprovados(5)
aprovadosEreprovados(2)
aprovadosEreprovados(-4)
aprovadosEreprovados(12)
