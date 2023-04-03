// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores

function dividir(dividendo, divisor){
  let resultado = Math.floor(dividendo / divisor)
  let sobra = dividendo % divisor
  console.log(`Resultado: ${resultado}, Sobra: ${sobra}`)
}
dividir(145, 33)