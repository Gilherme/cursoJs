function imprimirResultado(nota){
  // Ao contrario do if, a expressão aqui não retorna true ou false, apenas recebe o valor para comparação
  switch(Math.floor(nota)){
    case 10:
    case 9:
      console.log(`Quadro de honras! nota ${nota}`)
      break // se não usar o brak ele executa todas as sentenças abaixo, mesmo tendo entrado no case acima
    case 8: 
    case 7: 
      console.log(`Aprovado! nota ${nota}`)
      break
    case 6: case 5: case 4: // os cases podem ser encadeados na mesma linha 
      console.log('Recuperação!')
      break
    case 3: case 2: case 1: case 0: 
      console.log('Reprovado.')
      break
      default:
        console.log('nota invalida')
  }
}
imprimirResultado(7.8)