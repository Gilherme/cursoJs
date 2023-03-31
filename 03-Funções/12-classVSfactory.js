
// Class, Pode gerar erro no browser porque o this pode mudar
class pessoa {
  constructor(nome){
    this.nome = nome
  }

  falar(){
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new pessoa('João')
p1.falar()

// Factory, Como não é nescessário o this, essa opção apresenta menos bugs
const pessoa2 = nome => {
  return{
    falar: () => console.log(`Meu nome gora é ${nome}`)
  }
}

const p2 = pessoa2('Zé pequeno')
p2.falar()