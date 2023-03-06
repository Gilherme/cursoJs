
// O bloco { } do if é opcional, porem, apenas se tiver uma inica sentença, se tiver mais que uma ele sempre execurtara as outras gravitacionalmente
function teste1(num){
  if(num > 7)
   console.log(num)
  // Essa sentença será executada idependentemente do resultado do if
  console.log('final')
}
teste1(6)
teste1(8)