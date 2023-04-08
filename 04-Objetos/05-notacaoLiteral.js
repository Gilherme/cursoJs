// Com o ECMA15 surgiu algumas melhorias na notação de obj, veja no exemplo abaixp
const a = 1
const b = 2
const c = 3

// ANTIGAMENTE - Para criar um obj que recebe os valores acima
const obj1 = {a: a, b: b, c: c}

// HOJE - ele automaticamente pega o nome da variavel e tranforma na chave e o valor no valor 
const obj2 = {a, b, c}

console.log(obj1)
console.log(obj2)

// ANTIGAMENTE 
 const obj3 = {}
 const nomeAtributo = 'nota'
 const ValorAtributo = 7.34

obj3[nomeAtributo] = ValorAtributo
console.log(obj3)

// HOJE 
const obj4 = {[nomeAtributo]: ValorAtributo}
console.log(obj4)

// em declarar funções dentro de obj também teve melhorias, encurtando o processo
const obj5 = {
  // ANTIGAMENTE
  funcao1: function(){
    // ...
  },

  // HOJE
  funcao2(){
    // ...
  }
}
