
// Em uma string cada letra tem uma posição que inicia no 0, chamamos essa posição de indice
const gato = "renata"

console.log(gato.charAt(3))     //Renorna o caracter na possição
console.log(gato.charCodeAt(3)) //Retorna o caracter na posição no forato Unicode
console.log(gato.indexOf('a'))  //Retorna o indice se o caracter eexistir e -1 se não

console.log(gato.substring(2))   //Retorna os caracteres depois do indice 2
console.log(gato.substring(0,3)) //Retorna os caracteres do indice 0 ao 3

console.log('A gata '.concat(gato).concat(' é muito legal!'))
console.log(gato.replace('r', 'R')) // Troca o primeiro param pelo segundo

const allCats = 'Renata, Rachel, Mia'

console.log(allCats.split(','))  // Transforma em array separando com base no parametro

// concatenar com template string
console.log(` - esse é um tamplate string
 - uma maneira de concatenar onde posso pular linhas
 - adicionar variaveis, minha gata  ${gato}    e os espaços contam`)

 // pode passar expressões
 console.log(`1 + 1 = ${1 + 1}`)

 // Funções 
 const up = texto => texto.toUpperCase()
 console.log(`Ei... ${up('cuidado')}!!`)
