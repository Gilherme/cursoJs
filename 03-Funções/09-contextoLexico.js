const valor = 'Global'

function minhaFuncao(){
  console.log(valor)
}

function exec(){
  const valor = 'local'
  minhaFuncao()
}

exec()

// O objetivo dessa aula é mostrar que a função carrega com ela, alem dos parametros e variaveis, também o local
// onde foi declarada, seu 'contexto léxico' logo, quando eu executo a função exec() na linha 12, ela vai executar 
// minhaFuncao() que foi declarada no contexto global, logo a variavel "valor" será a definida globalmente 
// veja mais na aula 10 desse mesmo captulo
