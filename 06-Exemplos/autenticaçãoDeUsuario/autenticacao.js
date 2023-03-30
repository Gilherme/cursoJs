

if(localStorage.getItem('token') == null){
  alert('É preciso fazer login para acessar essa pagina')
  window.location.href = 'http://127.0.0.1:5500/06-Exemplos/autentica%C3%A7%C3%A3oDeUsuario/login.html'
}
