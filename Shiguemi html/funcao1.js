//Uma funcao é um bloco de codigo, q ira dar um nome para ele, para q possa chamar o bloco de codigo varias vezes... 

//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3) //5 = (a + b)
imprimirSoma(2) //Pode definir apenas uma variavel mas a outra ira ser considerada undefined que ira resultar em Nan
imprimirSoma(2, 3, 4, 5, 6, 7, 8) //Ira reconhecer os dois primeiros numeros substituindo 'a' e 'b' e esquecer o restante.
imprimirSoma() //Quando for imprimir as duas variaveis ira dar undefined + undefined q ira resultar em Nan

//Funcao com retorno
function soma(a, b = 1) {
return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //Caso n define a letra b ele ira apenas somar a + 0(q é o valor da b), caso seja "function soma (a, b =1)", ira dar 3 pois vai somar 2 + b
console.log(soma()) //Ira dar Nan pois a letra 'a' n foi definida e undefined com algum numero ira dar Nan