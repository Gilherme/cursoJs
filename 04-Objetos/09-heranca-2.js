// Cadeia de prototypes (prototype chain)
Object.prototype.attr0 = 'Deus' // n faça isso em casa, ou melhor, cuidado ao fazer isso
const avo = {
  attr1: 'Avô'
}
const pai = {
  __proto__: avo, // para indicar o prototipo
  attr2: 'Pai',
  attr3: 'teste' 
}
const filho = {
  __proto__: pai,
  attr3: 'Filho'
}
// por meio de prototype é possivel acessar os atributos do obj pai, ele acessar o do pai dele e assim por diante 
console.log(filho.attr0, filho.attr1, filho.attr2)
// Como já tem no proprio obj ele não subira niveis para pegar o do pai
console.log(filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerar(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else{
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual}km/h de ${this.velMax}km/h `
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 320   //shadowing, vai sombrear, sobrescerver nesse contexto
}

const volvo = {
  modelo: 'V40',
  status(){ 
    return ` ${this.modelo}: ${super.status()}` // como a função status ja existe no obj volvo, e eu quero chamar também a que está no obj carro, eu uso o super. para referenciar que eu quero o status() do prototype
  }
}
// Outra maneira de definir prototypo, no casso esta dizendo que ferrari vai ser filho de carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)   // volvo não tem o attr velMax, mas ele usa a padrão definida no obj pai carro

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(200)
console.log(ferrari.status())