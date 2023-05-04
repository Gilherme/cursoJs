// uma factory retorna um novo obj
module.exports = () => {
  return {
    valor: 1,
    incremento(){
      this.valor++
    }
  }
}