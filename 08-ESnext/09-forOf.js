// O for Of percorre os valores e não os indices 

// sintaxe 
for(let letra of 'Cod3r'){
  console.log(letra)
}

const assuntosEcma = ['Map', 'set', 'Promise']

// for in percerre os indices
for(let i in assuntosEcma){
  console.log(i)
}

// for of percorre valores 
for(let assunto of assuntosEcma){
  console.log(assunto)
}

const assuntosMap = new Map([
  ['Map', { abordado: true}],
  ['Set', { abordado: true}],
  ['Promise', {abordado: false}]
])

// percorrendo chaves e valores 
for(let assunto of assuntosMap){
  console.log(assunto)
}

// percorrendo apenas chaves
for(let chave of assuntosMap.keys()){
  console.log(chave)
}

// percorrendo só valores 
for(let valor of assuntosMap.values()){
  console.log(valor)
}

// Retornando chave e valor com destructuring
for(let [ch, vl] of assuntosMap){
  console.log(ch, vl)
}

// Percorrendo set
const s = new Set(['a', 'b', 'c'])
for(let letra of s){
  console.log(letra)
}