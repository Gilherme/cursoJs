const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}

// transformando obj em json
console.log(JSON.stringify(obj)) 

// transformando json em obj
console.log(JSON.parse('{"a": 1, "b": 2.8, "c":"ola", "d": true, "e": {}, "f": []}'))

