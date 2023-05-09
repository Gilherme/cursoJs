const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
  // quando envia os dados ele envia o enter, o \r\n é pra n aparecer
  process.stdout.write('Fala Anonimo!\r\n')
} else{
  process.stdout.write('Informe seu nome: ')
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\r\n', '')

    process.stdout.write(`Fala ${nome}!!\r\n`)
    process.exit()
  })
}
// node 23-entradaEsaida.js