// função callback é muito importante na linguagem javascript 
// Ela faz algo quando um evento ocorre, no exemplo abaixo o evento é cada interação do forEach
const carros = ['Fusca', 'BMW', 'Mercedez']

const imprimir = function(nome, indice){
  console.log( `${indice + 1}. ${nome}` )
}
carros.forEach(imprimir)
carros.forEach(fabricante => console.log(fabricante))
