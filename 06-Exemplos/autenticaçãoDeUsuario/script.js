let btn = document.querySelector('.fa-eye')

let nome      = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let nomeOk    = false

let email      = document.querySelector('#email')
let LabelEmail = document.querySelector('#labelEmail')

let usuario      = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let usuarioOk    = false

let senha      = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let senhaOk    = false

let msgErro    = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

// para ir autenticando enquanto for escrevendo
nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', ' color: red')
    labelNome.innerHTML = '<strong>Nome *no minimo 3 caracteres</strong>'
    nome.setAttribute('style', 'border-color: red')
    nomeOk = false
  }else{
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    nomeOk = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 2  || usuario.value.length >= 12){
    labelUsuario.setAttribute('style', ' color: red')
    labelUsuario.innerHTML = '<strong>Usuario *de 3 a 12 caracteres</strong>'
    usuario.setAttribute('style', 'border-color: red')
    usuarioOk = false
  }else{
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuario'
    usuario.setAttribute('style', 'border-color: green')
    usuarioOk = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length < 6  || senha.value.length > 8){
    labelSenha.setAttribute('style', ' color: red')
    labelSenha.innerHTML = '<strong>Senha *de 6 a 8 caracteres</strong>'
    senha.setAttribute('style', 'border-color: red')
    senhaOk = false
  }else{
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    senhaOk = true
  }
})

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') === 'password' ){   // get pega
    inputSenha.setAttribute('type', 'text')              // set troca o atibuto
  }else{
    inputSenha.setAttribute('type', 'password')
  }
})

function cadastrar(){
  if(nomeOk && usuarioOk && senhaOk ){
    // adicionar ao banco de dados do navegador "localstorage" 
    let listaUser = JSON.parse(localStorage.getItem('listaUser') ||'[]' )

    // Inserir os dados dos inputs como um obj
    listaUser.push({
      nome:    nome.value,
      email:   email.value,
      usuario: usuario.value,
      senha:   senha.value
    })

    // o setItem cria um novo registro no localstorange 
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSucesso.setAttribute('style', 'display: block')
    msgSucesso.innerHTML = 'Usuario cadastrado com sucesso'
    msgErro.setAttribute('style', 'display: none')

    // para atrasar o redimerencionamento e dar tempo de exibir a mensagem de sucesso
    setTimeout(()=>{
      // Para redimerencionar a pagina de login após cadastrar usuario
      window.location.href = 'http://127.0.0.1:5500/06-Exemplos/autentica%C3%A7%C3%A3oDeUsuario/login.html'
    }, 2000)
  }else{
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Preencha todos os campos corretamente' 
  }

}

