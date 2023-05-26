 // aulas de outro curso

 // uma promise é literalmente uma promessa, é como avisar para
 // o pra ele esperar os dados que eles vao chegar 
 console.log(typeof Promise)
 console.log('aaaa'.length === 4)
 // a promisse recebe uma função que vai cumprir a promessa
 // só pode passar pra essa função um parametro, se quiser passar mais usar array ou obj
 let p = new Promise(function(cumprirPromessa){  // A function crumprirPromessa     
  cumprirPromessa(['toma ', 'aí ', 'seus ', 3 , ' real ']) // é chamada de resolve 
 })
// o then só executa quando a promessa for cumprida
 .then(valor => valor.join(''))                 // Pode ter .thens encadeadoes
 .then(string => string.replace('real', 'reais')) // e a resposta de um é passada
 .then(vlCorrigido => console.log(vlCorrigido))             // para o outro 

