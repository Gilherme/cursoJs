/* Antes da promise usava-se uma callback dentro da outra
 # assim como exemplificado abaixo usando setTumeout para
 # atrasar a resposta 
*/

/******* Descomente para testar *******/
// setTimeout(function(){
//   console.log('executando callback')
//   setTimeout(function(){
//     console.log('executando callback plus')
//     setTimeout(function() {
//       console.log('executando callback plus+')
//     },2000)
//   }, 2000)
// }, 2000)

// esse é um exemplo parecido usando promise
function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(() => {
      console.log('Executando promessa...')
      resolve('retorno do resolve')
    }, tempo)
  })
}
// chamando a função apenas executa ela 
esperarPor(3000)
// para pegar os dados retornados e trata-los precisa do then
esperarPor(3000).then(texto => console.log(texto))
