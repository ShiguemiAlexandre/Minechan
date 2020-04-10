let valor // nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!! // n posso acessar nada q esta null ou undefined

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // se quiser tirar o atributo do elemento e n usar o undefined
console.log(produto)

produto.preco = null // esse produto esta sem preco
console.log(!!produto.preco)
console.log(produto)
 //deixar o undefined para a linguagem setar, e o programador usar o null
 