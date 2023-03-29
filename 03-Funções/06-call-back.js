// função callback é muito importante na linguagem javascript, um exemplo de callback é o onclick, o click é o call e o que acontece ao clicar é o back
// Ela faz algo quando um evento ocorre, no exemplo abaixo o evento é cada interação do forEach
const carros = ['Fusca', 'BMW', 'Mercedez']

const imprimir = function(nome, indice){
  console.log( `${indice + 1}. ${nome}` )
}
carros.forEach(imprimir)
carros.forEach(fabricante => console.log(fabricante))

//Outro exemplo de callback
const notas = [ 1.2, 3.4, 4.5, 5.6, 9.0, 7.0, 7.1, 10, 8.3]
// filtrar notas baixas (sem callback)
let notasBaixas = []
  for(let i in notas){
    if(notas[i] < 7){
      notasBaixas.push(notas[i])
    }
  }
  console.log(notasBaixas)

// Filtrar notas altas com call Back
// usando a função filter, tudo que retornar verdadeiro entra no array o que retornar falso não
// logo a função dentro tem que retornar v ou f
notasAltas = notas.filter((nota) => {
  return nota > 7
})
console.log(notasAltas)

// executando Call Back no browser, execute o codigo abaixo no console do browser
document.getElementsByTagName('body')[0].onclick = function(evento){
  console.log('O evento ocorreu')
}