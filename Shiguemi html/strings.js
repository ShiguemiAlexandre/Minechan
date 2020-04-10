const escola = "Cod3r"

console.log(escola.charAt(4)) //Pegar um caractere dentro da string
console.log(escola.charAt(5)) //Quando esta fora do "Cod3r" = inesistente
console.log(escola.charCodeAt(3)) //Pegando o cod daquele caractere, a partir da tabela unicode
console.log(escola.indexOf('3')) //Localizacao do caracter na const

console.log(escola.substring(1)) //Quando vc faz a chamada do caractere 1 para frente = "od3r"
console.log(escola.substring(0, 3)) //Quando vc faz a chamada do Caractere 0 ao 3 = "Cod"

console.log('Escola '.concat(escola).concat("!")) //Primeiro tipo de contatenacao
console.log('Escola '+ escola + "!") //Segundo tipo de contatenacao

console.log(escola.replace(3, 'e')) //Substituicao do numero 3 pelo E

console.log('Ana,Maria,Pedro'.split(','))
