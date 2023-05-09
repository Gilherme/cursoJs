// ES8 Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação dos obj
const nome = 'Carla'
const pessoa = {
  nome,            // antigo => nome: nome
  ola(){           // antigo => ola: function(){}
    return 'Eaee pessoall!!'
  }
}
console.log(pessoa.nome)
console.log(pessoa.ola())

// class     / Class é função
class Animal {}
class Cachorro extends Animal {   // cachorro é filho de Animal
  falar(){
    return 'Au Au'
  }
}

console.log(new Cachorro().falar())