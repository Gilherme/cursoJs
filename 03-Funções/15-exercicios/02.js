// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function qualTriangulo(a, b, c){

  if(a == b && b == c){
    console.log('Esse é um triangulo Equilátero')

  }else if((a == b && a != c) || (b == c && b != a)){
    console.log('Esse é um triangulo Isósceles')

  }else if(a != b && b != c){
    console.log('Esse é um triangulo Escaleno')
  }else{
    console.log('Tamanho invalido, passe apenas numeros, se decimais use o . ao invés da ,')
  }
}

qualTriangulo(122, 122, 122)
qualTriangulo(245, 245, 100)
qualTriangulo(1, 3, 4)