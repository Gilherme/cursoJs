// O this costuma variar dependendo de como chama uma função, Usando arrow function
// o this nunca varia seu contexto é definido no momento da criaão e ele permanece assim

// Usando a função Bind podemos fazer com que o this não varie, mesmo usando uma função comun

const pessoa = {
    saudacao: 'Bom dia',
    falar(){
      console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// Usamos o Bind pra resolver, com o bind passamos quen sera o this, no caso "pessoa"
 const falarPessoa = pessoa.falar.bind(pessoa)
 falarPessoa()

 // outro exemplo, aqui nos amarramos o this a uma const, assim ele não varia
function Pessoa() {
  this.idade = 0 

  const self = this
  // Como é o temporizador que está chamando a funçãoo this varia 
  setInterval( function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
};

new Pessoa