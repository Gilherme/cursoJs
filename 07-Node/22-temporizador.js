const schedule = require('node-schedule')

// é um Agendador de tarefa, '*/a cada quantos segundos * hora * mes * dia
const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 6', function(){
  console.log('executando Tarefa1', new Date().getSeconds())
})
// para parar/ cancelar a tarefa acima 
setTimeout(function() {
  tarefa1.cancel()
  console.log('Tarefa 1 Cancelada')
}, 20000)

// uma outra maneira 
const regra = new schedule.RecurrenceRule()
// regra dos dias 0 é domingo, logo ele vai executar se segunda a sexta 
regra.dayOfWeek = [new schedule.Range(1, 6)]
regra.hour = 10                                // as 12 horas
regra.second = 30                              // e 30 segundos

const tarefa2 = schedule.scheduleJob(regra, function(){
  console.log('Executando Tarefa 2 ', new Date().getSeconds())
})
