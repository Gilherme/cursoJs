// Closures é o escopo criado quando a função é declarada 
// Esse escopo permite a função acessar e manipular variaveis externas à função

// contexto léxico em ação 

const x = 'Global'

function fora(){
   const x = 'Local'
   function dentro(){
    return x
   }
   return dentro
}

console.log(fora()()) // Assim chamamos diretamente a fnção dentro

const minhaFucao = fora() // Aqui fazemos o mesmo que acima, só que armazenamos a execusão da primeira e depois executamos ela
console.log(minhaFucao())