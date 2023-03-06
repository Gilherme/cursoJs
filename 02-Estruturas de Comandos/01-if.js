

function soBoaNota(nota){
  if(nota >= 7){
    console.log(`Aprvado com nota ${nota}`)
  }
}
soBoaNota(7)

function seForVerdadeEuFalo(valor){
  if(valor){
    console.log(`É verdade.... ${valor}`)
  }
}
//false
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
// True
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})