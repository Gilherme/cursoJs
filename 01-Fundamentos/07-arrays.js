// Maneiras de criar 

//Literal 
const valores = [1.3, 3.5, 9.6, 7.9]
console.log(valores)
console.log(` Indice 1 = ${valores[1]} | Indice 2 = ${valores[3]}`)
console.log(`Caso tente acessar um indice que não existe, Retorna: ${valores[5]}`)

// Podemos passar indices assim 
valores[4] = 5.5
console.log(`Agora o indice 5 vale: ${valores[4]}`)

// funções uteis 
console.log(valores.length)  // Retorna a quantidade de posições 

valores.push('Olá')          // Acresta valores 
console.log(valores)

valores.pop()                // Deleta o ultimo valor do array
console.log(valores )

delete valores[2]            // Outra maneira de deletar
console.log(valores)

console.log(typeof valores)  // Array é um OBJ