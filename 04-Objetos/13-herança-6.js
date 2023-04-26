function Aula(nomeAula, videoId){
  this.nomeAula = nomeAula
  this.videoId = videoId
}

const aula1 = new Aula('fisica', 01)
const aula2 = new Aula('Matematica', 02)
console.log(aula1, aula2)

// Simulando o new
function novo (f, ...params){ // f é a função, ...params indica que vai receber um array com varios parametros
  const obj = {}              // 1ª passo: criar um obj vazio
  obj.__proto__ = f.prototype // 2ª passo: Associar o prototypo do obj ao atributo prototype da função
  f.apply(obj, params)                   // 3ª passo: Fazer o obj ser o this em questão e os parametros acessados pelo obj
  return obj
}

// testando
const aula3 = novo(Aula, 'Sustentabilidade', 123)
const aula4 = novo(Aula, 'Desmatamento', 12)
console.log(aula3, aula4)
