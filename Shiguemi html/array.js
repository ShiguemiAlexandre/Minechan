const valores = [7.7, 8.9, 6.3, 9.2] // ',' virgula separardor de elementos
console.log(valores[0], valores[3]) // ira selecionar os elementos do 0 e 3 = 7.7 e 9.2
console.log(valores[4]) //quando tenta ver um elemento do array q n existe ele gera = undefined

valores[4] = 10 //ele define o elemento [localização] = valor do elemento || caso tenha espaço vazio entre ira imprimir <(quantidade) empty item>
console.log(valores)
console.log(valores.length) //diz quantos elementos tem em um array

valores.push({id: 3}, false, null, 'teste') //posso colocar mais informarcoes dentro do array de diversas formar, mas o recomendado é separar por tipo de elementos
console.log(valores)

console.log(valores.pop()) //ira remover separando o ultimo elemento do array
delete valores [0] //ira tirar o elemento do array
console.log(valores)

console.log(typeof valores)