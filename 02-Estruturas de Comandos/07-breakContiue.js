const nums = [1,2,3,4,5,6,7,8,9,10]

// usando brak ele para de percorrer o array quando a condição for verdadeira
for(x in nums){
  if(x == 5){
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

// No continue ele pula o momento que a condição for verdadeira. no caso abaixo ele pula o inice 5
for(y in nums){
  if(y == 5){
    continue
  }
  console.log(`${y} = ${nums[y]} `)
}