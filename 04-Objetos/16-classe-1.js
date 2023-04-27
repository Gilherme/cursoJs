class Lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class cicloFinanceiro{
  constructor(mes, ano){
    this.mes = mes 
    this.ano = ano
    this.lancamentos = []
  }
  addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario(){
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salário', 4399)
const contaDeLuz = new Lancamento('Conta de Luz', -350)

const contas = new cicloFinanceiro(4, 2028)
contas.addLancamentos(salario, contaDeLuz) 
console.log(contas.sumario())